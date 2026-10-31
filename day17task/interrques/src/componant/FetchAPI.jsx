import { useState, useEffect } from "react";

function FetchAPI() {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        const getUsers = async () => {

            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                const data = await response.json();

                setUsers(data);

            } catch (error) {
                console.log(error.message);
            }
        };

        getUsers();

    }, []);

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <h2>User Search</h2>

            <input
                type="text"
                placeholder="Search user name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {filteredUsers.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </>
    );
}

export default FetchAPI;