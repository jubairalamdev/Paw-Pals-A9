import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

export const registerUser = async (e) => {
    const auth_name = "Register"
    const form = new FormData(e.currentTarget); 
    const user = Object.fromEntries(form.entries());
    const { data, error } = await authClient.signUp.email({
        name: user.name,
        email: user.email,
        password: user.password,
        image: user.photoUrl,
        callbackURL: "/login",
    });

    if(error){
        toast.error("There was a Server Error")
    }
    if(data){
        toast.success(`${auth_name} Successful`)
    }
    // console.log("DATA: ", data, "ERROR: ", error)
} 