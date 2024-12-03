import BlogImg from '../../assets/images/construction8.jpg';
import BlogImg1 from '../../assets/images/construction11.jpg';
import BlogImg2 from '../../assets/images/construction9.jpg';
import Hero from '../commons/Hero';
import Header from '../commons/Header';
import Footer from '../commons/Footer';

const Blog = () => {
    return (
        <>
            <Header />
            <Hero preHeading='Quality.Integrity. Value.'
                heading=' Blog && News'
                text='We offer a wide range of construction services to meet the diverse needs of our clients. <br/> Our team has a proven track record of successfully completing projects on time and within budget. We are dedicated to delivering high-quality construction services to
                        our clients.'/>
            <section className='section-6 bg-light pb-5 '>
                <div className='container'>
                    <div className='section-header text-center py-5'>
                        <span>Blog && News</span>
                        <h2>Articles && Blog Post</h2>
                        <p>
                            We are always updating our blog with the latest news and articles.
                        </p>
                    </div>
                    <div className='row'>
                        <div className="col-md-4 pb-4">
                            <div className="card shadow border-0">
                                <div className='card-img-top'>
                                    <img src={BlogImg} alt="" className='w-100' />

                                </div>
                                <div className='card-body'>
                                    <div className='pb-3 '>
                                        <p >Dummy Blog Title</p>

                                    </div>
                                    <a href="#" className='btn btn-primary'>Read More</a>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 pb-4">
                            <div className="card shadow border-0">
                                <div className='card-img-top'>
                                    <img src={BlogImg1} alt="" className='w-100' />

                                </div>
                                <div className='card-body'>
                                    <div className='pb-3'>
                                        <p>Construction Blog Title</p>
                                    </div>
                                    <a href="#" className='btn btn-primary'>Read More</a>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 pb-4">
                            <div className="card shadow border-0">
                                <div className='card-img-top'>
                                    <img src={BlogImg2} alt="" className='w-100' />
                                </div>
                                <div className='card-body'>
                                    <div className=' pb-3 '>
                                        <p>House Blog Title</p>
                                    </div>
                                    <a href="#" className='btn btn-primary'>Read More</a>
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

export default Blog