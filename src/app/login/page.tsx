"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LOGIN_USER } from "@/lib/query"
import gqlClient from "@/services/gql"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { toast } from "sonner"
import wait from "wait"


export default function Login() {
    
    const [password,setPassword] = useState("");
    const [userCredential,setUserCredential] = useState("");
    const [error,setError] = useState<{
      message? : string
    }>({});
    const [loading, setLoading] = useState(false)

    async function handleLogin(){
        setError({});
        setLoading(true);
        
        try{
            const res = await gqlClient.request(LOGIN_USER,{
            userCredential,
            password
        }) as {loginUser : boolean}

        // console.log(res);
        

        if(res.loginUser){
            // alert("login successfull")
            toast("Login successfull.")
            await wait(1000)
            window.location.href = "/dashboard/admin"
            // redirect("/")
        }else{
          setError({message : "Invalid credentials"})
            alert("login unsuccessfull")
        }
        }catch(error){{
            // console.log(error.message);
            // redirect("/")
             console.log(error);
            setError({})
            alert("something went wrong")
        }}
        setLoading(false)
    }

  return (
    <div className=" h-screen flex items-center justify-center">
    <Card className="w-full max-w-sm flex flex-col">
      <div className="relative h-16 w-16 rounded-full self-center">
        <Image fill src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfR1eJP65f5SkPiql2AIbFZhNQwxUhcJIRMRGkQ6-RvcGMEKuodZDdsrMdB64mkL2MDU&usqp=CAU"} alt="storeImage"/>
      </div>
      <h2 className="self-center">Welcome Back!</h2>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Link href={"/signup"}><Button variant="link">Sign Up</Button></Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form >
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
              value={userCredential}
              onChange={(e)=>setUserCredential(e.target.value)}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        {
              error.message && <div className="text-red-600 self-center">{error.message}</div>
            }
        <Button disabled={loading} className="w-full" onClick={handleLogin} >
          Login
        </Button>
        <Button disabled={loading} variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}
