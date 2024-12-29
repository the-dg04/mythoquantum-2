import { connectToMongo } from "@/lib/mongo.lib";
import ProjectsModel from "@/models/projectsModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET(request) {
  try {
    await connectToMongo();
    const newProject = await ProjectsModel.create({ title: "New Request",status:"Upcoming" });
    await mongoose.connection.close();
    return NextResponse.json(
      { result: { id: newProject.id, title: newProject.title } },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    await mongoose.connection.close();
    return NextResponse.json(
      { message: "Failed to send message " },
      { status: 400 }
    );
  }
}
