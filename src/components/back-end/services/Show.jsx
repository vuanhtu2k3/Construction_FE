import { useEffect, useState } from "react"
import Footer from "../../commons/Footer"
import Header from "../../commons/Header"
import Sidebar from "../../commons/Sidebar"
import { apiURL, token } from "../../commons/Http"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"


const Show = () => {
    const [services, setServices] = useState([]);


    const fetchServices = async () => {
        const res = await fetch(apiURL + 'services', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`,
            }
        });
        const result = await res.json();
        setServices(result.data);
    }
    const deleteService = async (id) => {
        if (confirm("Are you sure you want to delete?")) {
            const res = await fetch(apiURL + 'services/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`,
                }
            });
            const result = await res.json();
            if (result.status == true) {
                const newServices = services.filter(service => service.id != id)
                setServices(newServices);
                toast.success(result.message)
            } else {
                toast.error(result.message)
            }
        }
    }
    useEffect(() => {
        fetchServices();
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
                                    <h4 className="text-primary">Service</h4>
                                    <Link to="/admin/services/create" className="btn btn-primary">Create</Link>
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
                                            services && services.map(service => {
                                                return (
                                                    <tr key={`service-${service.id}`}>
                                                        <td>{service.id}</td>
                                                        <td>{service.name}</td>
                                                        <td>{service.slug}</td>
                                                        <td>
                                                            {
                                                                (service.status == 1) ? 'Active' : 'Block'
                                                            }
                                                        </td>
                                                        <td>
                                                            <td>
                                                                <Link to={`/admin/services/edit/${service.id}`} className="btn btn-primary">Edit</Link>
                                                                <Link onClick={deleteService(service.id)} href="#" className="btn btn-secondary">Delete</Link>
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