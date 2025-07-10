import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function POST(req) {
  try {
    const { user } = await req.json();

    // Check if user exists in the database
    const existingUser = await db
      .select()
      .from(Users)
      .where(eq(Users.email, user?.primaryEmailAddress.emailAddress));

    if (existingUser.length === 0) {
      // User doesn't exist, create one
      const insertRes = await db
        .insert(Users)
        .values({
          name: user?.fullName,
          email: user?.primaryEmailAddress.emailAddress,
          imageUrl: user?.imageUrl,
        })
        .returning({ Users });

      console.log(insertRes);

      return NextResponse.json({ result: insertRes });
    } else {
      console.log("User already exists");
    }

    return NextResponse.json({ result: existingUser });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
