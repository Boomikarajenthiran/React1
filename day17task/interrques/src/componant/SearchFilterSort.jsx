import { useState, useEffect } from "react";

function SearchFilterSort() {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [city, setCity] = useState("All");
    const [sort, setSort] = useState("default");

    useEffect(() => {

        const getUsers = async () => {

            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                if (!response.ok) {
                    throw new Error("API Error");
                }

                const data = await response.json();

                setUsers(data);

            } catch (error) {
                console.log(error.message);
            }
        };

        getUsers();

    }, []);

    // Unique cities
    const cities = ["All", ...new Set(
        users.map(user => user.address.city)
    )];

    // Temporary result array
    let result = [...users];

    // 1. Search
    result = result.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    // 2. City filter
    if (city !== "All") {
        result = result.filter(user =>
            user.address.city === city
        );
    }

    // 3. ID sorting
    if (sort === "low") {
        result.sort((a, b) => a.id - b.id);
    }
    else if (sort === "high") {
        result.sort((a, b) => b.id - a.id);
    }

    return (
        <>
            <h2>User Management</h2>

            <input
                type="text"
                placeholder="Search name"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            <select
                value={city}
                onChange={e => setCity(e.target.value)}
            >
                {cities.map((c, index) => (
                    <option key={index} value={c}>
                        {c}
                    </option>
                ))}
            </select>

            <select
                value={sort}
                onChange={e => setSort(e.target.value)}
            >
                <option value="default">Default</option>
                <option value="low">ID Low to High</option>
                <option value="high">ID High to Low</option>
            </select>

            {result.map(user => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.address.city}</p>
                    <p>ID: {user.id}</p>
                </div>
            ))}
        </>
    );
}

export default SearchFilterSort;