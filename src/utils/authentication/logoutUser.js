import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export const logoutUser = async() =>{
    await authClient.signOut();
    toast.success("Logged out Successfully")
    redirect("/")
}