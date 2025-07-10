import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { user } = await req.json();

    // Check if user exists in the database
    const existingUser = await db
      .select()
      .from(Users)
      .where(eq(Users.email, user?.email));

    if (existingUser.empty()) {
      // If not, add the user to the database

      const insertRes = await db
        .insert(Users)
        .values({
          name: user?.fullName,
          email: user?.primaryEmailAddress.emailAddress,
          imageUrl: user?.imageUrl,
        })
        .returning(user);

      return NextResponse.json({ result: insertRes });
    } else {
      return NextResponse.json({ result: existingUser });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.status(500).json({ error });
  }
}
