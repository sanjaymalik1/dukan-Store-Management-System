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
// import { gql } from "graphql-request"
import Link from "next/link"
import { useState } from "react"

// const SIGNUP_QUERY = gql`
// mutation Mutation($name: String!, $email: String!, $username: String!, $password: String!) {
//   createUser(name: $name, email: $email, username: $username, password: $password) {
//     id
//     email
//     avatar
//     name
//     role
//     username
//   }
// }`

export default function SignupPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {

  }

  return (
    <div className="flex h-screen items-center justify-center">

      <Card className="w-full max-w-sm mt-30 ml-100">
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
