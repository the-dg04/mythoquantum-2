import { connectToMongo } from "@/lib/mongo.lib";
import ProjectsModel from "@/models/projectsModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = 'force-dynamic';
export async function DELETE(request,{params}) {
    try {
        await connectToMongo()
        const {id}=await params
        const allProjects=await ProjectsModel.findByIdAndDelete(id)
        await mongoose.connection.close()
        return NextResponse.json({message:`deleted ${id} successfully`}, { status: 200 })
    } catch (err) {
        console.error(err)
        await mongoose.connection.close()
        return NextResponse.json({ message: "Failed to send message " }, { status: 400 })
    }
}