import axios from "axios"

export async function fetchStudentApplication() {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:3100/api/v1/applicant/my_application", { headers: { Authorization: `Bearer ${token}` } })
    return response.data;
}