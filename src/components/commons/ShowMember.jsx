import { useEffect, useState } from "react"
import { apiURL, fileUrl } from "./Http";

const ShowMember = () => {
    const [members, setMembers] = useState([]);
    const fetchAllMember = async () => {
        const res = await fetch(apiURL + 'get-latest-members', {
            method: 'GET',
        });
        const result = await res.json();
        if (result.status == true) {
            setMembers(result.data);
        } else {
            console.log(result.message);
        }
    }
    useEffect(() => {
        fetchAllMember();
    }, []);
    return (
        <>
            <section className="section-8 bg-ligt py-3">
                <div className='section-header text-center py-5'>
                    <span>Team</span>
                    <h2>Our Team</h2>
                    <p>
                        We are a team of skilled and experienced professionals who are dedicated to delivering high-quality construction services to
                    </p>
                </div>
                <div className='row'>
                    {
                        members && members.map(member => {
                            return (
                                <div className="col-md-4" key={member.id}>
                                    <div className="card shadow border-0">
                                        <div className='card-img-top'>
                                            <img src={`${fileUrl}uploads/members/small/${member.image}`} alt="" className='w-100' />

                                        </div>
                                        <div className='card-body'>
                                            <div className='pb-3'>
                                                <div className="name">
                                                    {
                                                        member.name
                                                    }
                                                </div>
                                                <div className="name-job">
                                                    <h5>
                                                        {
                                                            member.job_title
                                                        }
                                                    </h5>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                                </svg>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


            </section>
        </>
    )
}

export default ShowMember