import {React,useState}  from 'react'
import { useRouter } from 'next/router';
import Style from '../styles/Popup.module.css';

function Popup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const router = useRouter();
    

    const hideValue = () =>{
        const show = false;
        const hide = document.getElementById('show');
        if (show === true) {
            hide.style.display = "block";
          }
          else {
            hide.style.display = "none";
          }
    }

   

    const data = [
        { id: "01", email: "jack@gmail.com", password: "jack123" },
        { id: "03", email: "mike@gmail.com", password: "jack123" },
        { id: "03", email: "smith@gmail.com", password: "jack123" }
    ];

    const validateInput = () => {
        let isValid = true;

        if (!email) {
            setEmailError('Email Required');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Password Required');
            isValid = false;
        } else {
            setPasswordError('');
        }

        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateInput()) {
            const user = data.find(x => x.email === email && x.password === password);
            if (user) {
                alert('Sign In Successful');
                router.push('/dashboard');
            } else {
                alert('Password or Email is Incorrect');
            }
        }
    };
  return (
    <div className={Style.popupmain} id='show'>
    <button className='btn btn-primary float-end' onClick={hideValue}>Close</button>
    <h2>Kindly Sign in to our website!</h2>
    <form onSubmit={handleSubmit}>
        <div className='row'>
            <div className='col-lg-12'>
                <input
                    className='form-control'
                    placeholder='Email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p>{emailError}</p>
            </div>
            <div className='col-lg-12 mt-3'>
                <input
                    className='form-control'
                    placeholder='Password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p>{passwordError}</p>
            </div>
        </div>
        <button className='btn btn-primary mt-3' type='submit'>Sign in</button>
    </form>
</div>
  )
}

export default Popup