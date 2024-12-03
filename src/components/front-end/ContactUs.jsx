import Footer from "../commons/Footer"
import Header from "../commons/Header"
import Hero from "../commons/Hero"


const ContactUs = () => {
    return (
        <>
            <Header />
            <Hero preHeading='Quality.Integrity. Value.'
                heading='Contact Us'
                text='We offer a wide range of construction services to meet the diverse needs of our clients.' />

            <section className="section-9 py-5 bg-light">
                <div className="container">
                    <div className="section-header text-center">

                        <h2>
                            Contact Us
                        </h2>
                        <p>
                            Our dedicated expertes are here to help you with any of your questions, contact us by filling out the form below and we will  be in touch shortly.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card shadow border-0">
                                <div className="card-body">
                                    <h4 className="call-us mb-3">
                                        Call Us
                                        <div>
                                            <a>Phone: 555-555-5555</a>
                                        </div>
                                    </h4>
                                    <h4 className="call-us mb-3 ">
                                        You can write to us
                                        <div>
                                            <a>Email: [info@example.com]</a>
                                        </div>
                                    </h4>
                                    <h4 className="call-us mb-3 ">
                                        Address:
                                        <div>
                                            <a> 300 HTM, Cau Giay District, Ha Noi</a>

                                        </div>

                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="card shadow border-0">
                                <div className="card-body ">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 form-group">
                                                <label htmlFor="name" className="form-label">Name:</label>
                                                <input type="text" id="name" className="form-control" placeholder="Enter Name" />
                                            </div>
                                            <div className="col-md-6 mb-4 form-group">
                                                <label htmlFor="email" className="form-label">Email:</label>
                                                <input type="email" id="email" className="form-control" placeholder="Enter Email" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 form-group">
                                                <label htmlFor="phone" className="form-label">Phone:</label>
                                                <input type="text" id="phone" className="form-control" placeholder="Enter Phone" />
                                            </div>
                                            <div className="col-md-6 mb-4 form-group">
                                                <label htmlFor="subject" className="form-label">Subject:</label>
                                                <input type="text" id="subject" className="form-control" placeholder="Enter Subject" />
                                            </div>
                                        </div>
                                        <div className=" form-group">
                                            <label htmlFor="message" className="form-label">Message</label>
                                            <textarea rows={5} id="message" className="form-control" placeholder="Enter Message" />
                                        </div>
                                        <button type="submit" className="btn btn-primary mt-4">Submit</button>
                                    </form>

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

export default ContactUs