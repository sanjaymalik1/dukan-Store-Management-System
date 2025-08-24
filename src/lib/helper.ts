import { verifyToken } from "@/services/jwt";
import prismaClient from "@/services/prisma";
import { cookies } from "next/headers";


export async function getUserFromCookies() {
    const userCookies = await cookies();
    const token = userCookies.get("finalToken")?.value;

    if (!token) return null;

    const data = verifyToken(token);

    if (!data) return null;
    try{
        const user = await prismaClient.user.findUnique({
        where: {
            id: data.id
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            username : true,
            avatar : true
            // just don’t include password, so it won’t be returned
        }
        // omit: {
        //     password: true
        // }
    })

    if (!user) return null;

    return user;
    }catch(error){
        console.log("error in fetching user from cookies : ",error);
        return null;
        
    }
    
}