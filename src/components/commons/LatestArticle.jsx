import { useEffect, useState } from "react";
import { apiURL, fileUrl } from "../commons/Http"
const LatestArticle = () => {
    const [articles, setArticles] = useState([]);
    const fetchLatestArticle = async () => {
        const res = await fetch(apiURL + 'get-latest-articles?limit=4', {
            method: 'GET',
        })
        const result = await res.json();
        if (result.status == true) {
            setArticles(result.data);
        } else {
            console.log(result.message);
        }
    }
    useEffect(() => {
        fetchLatestArticle();
    }, []);
    return (
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
                    {
                        articles && articles.map(article => {
                            return (
                                <div className="col-md-4 pb-4" key={article.id}>
                                    <div className="card shadow border-0">
                                        <div className='card-img-top'>
                                            <img src={`${fileUrl}uploads/articles/small/${article.image}`} alt="" className='w-100' />

                                        </div>
                                        <div className='card-body'>
                                            <div className='pb-3 '>
                                                <p >Dummy Blog Title</p>

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

    )
}

export default LatestArticle