import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState({ name: "" });

    // useEffect(() => {
    //     const localToken = localStorage.getItem("token");
    //     if (localToken) {
    //         localStorage.setItem("token", localToken);
    //         const config = {
    //             headers: {
    //                 Authorization: `Bearer ${localToken}`,
    //             },
    //         };
    //         const promise = api.get("user/", config);
    //         promise.then((response) => {
    //             console.log(response);
    //             setUser({ ...response.data });
    //         });
    //         promise.catch((err) => {
    //             if (err.response.status === 401) {
    //                 console.log("Oh, my token");
    //                 localStorage.removeItem("token");
    //                 setToken("");
    //             }
    //         });
    //     }
    // }, []);

    return (
        <AuthContext.Provider value={{ token, setToken, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
