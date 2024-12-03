// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Footer from '../commons/Footer';
import Header from '../commons/Header';
// import ImgService from '../../assets/images/construction2.jpg';
// import ImgService1 from '../../assets/images/construction3.jpg';
// import ImgService2 from '../../assets/images/construction4.jpg';
// import ImgService3 from '../../assets/images/constructionn4.jpg';
// import BlogImg from '../../assets/images/construction8.jpg';
// import BlogImg1 from '../../assets/images/construction11.jpg';
// import BlogImg2 from '../../assets/images/construction9.jpg';
// import Icon1 from '../../assets/images/icon-1.svg';
// import Icon2 from '../../assets/images/icon-2.svg';
// import Icon3 from '../../assets/images/icon-3.svg';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/css";
// import AvatarImg from '../../assets/images/author-2.jpg';
// import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import AboutUs from '../commons/AboutUs';
import LatestService from '../commons/LatestService'
import LatestProject from '../commons/LatestProject'
import LatestArticle from '../commons/LatestArticle'
import ShowTestimonial from '../commons/ShowTestimonial';

const Home = () => {

    return (

        <>
            <Header />
            <main>
                <section className='section-1 py-3'>
                    <div className='hero d-flex align-items-center'>
                        <div className='container'>
                            <div className='text-center'>
                                <span>
                                    Welcome To Construction Amazing
                                </span>
                                <h1>
                                    Crafting dream with <br />precision and excellence
                                </h1>
                                <p>
                                    We are a team of skilled and experienced professionals who are dedicated to delivering high-quality construction services to
                                    our clients. Our team has a proven track record of successfully completing projects on time and within budget.
                                </p>
                                <div>
                                    <a className='btn btn-primary'>Contact Now</a>
                                    <a className='btn btn-secondary'>View Project</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <AboutUs />
                <LatestService />
                {/* <section className='section-3 bg-light py-2'>
                    <div className='container fluid'>
                        <div className='section-header text-center py-5'>
                            <span>Our Service</span>
                            <h3>Our Construction Services</h3>
                            <p> We offer a wide range of construction services to meet the diverse needs of our clients.</p>
                        </div>
                        <div className='row'>
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
                        </div>
                    </div>

                </section> */}

                <LatestProject />
                {/* <section className='section-4 py-5'>
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

                </section> */}
                {/* <section className='section-5 py-5'>
                    <div className='container'>
                        <div className='section-header text-center'>
                            <span>Testimonials</span>
                            <h2>What People are saying about us</h2>
                            <p>
                                We are proud of our reputation for delivering high-quality services and solutions that meet the diverse needs of
                            </p>
                        </div>
                    </div>

                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <div className='card shadow border-0 p-4'>
                                <div className='card-body p-4'>
                                    <div className='rating'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                    <div className='content py-4 pb-2'>
                                        <p>
                                            I have been using this service for a while now and I must say it has been a game changer.
                                        </p>

                                    </div>
                                    <hr />
                                    <div className='d-flex meta pt-3 '>
                                        <div>
                                            <img src={AvatarImg} alt="" width={50} />
                                        </div>
                                        <div className='ps-3'>
                                            <div className='name'>
                                                John Dang
                                            </div>
                                            <div>
                                                CEO
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card shadow border-0 p-4'>
                                <div className='card-body p-4'>
                                    <div className='rating'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                    <div className='content py-4 pb-2'>
                                        <p>
                                            I have been using this service for a while now and I must say it has been a game changer.
                                        </p>

                                    </div>
                                    <hr />
                                    <div className='d-flex meta pb-4'>
                                        <div>
                                            <img src={AvatarImg} alt="" width={50} />
                                        </div>
                                        <div className='ps-3'>
                                            <div className='name'>
                                                John Dang
                                            </div>
                                            <div>
                                                CEO
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card shadow border-0 p-4'>
                                <div className='card-body p-4'>
                                    <div className='rating'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                    <div className='content py-4 pb-2'>
                                        <p>
                                            I have been using this service for a while now and I must say it has been a game changer.
                                        </p>

                                    </div>
                                    <hr />
                                    <div className='d-flex meta pt-3'>
                                        <div>
                                            <img src={AvatarImg} alt="" width={50} />
                                        </div>
                                        <div className='ps-3'>
                                            <div className='name'>
                                                John Dang
                                            </div>
                                            <div>
                                                CEO
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card shadow border-0 p-4'>
                                <div className='card-body p-4'>
                                    <div className='rating'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                    <div className='content py-4 pb-2'>
                                        <p>
                                            I have been using this service for a while now and I must say it has been a game changer.
                                        </p>

                                    </div>
                                    <hr />
                                    <div className='d-flex meta pt-3 '>
                                        <div>
                                            <img src={AvatarImg} alt="" width={50} />
                                        </div>
                                        <div className='ps-3'>
                                            <div className='name'>
                                                John Dang
                                            </div>
                                            <div>
                                                CEO
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </SwiperSlide>
                    </Swiper>



                </section> */}
                <LatestArticle />
                {/* <section className='section-6 bg-light pb-5 '>
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

                </section> */}
                <ShowTestimonial />

            </main>

            <Footer />

        </>

    );

}

export default Home