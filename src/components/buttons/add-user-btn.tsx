import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import gqlClient from '@/services/gql'
import { ADD_USER } from '@/lib/mutation'
import { toast } from 'sonner'

export default function AddUserBtn() {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("staff")

    async function handleAddUser() {
        try{
            const data = await gqlClient.request(ADD_USER,{
                name, email, username,password,role
            }) as {
                createUser : boolean
            }

            // console.log(data);
            

            if(data.createUser){
                toast("User added successfully");
                setName("");
                setEmail("");
                setUsername("");
                setPassword("");
                setRole("");
            }
        }catch(error){
            console.log(error);
            toast("Something went wrong");
        }
    }
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Add User</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name-1">Name</Label>
                            <Input value={name} onChange={(e) => setName(e.target.value)} id="name-1" name="name"  />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="username-1">Username</Label>
                            <Input value={username} onChange={(e) => setUsername(e.target.value)} id="username-1" name="username"  />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="username-1">Email</Label>
                            <Input value={email} onChange={(e) => setEmail(e.target.value)} id="username-1" name="username"  />
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="username-1">Password</Label>
                            <Input value={password} onChange={(e) => setPassword(e.target.value)} id="username-1" name="username"  />
                        </div>

                        <div className="grid gap-3">
                            <Label >Role</Label>
                            <div className='w-["100%]'>
                                <Select value={role} onValueChange={setRole}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="manager">Manager</SelectItem>
                                        <SelectItem value="staff">Staff</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            </div>
                            
                        </div>

                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button onClick={handleAddUser}>Save changes</Button>
                        </DialogClose>
                        
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
