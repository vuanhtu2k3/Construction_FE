import { Link } from "react-router-dom"
import Header from "../../commons/Header"
import Sidebar from "../../commons/Sidebar"
import Footer from "../../commons/Footer";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiURL, token } from "../../commons/Http";
const Show = () => {
    const [articles, setArticle] = useState([]);
    const fetchArticle = async () => {
        const res = await fetch(apiURL + 'articles', {
            method: 'GET',
            header: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const result = await res.json();
        setArticle(result.data);
    }
    const deleteArticle = async (id) => {
        if (confirm('Are you want to delete')) {
            const res = await fetch(apiURL + 'articles/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const result = await res.json();
            if (result.status == true) {
                const newArticles = articles.filter(article => article.id != id)
                setArticle(newArticles);
                toast.success(result.message);
            } else {
                toast.error(result.message);
            }
        }
    }
    useEffect(() => {
        fetchArticle();
    }, [])
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
                                    <h4 className="text-primary">Article</h4>
                                    <Link to="/admin/articles/create" className="btn btn-primary">Create</Link>
                                </div>
                                <hr />


                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Slug</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            articles && articles.map(article => {
                                                return (
                                                    <tr key={`article-${article.id}`}>
                                                        <td>{article.id}</td>
                                                        <td>{article.name}</td>
                                                        <td>{article.slug}</td>
                                                        <td>
                                                            {
                                                                (article.status == 1) ? 'Active' : 'Block'
                                                            }
                                                        </td>
                                                        <td>
                                                            <td>
                                                                <Link to={`/admin/articles/edit/${article.id}`} className="btn btn-primary">Edit</Link>
                                                                <Link onClick={deleteArticle(article.id)} href="#" className="btn btn-secondary">Delete</Link>
                                                            </td>
                                                        </td>
                                                    </tr>
                                                )

                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </>
    )
}

export default Show