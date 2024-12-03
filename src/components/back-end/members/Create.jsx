import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import Footer from "../../commons/Footer"
import Header from "../../commons/Header"
import Sidebar from "../../commons/Sidebar"
import { useForm } from "react-hook-form"
import { apiURL, token } from "../../commons/Http"
import { toast } from "react-toastify"

const Create = () => {
    const [isDisable, setDisable] = useState(false);
    const [imageId, setImageId] = useState(null);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        setDisable(true);
        const newData = { ...data, "imageId": imageId };
        const res = await fetch(apiURL + 'members', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(newData)
        });
        const result = await res.json();
        if (result.status == true) {
            toast.success(result.message);
            navigate('admin/members');
        } else {
            toast.error(result.message);
        }
    }
    const handleFile = async (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        const res = await fetch(apiURL + 'temp-images', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });
        const result = await res.json();
        if (result.status == false) {
            toast.error(result.errors.image[0]);
        } else {
            setImageId(result.data.id);
        }
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
                                    <h4 className="text-primary">Member/Create</h4>
                                    <Link to="/admin/members" className="btn btn-primary">Back</Link>
                                </div>
                                <hr />
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label d-flex justify-content-between">Name</label>
                                        <input
                                            {
                                            ...register('name', {
                                                required: "The name is required",
                                            })
                                            }
                                            type="text"
                                            className={`form-control ${errors.name && 'is-invalid'}`} placeholder="Enter Name" />
                                        {
                                            errors.name && <div className="text-danger">{errors.name.message}</div>
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name" className=" form-label d-flex justify-content-between">Job Title</label>
                                        <input {
                                            ...register('job_title', {
                                                required: "The job_title is required",
                                            })
                                        } type="text" className={`form-control ${errors.job_title && 'is-invalid'}`} placeholder="Enter Job Title" />
                                        {
                                            errors.job_title && <div className="text-danger">{errors.job_title.message}</div>
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="linkedin_url" className="form-label d-flex justify-content-between">Linkedin URL</label>
                                        <textarea {
                                            ...register('linkedin_url', {
                                                required: "The linkedin_url is required",
                                            })
                                        } className="form-control" rows={4} placeholder="Enter Linkedin_url " />
                                    </div>


                                    <div className="mb-3">
                                        <label htmlFor="image" className="form-label d-flex justify-content-between">Image</label>
                                        <input type="file" className='form-control' onChange={handleFile} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="" className="form-label d-flex justify-content-between"> Status</label>
                                        <select className="form-control" name="status" id="status"{
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

export default Create