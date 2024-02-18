import { Link, json, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import useTitle from '../hooks/useTitle'

export const SignUp = () => {
    const navigate = useNavigate();
    async function handlesubmit(e){
        e.preventDefault();
        const detail = {
            name: e.target.name.value,
            email: e.target.mail.value,
            password: e.target.password.value
        }
        const response = await fetch('http://localhost:8000/register', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(detail)
        });
        const data = await response.json();
        console.log(data);
        data.accessToken? toast.success('Successfully Signed up'): toast.error(data);
        if(data.accessToken){
            sessionStorage.setItem('token', JSON.stringify(data.accessToken));
            sessionStorage.setItem('id', JSON.stringify(data.user.id));
            sessionStorage.setItem('name', JSON.stringify(data.user.name));
            sessionStorage.setItem('email', JSON.stringify(data.user.email));
            navigate('/products');
        }

        e.target.name.value = ''
        e.target.mail.value = ''
        e.target.password.value = ''
        
    }
    useTitle('Sign Up')
  return (
    <section className='mt-[2%] min-h-[50vh]'>
        <div className='mx-auto w-[50%] bg-slate-100 p-[5%]'>
            <form autoComplete='off' onSubmit={handlesubmit}>
                <div className='flex flex-col mb-5%]'>
                    <label className='text-xl' htmlFor="name">Name</label>
                    <input className='bg-transparent focus:outline-none border-b-[1px]' type="text" id='name' placeholder="Jhon Wick"  required/>
                </div>
                <div className='flex flex-col mt-[5%] mb-5%]'>
                    <label className='text-xl' htmlFor="mail">Email</label>
                    <input className='bg-transparent focus:outline-none border-b-[1px]' type="mail" id='mail' placeholder="jhon@mail.com"  required/>
                </div>
                <div className='flex flex-col mt-[5%]'>
                    <label className='text-xl' htmlFor="password">Password</label>
                    <input  className='bg-transparent focus:outline-none border-b-[1px]' type="text" id='password' placeholder='' required />
                </div>
                <button className='mt-[5%] bg-amber-700 text-white px-[2%] py-[1%] rounded' type='submit'>Sign up</button>
                <p className='mt-[2%]'>Already have an account? <Link to='/log-in' className='cursor-pointer text-blue-500'>Log in</Link></p>
            </form>
        </div>
    </section>
  )
}
