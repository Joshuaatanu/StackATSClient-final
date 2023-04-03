import axios from "axios";
import { redirect } from "react-router-dom";
import { useToken } from "../states";
import localforage from "localforage";

export async function LoginAction({ request, params }: any) {
    const formData = await request.formData();

    const response = await axios.post("http://localhost:3100/api/v1/auth/signin", {
        email: formData.get("email"),
        password: formData.get("password")
    })

    console.log(response.data);
    localStorage.setItem("token", response.data.access_token);

    if (!response.data.access_token) {
        return redirect("/login")
    }

    return redirect("/student_dashboard")
}