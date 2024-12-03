import { useContext } from "react"
import { AuthContext } from "../back-end/context/Auth";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const { logout } = useContext(AuthContext);
    return (
        <div className="card border-0 shadow ">
            <div className="card-body sidebar">
                <h5 className="card-title">Sidebar</h5>
                <ul>
                    <li><Link to="/admin/dashboard">Dashboard</Link></li>
                    <li><Link to="/admin/services"> Service</Link></li>
                    <li><Link to="/admin/projects">Project</Link></li>
                    <li><Link to="/admin/articles">Article</Link></li>
                    <li>
                        <button onClick={logout} className="btn btn-primary">
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar