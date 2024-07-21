import { useState } from "react"
import "./login.scss"

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })

    const handleAvatar = e => {
        if(e.target.files[0]){
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    return (
        <div className='login'>
            <div className="item">
                <h2>Sign In</h2>
                <form>
                    <input type="text" name="email" id="email" placeholder="Email" />
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <button>Sign In</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
                <h2>Create an Account</h2>
                <form>
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} alt="" />
                        Upload an Image
                    </label>
                    <input type="file" name="file" id="file" onChange={handleAvatar} style={{display:"none"}} />
                    <input type="text" name="username" id="username" placeholder="Username" />
                    <input type="text" name="email" id="email" placeholder="Email" />
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <button>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Login