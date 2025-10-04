import React, { useEffect } from "react";
import { fetchUsers } from "../store/userSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks/reduxHooks";

const UserPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { list, loading, error } = useAppSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers()); // 🔥 dispara la petición
    }, [dispatch]);

    if (loading) return <p>Cargando usuarios...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {list.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
};

export default UserPage;
