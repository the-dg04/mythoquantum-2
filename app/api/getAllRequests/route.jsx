import { connectToMongo } from "@/lib/mongo.lib";
import ProjectsModel from "@/models/projectsModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = 'force-dynamic';
export async function GET(request) {
    try {
        await connectToMongo()
        const allProjects=await ProjectsModel.find({},"_id title description status imgUrl category")
        await mongoose.connection.close()
        return NextResponse.json({result:allProjects}, { status: 200 })
    } catch (err) {
        console.error(err)
        await mongoose.connection.close()
        return NextResponse.json({ message: "Failed to send message " }, { status: 400 })
    }
}