import AboutImg from "../../assets/images/about-us.jpg"

const AboutUs = () => {
    return (
        <>
            <section className='section-2 py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={AboutImg} className='w-100' />
                        </div>
                        <div className='text col-md-6'>
                            <span>About Us</span>
                            <h2>
                                Crafting dream with precision and excellence
                            </h2>
                            <p>
                                We are a team of skilled and experienced professionals who are dedicated to delivering high-quality construction services to
                                our clients. <br /> Our team has a proven track record of successfully completing projects on time and within budget. We are dedicated to delivering high-quality construction services to
                                our clients.
                            </p>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default AboutUs