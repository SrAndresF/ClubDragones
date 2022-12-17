import { useState } from 'react'
import { useRouter } from 'next/router'
import {BiHide, BiShow} from 'react-icons/bi'
import Main from '../../components/layout/Main'
import axios from 'axios';
export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [username, setUsername] = useState<any | null >(null);
  const [password, setPassword] = useState<any | null >(null);
  const [error, setError] = useState<any | null>(false);
  const router = useRouter();
  const pressShowPassword = (e:any) =>{
    e.preventDefault()
    setShowPassword(!showPassword)
  }
  const handleClick = async (e: any) =>{
    e.preventDefault()
    try {
      await axios.post(`https://clubdragones.vercel.app/api/login`, {
        username,
        password,
      });
      router.push("/admin")
    } catch (err) {
      setError(true)
    }
    
  }
  
  return (
    <Main title='Login😒'>
    <form className='flex flex-col justify-center items-center bg-nav mt-7 text-black h-96 text-2xl'>
      <h2 className='mb-3'>Usuario</h2>
      <label className='bg-slate-100 rounded-lg' >
      <input type="text" placeholder='Nombre De Usuario' name="username" className=' outline-none rounded-lg text-black bg-slate-100' onChange={(e)=> setUsername(e.target.value)} /></label>
      <h2 className='mb-3'>Contraseña</h2>
      <label className='bg-slate-100 rounded-lg' >
      <input type={showPassword ? "text" : "password"} name="password" placeholder='Contraseña' className=' outline-none rounded-lg bg-slate-100 text-black' onChange={(e)=> setPassword(e.target.value)} />
      <button className='bottom-0 right-10 top-1 relative' onClick={pressShowPassword} >{showPassword ? <BiShow />  : <BiHide />}</button></label>
      <input type="submit" value="Iniciar Sesion" className='hover:opacity-75 text-white bg-secondary mt-5 p-2 rounded-lg cursor-pointer' onClick={handleClick} />
      {error && <span className=' text-red-500'>Vuelve A Intentarlo</span>}
    </form>
    </Main>
    
  )
}