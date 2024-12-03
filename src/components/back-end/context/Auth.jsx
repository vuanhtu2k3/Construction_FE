import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {

    const userInfo = localStorage.getItem('userInfo');
    const [user, setUser] = useState(userInfo);

    const login = (user) => {
        setUser(user);
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('userInfo');
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>

    )

};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};


