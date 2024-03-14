import { useState } from "react"
import { registerApiCall } from "../services/AuthService";

const RegisterComponent = () => {

    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function handelRegistrationForm(e){
        e.preventDefault();
        const register={name,username,email,password};
        console.log(register);
        registerApiCall(register).then((response)=>{
            console.log(response.data)
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
                                    <label className="control-label">Name</label>
                                </div>
                                <div className="col-md-9">
                                    <input type="text"
                                            name="name"
                                            placeholder="Enter Name"
                                            className="form-control"
                                            value={name}
                                            onChange={e=>setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-3">
                                    <label className="control-label">Username</label>
                                </div>
                                <div className="col-md-9">
                                    <input type="text"
                                            name="username"
                                            placeholder="Enter Username"
                                            className="form-control"
                                            value={username}
                                            onChange={e=>setUsername(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-3">
                                    <label className="control-label">Email</label>
                                </div>
                                <div className="col-md-9">
                                    <input type="email"
                                            name="email"
                                            placeholder="Enter Email Address"
                                            className="form-control"
                                            value={email}
                                            onChange={e=>setEmail(e.target.value)}
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
                                <button className="btn btn-primary" onClick={(e)=>handelRegistrationForm(e)}>Submit</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>

    </div>
  )
}

export default RegisterComponent