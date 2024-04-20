import { useEffect, useState } from "react"

const Page = () => {
    const [loggedUser, setLoggedUser] = useState({});
    useEffect(() => {
        let user = localStorage.getItem("user");
        user = JSON.parse(user);
        setLoggedUser(user);
    }, []);

    return (
        <div>
            <h1>Welcome {loggedUser.email}</h1>
        </div>
    )
}

export default Page