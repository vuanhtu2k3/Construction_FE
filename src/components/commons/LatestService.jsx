import { useEffect, useState } from 'react'
import { apiURL, fileUrl } from "../commons/Http"

const LatestService = () => {
    const [services, setServices] = useState([]);
    const fetchLatestServices = async () => {
        const res = await fetch(apiURL + 'get-latest-services?limit=4', {
            method: 'GET',
        });
        const result = await res.json();
        console.log(result);
        setServices(result.data);
    }
    useEffect(() => {
        fetchLatestServices();
    }, [])
    return (

        <>
            <section className='section-3 bg-light py-2'>
                <div className='container fluid'>
                    <div className='section-header text-center py-5'>
                        <span>Our Service</span>
                        <h3>Our Construction Services</h3>
                        <p> We offer a wide range of construction services to meet the diverse needs of our clients.</p>
                    </div>
                    <div className='row'>
                        {
                            services && services.map(service => {
                                (
                                    <div className='col-md-3 col-sm-6'>
                                        <div className='item'>
                                            <div className='service-image'>
                                                <img src={`${fileUrl}uploads/service/small/${service.image}`} className='w-100' />
                                            </div>
                                            <div className='service-body'>
                                                <div className='service-title'>
                                                    <h3>{service.title}</h3>
                                                </div>
                                                <div className='service-content'>
                                                    <p className='text-center'>
                                                        {service.short_desc}
                                                    </p>
                                                </div>
                                                <a href="#" className='btn btn-primary'>Read More</a>

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

export default LatestService