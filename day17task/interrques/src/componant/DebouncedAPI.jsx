import { useState, useEffect } from "react";

function DebouncedAPI() {

    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        if (!search.trim()) {
            setUsers([]);
            setLoading(false);
            setError("");
            return;
        }

        const controller = new AbortController();

        const timer = setTimeout(async () => {

            try {
                setLoading(true);
                setError("");

                const response = await fetch(
                    `https://dummyjson.com/users/search?q=${encodeURIComponent(search)}`,
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                const data = await response.json();

                setUsers(data.users);

            } catch (error) {

                if (error.name !== "AbortError") {
                    setError(error.message);
                }

            } finally {

                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }

        }, 500);

        return () => {
            clearTimeout(timer);
            controller.abort();
        };

    }, [search]);

    return (
        <>
            <h2>Debounced User Search</h2>

            <input
                type="text"
                placeholder="Search user..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {loading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            {users.map(user => (
                <div key={user.id}>
                    <h3>{user.firstName} {user.lastName}</h3>
                    <p>{user.email}</p>
                </div>
            ))}

        </>
    );
}

export default DebouncedAPI;