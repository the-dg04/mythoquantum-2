import { connectToMongo } from "@/lib/mongo.lib";
import ProjectsModel from "@/models/projectsModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = 'force-dynamic';
export async function GET(request,{params}) {
    try {
        await connectToMongo()
        const paramsVal=await params
        const project=await ProjectsModel.findById(paramsVal.id)
        await mongoose.connection.close()
        return NextResponse.json({result:project}, { status: 200 })
    } catch (err) {
        console.error(err)
        await mongoose.connection.close()
        return NextResponse.json({ message: "Failed to send message " }, { status: 400 })
    }
}