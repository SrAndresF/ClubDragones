import axios from "axios"
import { BsWhatsapp } from 'react-icons/bs'
import Main from "../../components/layout/Main"
import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"
import { server } from "../../config"
export default function Shop({product, products}:{product:any, products:any}) {
  const router = useRouter();
  return (
    <Main title="title">
      
              <div className=" mb-10 sm:mb-0  text-white flex flex-row justify-center items-center text-center flex-flow bg-secondary bg-opacity-50 rounded-lg   w-full">
                <div className="flex flex-col">
                <div >
                  <Image src={`/3`} width={150 * 2} height={110 * 2} layout="intrinsic" alt="s" />
                </div>
                </div>
                <div className="flex flex-col mr-5">
                <h3 className=" text-base font-semibold" > </h3>
                <p className=" text-base" ></p>
                <p className=" text-base font-semibold" >valor: </p>
                </div>
                <div className="bg-[#25D366] flex flex-row w-max items-center justify-center rounded-lg p-2 text-white hover:bg-[#25FF77] cursor-pointer">
                <BsWhatsapp className="text-white" />
                <a href={`https://wa.me/573215400876?text=Hola, estoy interesado en: °° con precio: °price}° Url: https://clubdragones`} target="_blank" rel="noopener noreferrer" >Comprar por whatsaap</a>
                </div>
              </div>
              <h2 className=" text-3xl ml-3 sm:ml-10 mt-10 font-semibold border p-2">Otros Productos</h2>
              <ul className=" ml-3 sm:ml-10 mt-10 lg:ml-20 grid md:lg:grid-cols-3 grid-cols-1  md:lg:grid-rows-2 sm:grid-cols-2 grid-flow-row md:gap-10 sm:gap-5 lg:gap-20 ">
              <Link href={`/shop/13`} key="t" >
              <li className="mb-10 sm:mb-0 cursor-pointer text-white flex flex-col justify-center items-center text-center flex-flow bg-secondary bg-opacity-50 rounded-lg hover:translate-x-1 hover:translate-y-1  w-max" key="t" >
                <div>
                  <Image src={`/img.png`} width={150 * 2} height={110 * 2} layout="intrinsic" alt="d" />
                </div>
                <h2 className=" text-base font-semibold" ></h2>
                <p className=" text-base" ></p>
                <p className=" text-base font-semibold" >valor: </p>
              </li>
              </Link>
          </ul>
      
    </Main>
  )
}

