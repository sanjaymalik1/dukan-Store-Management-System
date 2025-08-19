"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react";
import { User } from "../../generated/prisma";
import gqlClient from "@/services/gql";
import { GET_ALL_USERS } from "@/lib/query";



export function UsersTable() {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        
        async function getAllUsers() {
            setLoading(true)
            const data = await gqlClient.request(GET_ALL_USERS) as {
                getAllUsers: User[]
            };
            const usersList = data.getAllUsers || [];

            setUsers(usersList)
            setLoading(false)
        }

        getAllUsers();
        
    }, [])

    return (
        <Table>
            {/* <TableCaption>A list of your recent users.</TableCaption> */}
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">User Id</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className="text-right">Role</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>

                {
                    loading ? (<TableRow><TableCell>Loading...</TableCell></TableRow>) : (users.map((user) => (
                <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell className="text-right">{user.role}</TableCell>
                </TableRow>
                )))
    }
            </TableBody>


            {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
        </Table>
    )
}
