import { verifyToken } from "@/services/jwt";
import prismaClient from "@/services/prisma";
import { cookies } from "next/headers";


export async function getUserFromCookies(){
    const userCookies = await cookies();
    const token = userCookies.get("finalToken")?.value;

    if(!token) return null;
    
    const data = verifyToken(token);
    
    if(!data) return null;

    const user = await prismaClient.user.findUnique({
        where : {
            id : data.id
        },
        omit : {
            password : true
        }
    })

    if(!user) return null;

    return user;
}