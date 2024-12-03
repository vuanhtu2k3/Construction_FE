import Protypes from "prop-types";
import Header from '../../commons/Header'
import Sidebar from '../../commons/Sidebar'
import Footer from '../../commons/Footer'
import JoditEditor from 'jodit-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useRef, useMemo } from 'react'
import { toast } from "react-toastify"
import { apiURL, fileUrl, token } from "../../commons/Http"
import { useForm } from 'react-hook-form'

const Edit = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [project, setProject] = useState('');
    const [isDisable, setDisable] = useState(false);
    const [imageId, setImageId] = useState(null);
    const params = useParams();
    const config = useMemo(() => ({
        readonly: false,
        placeholder: placeholder || '',
    }), [placeholder]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: async () => {
            const res = await fetch(apiURL + 'projects/' + params.id, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token()}`,
                },

            });
            const result = await res.json();
            setContent(result.data.content);
            setProject(result.data);
            return {
                title: result.data.title,
                slug: result.data.slug,
                short_desc: result.data.short_desc,
                status: result.data.status,
                construction_type: result.data.construction_type,
                location: result.data.sector,
                sector: result.data.sector

            }

        }
    })
    const navigatate = useNavigate();
    const onSubmit = async (data) => {
        setDisable(true);
        const newData = { ...data, "content": content, "imageId": imageId };
        const res = await fetch(apiURL + 'projects/' + params.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`,
            },
            body: JSON.stringify(newData)
        });
        const result = await res.json();

        if (result.status == true) {
            toast.success(result.message);
            navigatate('/admin/projects');
        } else {
            toast.error(result.message);
        }
        setDisable(false);

    }
    const handleFile = async (e) => {
        const formData = new FormData();
        formData.append('file', e.target.files[0]);

        await fetch(apiURL + 'temp-images', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`,
            },
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.status == false) {
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
                                    <h4 className="text-primary">Project/Edit</h4>
                                    <Link to="/admin/projects" className="btn btn-primary">Back</Link>
                                </div>
                                <hr />
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label d-flex justify-content-between">Title</label>
                                        <input
                                            {
                                            ...register('title', {
                                                required: "The title is required",
                                            })
                                            }
                                            type="text"
                                            className={`form-control ${errors.title && 'is-invalid'}`} placeholder="Enter Title" />
                                        {
                                            errors.title && <div className="text-danger">{errors.title.message}</div>
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="slug" className=" form-label d-flex justify-content-between">Slug</label>
                                        <input {
                                            ...register('slug', {
                                                required: "The slug is required",
                                            })
                                        } type="text" className={`form-control ${errors.slug && 'is-invalid'}`} id="slug" placeholder="Enter slug" />
                                        {
                                            errors.slug && <div className="text-danger">{errors.slug.message}</div>
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="short_desc" className="form-label d-flex justify-content-between">Short Description</label>
                                        <textarea {
                                            ...register('short_desc', {
                                                required: "The short description is required",
                                            })
                                        } className="form-control" id="short_desc" rows={4} placeholder="Enter Short Description" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="content" className="form-label d-flex justify-content-between">Content</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={content}
                                            config={config}
                                            tabIndex={1}
                                            onBlur={(newContent) => setContent(newContent)}
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="location" className="form-label d-flex justify-content-between">Location</label>
                                                <input
                                                    {
                                                    ...register('location', {
                                                        required: "The location is required",
                                                    })
                                                    }
                                                    type="text" id="location" className="form-control" placeholder='Enter Location' />
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="construction_type" className='form-label d-flex justify-content-between'>Construction Type</label>
                                                <select name="construction_type" id="construction_type" className='form-control'
                                                    {
                                                    ...register('construction_type', {
                                                        required: "The construction type is required",
                                                    })
                                                    }
                                                >
                                                    <option value="Residental Contruction">Residental Contruction</option>
                                                    <option value="Commercial Contruction">Commercial Construction</option>
                                                    <option value="Industrial Contruction">Industrial Construction</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="image" className="form-label d-flex justify-content-between">Image</label>
                                        <input type="file" className='form-control' onChange={handleFile} />
                                    </div>
                                    <div className="pb-3">
                                        {
                                            project.image && <img src={fileUrl + 'uploads/projects/small/' + project.image} alt="" />
                                        }
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label htmlFor="sector" className='form-label d-flex justify-content-between'>Sector</label>
                                            <select name="sector" id="sector" className='form-control'
                                                {
                                                ...register('sector', {
                                                    required: "The sector is required",
                                                })
                                                }
                                            >
                                                <option value="Health">Health</option>
                                                <option value="Education">Commercial Construction</option>
                                                <option value="Corporate">Corporate</option>
                                            </select>
                                        </div>
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
        </>
    )
}
Edit.propTypes = {
    placeholder: Protypes.string.isRequired,
}

export default Edit