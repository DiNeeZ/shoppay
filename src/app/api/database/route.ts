import { NextResponse } from "next/server";
import db from "@/utils/db";

export async function GET() {
  await db.connectDb();
  await db.disconnectDb();
  return NextResponse.json({ name: "JOHN DOE" });
}
