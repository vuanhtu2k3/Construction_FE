import { useEffect, useState } from "react";
import { apiURL, fileUrl } from "../commons/Http"

const LatestProject = () => {
    const [projects, setProjects] = useState([])
    const fetchLatestProject = async () => {
        const res = await fetch(apiURL + 'get-latest-projects?limit=4', {
            method: 'GET',
        });
        const result = await res.json();
        if (result.status == true) {
            setProjects(result.data)
        } else {
            console.log(result.message)
        }
    }
    useEffect(() => {
        fetchLatestProject()
    }, [])
    return (
        <>
            <section className='section-4 py-5'>
                <div className='container py-5'>
                    <div className='section-header text-center'>
                        <h4>Why Choose Us</h4>
                        <span> Discover our wide variety of project</span>
                        <p>
                            We are a team of experienced professionals who are dedicated to providing high-quality construction services to our clients
                        </p>
                    </div>
                    <div className='row'>
                        {
                            projects && projects.map(project => {
                                return (

                                    <div className='col-md-4' key={project.id}>
                                        <div className='card shadow border-0 p-4'>
                                            <div className='card-icon'>
                                                <img src={`${fileUrl}uploads/projects/small/${project.image}`} />
                                            </div>
                                            <div className='card-title mt-3'>

                                                <h3>{project.title}</h3>


                                                <p>
                                                    {project.short_desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }

                    </div>

                </div>

            </section>
        </>
    )
}

export default LatestProject