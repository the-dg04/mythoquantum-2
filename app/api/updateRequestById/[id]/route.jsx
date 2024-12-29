import { connectToMongo } from "@/lib/mongo.lib";
import ProjectsModel from "@/models/projectsModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = 'force-dynamic';
export async function PATCH(request,{params}) {
    try {
        const body=await request.json()
        // console.log("body : ",body)
        await connectToMongo()
        const {id}=await params
        const allRequests=await ProjectsModel.updateOne({_id:new mongoose.Types.ObjectId(id)},{$set:body})
        // console.log(allRequests)
        await mongoose.connection.close()
        return NextResponse.json({message:`updated ${id} successfully`}, { status: 200 })
    } catch (err) {
        console.error(err)
        await mongoose.connection.close()
        return NextResponse.json({ message: "Failed to send message " }, { status: 400 })
    }
}