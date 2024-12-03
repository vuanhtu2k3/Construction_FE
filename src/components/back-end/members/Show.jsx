import { Link } from "react-router-dom"
import Header from "../../commons/Header"
import Sidebar from "../../commons/Sidebar"
import Footer from "../../commons/Footer";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiURL, token } from "../../commons/Http";
const Show = () => {
    const [members, setMembers] = useState([]);
    const fetchAllMembers = async () => {
        const res = await fetch(apiURL + 'members', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const result = await res.json();
        setMembers(result.data);
    }
    const deleteMember = async (id) => {
        const res = await fetch(apiURL + 'members/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const result = await res.json();
        if (result.status == true) {
            const newMembers = members.filter(member => member.id != id);
            setMembers(newMembers);
            toast.success(result.message);
        } else {
            toast.error(result.message);
        }
    }
    useEffect(() => {
        fetchAllMembers();
    }, []);

    return (
        <>
            <Header />
            <main>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-md-9">
                            <div className="card border-0 shadow">
                                <div className="d-flex justify-content-between">
                                    <h4 className="text-primary">Member</h4>
                                    <Link to="/admin/members/create" className="btn btn-primary">Create</Link>
                                </div>
                                <hr />


                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Slug</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            members && members.map(member => {
                                                return (
                                                    <tr key={`member-${member.id}`}>
                                                        <td>{member.id}</td>
                                                        <td>{member.name}</td>
                                                        <td>{member.slug}</td>
                                                        <td>
                                                            {
                                                                (member.status == 1) ? 'Active' : 'Block'
                                                            }
                                                        </td>
                                                        <td>
                                                            <td>
                                                                <Link to={`/admin/members/edit/${member.id}`} className="btn btn-primary">Edit</Link>
                                                                <Link onClick={deleteMember(member.id)} href="#" className="btn btn-secondary">Delete</Link>
                                                            </td>
                                                        </td>
                                                    </tr>
                                                )

                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </>)
}

export default Show