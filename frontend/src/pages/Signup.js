import { useState } from "react"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")

    const signup = async (e) => {
        e.preventDefault()
    }
   
    return (
    <form action="" className="form" onSubmit={signup}>
        <h2>Sign up</h2>
        <div className='form-group'>
          <label>Email</label>
            <input 
                type="text" 
                value={username}
                onChange={e => setUsername(e.target.value)}
                name='name' 
                className="form-control" 
                id="name"
             />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input 
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)} 
              name='password' 
              className="form-control" 
              id="password"
          />
        </div>
        <div className='form-group'>
          <label>Confirm Password</label>
          <input 
              type="password"
              value={confirmpassword}
              onChange={e => setConfirmpassword(e.target.value)} 
              name='confirmpassword' 
              className="form-control" 
              id="password"
          />
        </div>
        <button type="submit">Login</button>
    </form>
    )
}

export default Login