import { useState } from "react"
import { loginApiCall } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
    const [usernameOrEmail,setUsernameOrEmail] = useState('')
    const [password,setPassword] = useState('');
    const navigate=useNavigate();

    function handelLoginForm(e){
        e.preventDefault();
        const loginObj={usernameOrEmail,password};
        loginApiCall(loginObj).then((response)=>{
            console.log(response.data);
            navigate('/todos');
        }).catch((error)=>console.error(error));

    }

  return (
    <div className="container">
        <br /><br />
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        <h2 className="text-center">User Registeration</h2>
                    </div>
                    <div className="card-body">
                        <form action="">
                            <div className="row mb-3">
                                <div className="col-md-3">
                                    <label className="control-label">Username or Email</label>
                                </div>
                                <div className="col-md-9">
                                    <input type="text"
                                            name="usernameOrEmail"
                                            placeholder="Enter Username or Email"
                                            className="form-control"
                                            value={usernameOrEmail}
                                            onChange={e=>setUsernameOrEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-3">
                                    <label className="control-label">Password</label>
                                </div>
                                <div className="col-md-9">
                                    <input type="password"
                                            name="password"
                                            placeholder="Enter Password"
                                            className="form-control"
                                            value={password}
                                            onChange={e=>setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <button className="btn btn-primary" onClick={(e)=>handelLoginForm(e)}>Submit</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>

    </div>
  )
}

export default LoginComponent