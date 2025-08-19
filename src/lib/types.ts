import { $Enums } from "../../generated/prisma";

export type UserWithoutPassword = {
    name: string;
    id: string;
    role: $Enums.RoleType;
    email: string;
    username: string;
    avatar: string | null;
}