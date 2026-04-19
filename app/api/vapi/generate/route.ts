import OpenAI from "openai";

import { db } from "@/firebase/admin";
import { getRandomInterviewCover } from "@/lib/utils";

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(request: Request) {
  const { type, role, level, techstack, amount, userid } =
    await request.json();

  try {
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-3.5-turbo", // free on OpenRouter
      messages: [
        {
          role: "user",
          content: `Prepare questions for a job interview.
Role: ${role}
Level: ${level}
Tech Stack: ${techstack}
Focus: ${type}
Number of questions: ${amount}

IMPORTANT:
- Return ONLY a valid JSON array
- No explanation
- No special characters like / or *

Format:
["Question 1", "Question 2", "Question 3"]`,
        },
      ],
    });

    const text = completion.choices[0]?.message?.content || "[]";

    // Safe parsing
    let parsedQuestions;
    try {
      parsedQuestions = JSON.parse(text);
    } catch {
      parsedQuestions = text.split("\n").filter((q) => q.trim() !== "");
    }

    const interview = {
      role,
      type,
      level,
      techstack: techstack.split(","),
      questions: parsedQuestions,
      userId: userid,
      finalized: true,
      coverImage: getRandomInterviewCover(),
      createdAt: new Date().toISOString(),
    };

    await db.collection("interviews").add(interview);

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      { success: false, error: "Failed to generate questions" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json({ success: true, data: "Thank you!" }, { status: 200 });
}