import jwt from "jsonwebtoken"


export function createToken(data : {
    id : string
}){
    try{
        const token = jwt.sign(data,process.env.SECRET_KEY as string);

    return token as string
    }catch(error){
        console.log(error);
        
        return null;
    }
    
}


export function verifyToken(token : string){
    try{
        const data = jwt.verify(token,process.env.SECRET_KEY as string);

         return data as { id : string}
    }catch(error){
         console.log(error);
        return null;
    }
    
}