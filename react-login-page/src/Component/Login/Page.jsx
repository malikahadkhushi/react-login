import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Page = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = () => {

        localStorage.setItem("user", JSON.stringify(user));
        if (user.email && user.password) {
            navigate('/home');
        } else {
            alert("Please Provide Credentials")
        }

    }

    return (
        <div className=" bg-black h-screen w-full">
            <div style={{ display: "flex", flexDirection: "column", columnGap: "10px", gap: "10px" }}>
                <input name="email" value={user.email} onChange={() => { handleChange(event) }} type="text" placeholder="Enter Your Email" />
                <input name="password" value={user.password} onChange={() => { handleChange(event) }} type="text" placeholder="Enter Your password" />
                <button onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}

export default Page;