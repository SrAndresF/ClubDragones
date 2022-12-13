import Head from "next/head"
import Navbar from "./Navbar"
import { BsWhatsapp } from 'react-icons/bs'
import Footer from "../Footer"
export default function Main({title, children}:{title:string, children:any}) {
  return (
    <>
    <Head><title>{title ? `${title} | Club Dragones🏀` : ' | Club Dragones🏀' }</title></Head>
    <Navbar />
    <article className=" mt-40 lg:mt-10 ">
    {children}
    </article>
    <a href="https://api.whatsapp.com/send?phone=573215400876&text=Buenas%2C%20Quisiera%20saber....%F0%9F%99%82" title="whatsapp" target="_blank" rel="noopener noreferrer" className="z-10 fixed bottom-5 right-5 md:bottom-14 md:right-20 bg-[#25D366] rounded-full p-4 cursor-pointer hover:translate-x-1">
      <BsWhatsapp className="text-white text-3xl" />
    </a>
    <Footer />
    </>
  )
}
