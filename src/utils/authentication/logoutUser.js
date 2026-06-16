import { authClient } from "@/lib/auth-client";

export const logoutUser = async() =>{
    await authClient.signOut();
}