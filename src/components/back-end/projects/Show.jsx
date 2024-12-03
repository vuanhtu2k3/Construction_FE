import { Link } from "react-router-dom"
import Header from "../../commons/Header"
import Sidebar from "../../commons/Sidebar"
import Footer from "../../commons/Footer";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiURL, token } from "../../commons/Http";

const Show = () => {
    const [projects, setProjects] = useState([]);


    const fetchProjects = async () => {
        const res = await fetch(apiURL + 'projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`,
            }
        });
        const result = await res.json();
        setProjects(result.data);
    }
    const deleteProject = async (id) => {
        if (confirm("Are you sure you want to delete?")) {
            const res = await fetch(apiURL + 'projects/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`,
                }
            });
            const result = await res.json();
            if (result.status == true) {
                const newProjects = projects.filter(project => project.id != id)
                setProjects(newProjects);
                toast.success(result.message)
            } else {
                toast.error(result.message)
            }
        }
    }
    useEffect(() => {
        fetchProjects();
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
                                    <h4 className="text-primary">Project</h4>
                                    <Link to="/admin/projects/create" className="btn btn-primary">Create</Link>
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
                                            projects && projects.map(project => {
                                                return (
                                                    <tr key={`project-${project.id}`}>
                                                        <td>{project.id}</td>
                                                        <td>{project.name}</td>
                                                        <td>{project.slug}</td>
                                                        <td>
                                                            {
                                                                (project.status == 1) ? 'Active' : 'Block'
                                                            }
                                                        </td>
                                                        <td>
                                                            <td>
                                                                <Link to={`/admin/projects/edit/${project.id}`} className="btn btn-primary">Edit</Link>
                                                                <Link onClick={deleteProject(project.id)} href="#" className="btn btn-secondary">Delete</Link>
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
        </>
    )
}

export default Show