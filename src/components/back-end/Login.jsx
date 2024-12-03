import { toast } from "react-toastify";
import Footer from "../commons/Footer"
import Header from "../commons/Header"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/Auth";


const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        const res = await fetch("http://localhost:8000/api/authenticate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await res.json();
        if (result.status == false) {
            toast.error(result.message);
        } else {
            //Luu Tru du lieu vao LocalStorage
            const userInfo = {
                id: result.id,
                token: result.token
            };
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            login(userInfo);
            navigate('admin/dashboard');
        }
        console.log(result);
    }

    return (
        <>
            <Header />
            <div className="container d-flex justify-content-center">
                <div className="login-form my-5">
                    <div className="card border-0 shadow">
                        <div className="card-body p-4">
                            <h3 className="mb-3">Login-Here</h3>
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        {
                                        ...register('email', {
                                            required: "This field is required",
                                            pattern: {
                                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                                                message: "Invalid email"
                                            }
                                        })
                                        }
                                        type="text" className="form-control" placeholder="Email" />
                                    {
                                        errors.email && <div className="text-danger">{errors.email.message}</div>
                                    }
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        {
                                        ...register('password', {
                                            required: "This field is required"
                                        })
                                        }
                                        type="password" className="form-control" placeholder="Password" />
                                    {
                                        errors.password && <div className="text-danger">{errors.password.message}</div>
                                    }
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login