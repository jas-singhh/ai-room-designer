import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    return NextResponse.json({ result: "hello world!" });
  } catch (error) {
    console.error("Error in generate image route: ", error);
    return NextResponse.json({ error: "Failed to generate image" }, { status: 500 });
  }
}
