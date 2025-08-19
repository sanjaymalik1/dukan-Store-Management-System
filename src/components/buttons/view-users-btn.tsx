"use client"
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
import { UsersTable } from "../users-table"

export function ViewUsersBtn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View Users</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Users</DialogTitle>
          <DialogDescription>
            A list of recent users.
          </DialogDescription>
        </DialogHeader>
        
        <UsersTable/>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
