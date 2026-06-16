import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

export const loginUser = async (e) => {
    const auth_name = "Login"
    const form = new FormData(e.currentTarget); 
    const user = Object.fromEntries(form.entries());
    const { data, error } = await authClient.signIn.email({
        email: user.email,
        password: user.password,
        rememberMe: true,
        callbackURL: "/"
    });
    if (error) {
        toast.error("There was a Server Error")
        return error
    }
    if (data) {
        toast.success(`${auth_name} Successful`)
        return data
    }
}