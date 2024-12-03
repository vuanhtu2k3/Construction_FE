import { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom"
import Footer from "../../commons/Footer"

import Header from "../../commons/Header"
import Sidebar from "../../commons/Sidebar"
import { useForm } from "react-hook-form"
import { apiURL, fileUrl, token } from "../../commons/Http"
import { toast } from "react-toastify"

const Edit = () => {
    const params = useParams();
    const [testimonial, setTestimonial] = useState('');
    const [isDisable, setDisable] = useState(false);
    const [imageId, setImageId] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: async () => {
            const res = await fetch(apiURL + 'testimonials/' + params.id, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token()}`,
                }

            });
            const result = await res.json();
            setTestimonial(result.data);
            return {
                testimonial: result.data.testimonial,
                citation: result.data.citation,
                designation: result.data.designation,
                status: result.data.status,
            }

        }
    });
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        setDisable(true);
        const newData = { ...data, "imageId": imageId };
        const res = await fetch(apiURL + 'testimonials', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token()}`
            },
            body: JSON.stringify(newData)
        });
        const result = await res.json();
        if (result.status == true) {
            toast.success(result.message);
            navigate('admin/testimonials');
        } else {
            toast.error(result.message);
        }
    }
    const handleFile = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        await fetch(apiURL + 'temp-images', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token()}`
            },
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.stauts == false) {
                    toast.error(result.errors.image[0]);
                } else {
                    setImageId(result.data.id);
                }
            })
    }
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
                                    <h4 className="text-primary">Testimonial/Create</h4>
                                    <Link to="/admin/testimonials" className="btn btn-primary">Back</Link>
                                </div>
                                <hr />
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label d-flex justify-content-between">Testimonial</label>
                                        <input
                                            {
                                            ...register('testimonial', {
                                                required: "The testimonial is required",
                                            })
                                            }
                                            type="text"
                                            className={`form-control ${errors.testimonial && 'is-invalid'}`} placeholder="Enter Testimonials" />
                                        {
                                            errors.testimonial && <div className="text-danger">{errors.testimonial.message}</div>
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="citation" className=" form-label d-flex justify-content-between">Citation</label>
                                        <input {
                                            ...register('citation', {
                                                required: "The citation is required",
                                            })
                                        } type="text" className={`form-control ${errors.citation && 'is-invalid'}`} id="slug" placeholder="Enter Citation" />
                                        {
                                            errors.citation && <div className="text-danger">{errors.citation.message}</div>
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="citation" className=" form-label d-flex justify-content-between">Designation</label>
                                        <input {
                                            ...register('designation', {
                                                required: "The designation is required",
                                            })
                                        } type="text" className={`form-control ${errors.designation && 'is-invalid'}`} id="slug" placeholder="Enter Designation" />
                                        {
                                            errors.designation && <div className="text-danger">{errors.designation.message}</div>
                                        }
                                    </div>



                                    <div className="mb-3">
                                        <label htmlFor="image" className="form-label d-flex justify-content-between">Image</label>
                                        <input type="file" className='form-control' onChange={handleFile} />
                                    </div>
                                    <div className="pb-3">
                                        {
                                            testimonial.image && <img src={fileUrl + 'uploads/testimonials/small/' + testimonial.image} alt="" />
                                        }
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label d-flex justify-content-between"> Status</label>
                                        <select className="form-control"
                                            {
                                            ...register('status', {
                                                required: "The status is required",
                                            })
                                            }>
                                            <option value="1">Active</option>
                                            <option value="0">Block</option>
                                        </select>
                                    </div>
                                    <button disabled={isDisable} className="btn btn-secondary">Submit</button>
                                </form>



                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </>)
}

export default Edit