
import prismaClient from "@/services/prisma";
import { RoleType } from "../../../../../generated/prisma";
import { createToken } from "@/services/jwt";
import { cookies } from "next/headers";
import { getUserFromCookies } from "@/lib/helper";


export async function loginUser(_ : undefined, args: {
    userCredential: string,
    password: string
}) {
    try {

        const userCookies = await cookies();
        const user = await prismaClient.user.findFirst({
            where: {
                OR : [
                    {
                        email: args.userCredential
                    },
                    {
                        username : args.userCredential
                    }
                ]
                
            }
        })
        if (!user) return false;
        if (user.password == args.password) {
            const token = createToken({ id: user.id })
            if (token) userCookies.set("finalToken", token)
            return true;
        } else {
            return false;
        }
    } catch (error) {
         console.log(error);
        return false;
    }
}


export async function createUser(args: {
    name: string,
    email: string,
    username: string,
    password: string
}) {
    // const {name,email,username,password} = args;
    try {
        // const userObj = {name,email,username,password}
        const currentUser = await getUserFromCookies();
        if (!currentUser) return null;

        if (currentUser.role == "admin") {
            const user = await prismaClient.user.create({
                data: args
            })

            return user;
        } else {
            return null;
        }

    } catch (error) {
         console.log(error);
        return null;
    }

}


export async function updateRole(args: {
    id: string,
    role: RoleType
}) {
    // const {name,email,username,password} = args;
    try {
        // const userObj = {name,email,username,password}
        const currentUser = await getUserFromCookies();
        if (!currentUser) return false;

        if (currentUser.role == "admin") {
            const user = await prismaClient.user.update({
                where: {
                    id: args.id
                },
                data: {
                    role: args.role
                }
            })
            console.log(user);
            
            return true;
        } else {
            return false;
        }

    } catch (error) {
         console.log(error);
        return false;
    }

}


export async function updateUserProfile(args: {
    id: string,
    name : string,
    email : string,
    username : string,
    avatar : string
}) {
    // const {name,email,username,password} = args;
    try {
        // const userObj = {name,email,username,password}
        const currentUser = await getUserFromCookies();
        if (!currentUser) return false;

        if (currentUser. id == args.id || currentUser.role == "admin") {
            const dataTosSave = {
                name : args.name,
                email : args.email,
                username : args.username,
                avatar : args.avatar
            }
            const user = await prismaClient.user.update({
                where: {
                    id: args.id
                },
                data: dataTosSave
            })
            console.log(user);
            
            return true;
        } else {
            return false;
        }

    } catch (error) {
         console.log(error);
        return false;
    }

}


export async function getAllUsers(args : {
    role : "staff" | "manager"
}){
    try{
        console.log(args);
        
        const users = await prismaClient.user.findMany({
            where : {
                role : {
                    not : "admin"
                }
            },
            
        })

        return users
    }catch(error){
         console.log(error);
        return null
    }
}