import Hero from "../commons/Hero"
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import Header from "../commons/Header";
import Footer from "../commons/Footer";
const Project = () => {
    return (
        <>
            <Header />
            <Hero preHeading='Quality.Integrity. Value.'
                heading=' Our Projects'
                text='We are proud of the work we have done and the relationships we have built. ' />
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
                        <div className='col-md-4'>
                            <div className='card shadow border-0 p-4'>
                                <div className='card-icon'>
                                    <img src={Icon1} />
                                </div>
                                <div className='card-title mt-3'>

                                    <h3>Cutting-Edge Solutions</h3>


                                    <p>
                                        We provide cutting-edge solutions to meet the diverse needs of our clients.
                                    </p>



                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card shadow border-0 p-4'>
                                <div className='card-icon'>
                                    <img src={Icon2} />
                                </div>
                                <div className='card-title mt-3'>

                                    <h3>Cutting-Edge Solutions</h3>


                                    <p>
                                        We provide cutting-edge solutions to meet the diverse needs of our clients.
                                    </p>



                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card shadow border-0 p-4'>
                                <div className='card-icon'>
                                    <img src={Icon3} />
                                </div>
                                <div className='card-title mt-3'>

                                    <h3>Cutting-Edge Solutions</h3>


                                    <p>
                                        We provide cutting-edge solutions to meet the diverse needs of our clients.
                                    </p>



                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <Footer />
        </>

    )
}

export default Project