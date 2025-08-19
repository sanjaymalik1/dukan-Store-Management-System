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
import gqlClient from "@/services/gql"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"
import { SIGNUP_QUERY } from "@/lib/mutation"
import { UserWithoutPassword } from "@/lib/types"



export default function SignupPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {
    
    try{
      const res = await gqlClient.request(SIGNUP_QUERY,{
        name,
        email,
        username,
        password
      }) as {signup : UserWithoutPassword}

      // console.log(res);
      

      if(res.signup){
        toast("Account created successfully");
        window.location.href = "/dashboard/admin"
      }else{
        toast("Username/email already taken")

      }
    }catch{
      toast("something went wrong")
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">

      <Card className="w-full max-w-sm ">
        <CardHeader>
          <CardTitle>Create your account</CardTitle>
          <CardDescription>
            Enter your details to create your account
          </CardDescription>
          <CardAction>
            <Link href={"/login"}><Button variant="link">Login</Button></Link>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  type="text"
                  placeholder="John"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>

                </div>
                <Input value={password}
                  onChange={(e) => setPassword(e.target.value)} id="password" type="password" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="username">Username</Label>

                </div>
                <Input value={username}
                  onChange={(e) => setUsername(e.target.value)} id="username" type="text" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button className="w-full" onClick={handleSignup}>
            Create
          </Button>

        </CardFooter>
      </Card>
    </div>
  )
}
