import {NextResponse} from "next/server";


export function GET(req){
    try {

        return NextResponse.json({message:"Error"})
    }catch (err){
        return NextResponse.json({message:"Error"})
    }
}