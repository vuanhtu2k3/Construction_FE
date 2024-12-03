import Hero from "../commons/Hero"
import Header from "../commons/Header";
import Footer from "../commons/Footer";
import { useEffect, useState } from "react";
import { apiURL, fileUrl } from "../commons/Http";


const Service = () => {
    const [services, setServices] = useState([]);
    const fetchAllServices = async () => {
        const res = await fetch(apiURL + 'get-services', {
            method: 'GET',
        });
        const result = await res.json();
        console.log(result);
        setServices(result.data);
    }
    useEffect(() => {
        fetchAllServices();
    }, [])
    return (
        <>
            <Header />
            <Hero preHeading='Quality.Integrity. Value.'
                heading=' Construction Services'
                text='We offer a wide range of construction services to meet the diverse needs of our clients. <br/> Our team has a proven track record of successfully completing projects on time and within budget. We are dedicated to delivering high-quality construction services to
                        our clients.'/>
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
                    {/* <div className='row'>
                        <div className='col-md-3 col-sm-6'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ImgService} className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Speciality Construction</h3>
                                    </div>
                                    <div className='service-content'>
                                        <p className='text-center'>
                                            We specialize in providing high-quality construction services.
                                            Our team of experienced professionals has the expertise to handle complex construction.
                                        </p>
                                    </div>
                                    <a href="#" className='btn btn-primary'>Read More</a>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ImgService1} className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Civil Construction</h3>
                                    </div>
                                    <div className='service-content'>
                                        <p className='text-center'>
                                            We provide civil construction services to meet the diverse needs of our clients.
                                        </p>
                                    </div>
                                    <a href="#" className='btn btn-primary'>Read More</a>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ImgService2} className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Residential Construction</h3>
                                    </div>
                                    <div className='service-content'>
                                        <p className='text-center'>
                                            We specialize in providing high-quality residential construction services.
                                        </p>
                                    </div>
                                    <a href="#" className='btn btn-primary'>Read More</a>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ImgService3} className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Corporate Construction</h3>
                                    </div>
                                    <div className='service-content'>
                                        <p className='text-center'>
                                            We provide corporate construction services to meet the diverse needs of our clients.
                                        </p>
                                    </div>
                                    <a href="#" className='btn btn-primary'>Read More</a>

                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

            </section>
            <Footer />
        </>
    )
}

export default Service