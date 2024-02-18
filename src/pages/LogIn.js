import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import useTitle from '../hooks/useTitle'

export const LogIn = () => {
    const navigate = useNavigate();
    async function handleSubmit(e){
        e.preventDefault();
        const detail = {
            email: e.target.mail.value,
            password: e.target.password.value
        }
        const response = await fetch('http://localhost:8000/login',{
            method: "POST",
            headers: {'content-type':'application/json'},
            body: JSON.stringify(detail)
        })
        const data = await response.json();
        console.log(data);
        data.accessToken? toast.success('Successfully Logged In'): toast.error(data);
        if(data.accessToken){
            sessionStorage.setItem('token', JSON.stringify(data.accessToken));
            sessionStorage.setItem('name', JSON.stringify(data.user.name));
            sessionStorage.setItem('email', JSON.stringify(data.user.email));
            navigate('/products')
        }
    }

    useTitle('Log In')
  return (
    <section className='mt-[2%] min-h-[50vh]'>
        <div className='mx-auto w-[50%] bg-slate-100 p-[5%]'>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <div className='flex flex-col mb-5%]'>
                    <label className='text-xl' htmlFor="mail">Email</label>
                    <input className='bg-transparent focus:outline-none border-b-[1px]' type="mail" id='mail' placeholder="jhon@mail.com"  required/>
                </div>
                <div className='flex flex-col mt-[5%]'>
                    <label className='text-xl' htmlFor="password">Password</label>
                    <input  className='bg-transparent focus:outline-none border-b-[1px]' type="password" id='password' placeholder='' required />
                </div>
                <button className='mt-[5%] bg-amber-700 text-white px-[2%] py-[1%] rounded' type='submit'>Log In</button>
                <p className='mt-[2%]'>Don't have an account? <Link to='/sign-up' className='cursor-pointer text-blue-500'>Sign up</Link></p>
            </form>
        </div>
    </section>
  )
}
