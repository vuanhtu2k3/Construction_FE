import Footer from "../commons/Footer"
import Header from "../commons/Header"
import Sidebar from "../commons/Sidebar"


const Dashboard = () => {
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
                                <div className="card-body">
                                    <h5 className="card-title">Welcome to Dashboard</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />


        </>
    )
}

export default Dashboard