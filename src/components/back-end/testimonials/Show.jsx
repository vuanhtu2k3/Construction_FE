import { Link } from "react-router-dom"
import Header from "../../commons/Header"
import Sidebar from "../../commons/Sidebar"
import Footer from "../../commons/Footer";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiURL, token } from "../../commons/Http";
const Show = () => {
    const [testimonials, setTestimonials] = useState([]);
    const fetchTestimonials = async () => {
        const res = await fetch(apiURL + 'testimonials', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const result = await res.json();
        setTestimonials(result.data);
    }
    const deleteTestimonial = async (id) => {
        if (confirm('Are you want to delete')) {
            const res = await fetch(apiURL + 'tesimonials' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const result = await res.json();
            if (result.status == true) {
                const newTestimonials = testimonials.filter(testimonial => testimonial.id != id);
                setTestimonials(newTestimonials);
                toast.success(result.message);
            } else {
                toast.error(result.message);
            }
        }
    }
    useEffect(() => {
        fetchTestimonials();
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
                                    <h4 className="text-primary">Testimonials</h4>
                                    <Link to="/admin/testimonials/create" className="btn btn-primary">Create</Link>
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
                                            testimonials && testimonials.map(testimonial => {
                                                return (
                                                    <tr key={`testimonial-${testimonial.id}`}>
                                                        <td>{testimonial.id}</td>
                                                        <td>{testimonial.name}</td>
                                                        <td>{testimonial.slug}</td>
                                                        <td>
                                                            {
                                                                (testimonial.status == 1) ? 'Active' : 'Block'
                                                            }
                                                        </td>
                                                        <td>
                                                            <td>
                                                                <Link to={`/admin/testimonials/edit/${testimonial.id}`} className="btn btn-primary">Edit</Link>
                                                                <Link onClick={deleteTestimonial(testimonial.id)} href="#" className="btn btn-secondary">Delete</Link>
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