import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/FirebaseConfig';
import './Login.css'
// import frames from '../../movie-background.jpg'

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signup = async () => {
        if (email === "" || password === "") {
            return alert("Please fill all fields")
        }
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            alert("Signup Successful");
            setEmail("");
            setPassword("");
            navigate('/login')
        } catch (error) {
            alert("Hi please check your email and password should be strong, Hint use Alfa-Numeric with Special Characters");
            
        }
    }



    
    return (
        <div className="auth-main">
            <div className="loginview">
                {/* <img src={frames} ></img> */}
                </div>
            <div className='flex-justify-center-items-center-h-screen'>
                <div className='bg-gray-800-px-10-py-10-rounded-xl'>
                    <div className="">
                        <h1 className='text-center-text-white-text-xl-mb-4-font-bold'>Signup</h1>
                    </div>
                    <div className='input-div'>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name='email'
                            className='bg-gray-600-mb-4-px-2-py-2-w-full-lg-w-20em-rounded-lg-text-white-placeholder-text-gray-200-outline-none'
                            placeholder='Email'
                        />
                    </div>
                    <div className='input-div'>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='bg-gray-600-mb-4-px-2-py-2-w-full-lg-w-20em-rounded-lg-text-white-placeholder-text-gray-200-outline-none'
                            placeholder='Password'
                        />
                    </div>
                    <div className='flex-justify-center-mb-3'>
                        <button
                            onClick={signup}
                            className='bg-yellow-500-w-full-text-black-font-bold-px-2-py-2-rounded-lg'>
                            Signup
                        </button>
                    </div>
                    <div>
                        <h2 className='text-white'>Don't have an account <Link className='text-yellow-500-font-bold' to={'/login'}>Login</Link></h2>
                    </div>
                </div>
            </div>
            <div className="cross-div2">
                <Link to='/'><p>X</p></Link>

            </div>
        </div>

    )
}

export default Signup