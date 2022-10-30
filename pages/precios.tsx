import { motion } from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import { Suspense } from 'react'
import dynamic from "next/dynamic";
import {BiMap} from 'react-icons/bi'
import { loadProducts } from "../lib/loadProducts";

const MainDinamyc = dynamic(()=> import('../components/layout/Main'),{ 
  suspense:true,
  })
export default function precios({products}:{products:any}){
  return (
    <Suspense fallback={<div className="flex justify-center items-center transform "><div className=" inline-block w-44 h-44 m-4 rounded-full bg-ball animate-bounce "></div></div>} >
    <MainDinamyc title="Precios">
      <motion.div className="mt-14  bg-principal w-full h-128 sm:h-60 text-white flex sm:flex-row flex-col justify-around items-center"
        initial={{y: 300}}
        animate={{y:0}}
        transition={{duration: 0.5}}>
          <div className="rounded-full sm:ml-20 sm:mt-10 ">
          <Image className="rounded-full " src="/img/primeraclase.png" width={260} height={260} alt="primera clase"  layout="intrinsic" />
          </div>
          <div className="text-start sm:mx-0 w-full  sm:w-1/3 sm:mr-20">
          <h2 className=" font-semibold text-center text-2xl">Sede Capri</h2>
          <a href="https://goo.gl/maps/giDP256F5SvMC4HZ7" target="_blank" rel="noopener noreferrer" >
          <h3 className=" font-semibold text-center text-lg flex items-center sm:ml-0 ml-5"><BiMap />Cra 78a Calle 10a Parque principal</h3>
          </a>
          <p className=" text-md sm:mx-0  sm:ml-0 ml-3">Entrenamientos LUNES,  MIERCOLES y VIERNES   </p>
          <ul className=" list-disc text-start ml-5 sm:ml-0 mr-3 sm:mr-0">
            <li>6 a 12 años de 5:30pm a 6:30pm</li>
            <li>13 a 15 años Principiantes y avanzados y 16 a 18 años Principiantes  de 6:30pm a 7:30pm</li>
            <li>15 a 18 años avanzados y 19 años en adelantes principiantes  de 7:30 pm a 8:30pm</li>
          </ul>  
            <p className="ml-5 sm:ml-0" > mensualidad de 60.000$ inscripcion gratuita</p>
          </div>
        </motion.div>

        <motion.div className="bg-white w-full h-128 sm:h-60 text-black flex justify-around flex-col-reverse sm:flex-row items-center"
        initial={{y: -300}}
        animate={{y:0}}
        transition={{duration: 0.5}}>
        <div className="text-start w-full sm:w-1/3  sm:mx-0 sm:mr-20">
          <h2 className=" font-semibold text-center text-2xl">Sede Valle del LiLi</h2>
          <a href="https://goo.gl/maps/1qNxpg3o5TLGdsc1A" target="_blank" rel="noopener noreferrer" >
          <h3 className=" font-semibold text-center text-lg flex items-center ml-5 sm:ml-0"><BiMap />Calle 34 # 94-39 </h3>
          </a>
          <p className=" text-md sm:ml-0 ml-5">Entrenamientos MARTES y JUEVES  </p>
          <ul className=" list-disc text-start ml-5 sm:ml-0">
            <li>6 a 12 años de 5:30pm a 6:30pm</li>
            <li>13 a 17 años de 6:30pm a 8:00pm</li>
          </ul> <p className="ml-5. sm:ml-0">mensualidad de 60.000$ inscripcion gratuita</p>
          </div>
          <div className="rounded-full sm:ml-20 mt-10">
          <Image className="rounded-full object-cover" alt="desistir motivacion" src="/img/desistir.png" width={260} height={260} layout="intrinsic" />
          </div>
        </motion.div>
        <div className="bg-principal w-full  shadow-2xl">
          <h3 className="text-center font-semibold text-3xl text-white py-5">Uniformes</h3>
          <div className="absolute -mt-10 left-5 sm:left-20">
          <Image src="/img/uniformes.jpg" alt="uniformes" className=" rounded-full" width={899 / 7} height={899 / 7} layout="intrinsic" />
          </div>
        </div>
        <div>
          <ul className="ml-10 mt-36 lg:ml-20 grid md:lg:grid-cols-3 grid-cols-1  md:lg:grid-rows-2 sm:grid-cols-2 grid-flow-row md:gap-10 sm:gap-5 lg:gap-20 ">
            {products.map((c:any)=>(
              <Link href={`/shop/${c.title.toLowerCase().replace(/\s/g, "-")}`} key={c.title} >
              <li className="mb-10 sm:mb-0 cursor-pointer text-white flex flex-col justify-center items-center text-center flex-flow bg-secondary bg-opacity-50 rounded-lg hover:translate-x-1 hover:translate-y-1  w-max" key={c.title} >
                <div>
                  <Image src={`/${c.img}`} width={150 * 2} height={110 * 2} layout="intrinsic" alt={`${c.title}`} />
                </div>
                <h2 className=" text-base font-semibold" >{c.title}</h2>
                <p className=" text-base" >{c.description}</p>
                <p className=" text-base font-semibold" >valor: {c.price}</p>
              </li>
              </Link> 
              ))}
          </ul>
        </div>

        <div className="bg-principal w-full -mt-36  shadow-2xl">
          <h3 className="text-center font-semibold text-3xl text-white py-5">Formas de pago</h3>
        </div>
        <motion.div className=" -mt-3 bg-principal w-full h-128 sm:h-60 text-white flex sm:flex-row flex-col justify-around items-center"
        initial={{y: 300}}
        animate={{y:0}}
        transition={{duration: 0.5}}>
          <div className="rounded-full sm:ml-20 sm:mt-10 ">
          <Image className="rounded-full " alt="primera clase dragones" src="/img/primeraclase.png" width={260} height={260} layout="intrinsic" />
          </div>
          <div className="text-start sm:mx-0 w-full  sm:w-1/3 sm:mr-20">
          <h2 className=" font-semibold text-center text-2xl">Sede Capri</h2>
          <a href="https://goo.gl/maps/giDP256F5SvMC4HZ7" target="_blank" rel="noopener noreferrer" >
          <h3 className=" font-semibold text-center text-lg flex items-center sm:ml-0 ml-5"><BiMap />Cra 78a Calle 10a Parque principal</h3>
          </a>
          <p className=" text-md sm:mx-0  sm:ml-0 ml-3">Entrenamientos LUNES,  MIERCOLES y VIERNES   </p>
          <ul className=" list-disc text-start ml-5 sm:ml-0 mr-3 sm:mr-0">
            <li>6 a 12 años de 5:30pm a 6:30pm</li>
            <li>13 a 15 años Principiantes y avanzados y 16 a 18 años Principiantes  de 6:30pm a 7:30pm</li>
            <li>15 a 18 años avanzados y 19 años en adelantes principiantes  de 7:30 pm a 8:30pm</li>
          </ul>  
            <p className="ml-5 sm:ml-0" > mensualidad de 60.000$ inscripcion gratuita</p>
          </div>
        </motion.div>

        <motion.div className="bg-white w-full h-128 sm:h-60 text-black flex justify-around flex-col-reverse sm:flex-row items-center"
        initial={{y: -300}}
        animate={{y:0}}
        transition={{duration: 0.5}}>
        <div className="text-start w-full sm:w-1/3  sm:mx-0 sm:mr-20">
          <h2 className=" font-semibold text-center text-2xl">Sede Valle del LiLi</h2>
          <a href="https://goo.gl/maps/1qNxpg3o5TLGdsc1A" target="_blank" rel="noopener noreferrer" >
          <h3 className=" font-semibold text-center text-lg flex items-center ml-5 sm:ml-0"><BiMap />Calle 34 # 94-39 </h3>
          </a>
          <p className=" text-md sm:ml-0 ml-5">Entrenamientos MARTES y JUEVES  </p>
          <ul className=" list-disc text-start ml-5 sm:ml-0">
            <li>6 a 12 años de 5:30pm a 6:30pm</li>
            <li>13 a 17 años de 6:30pm a 8:00pm</li>
          </ul> <p className="ml-5. sm:ml-0">mensualidad de 60.000$ inscripcion gratuita</p>
          </div>
          <div className="rounded-full sm:ml-20 mt-10">
          <Image className="rounded-full object-cover" alt="desistir" src="/img/desistir.png" width={260} height={260} layout="intrinsic" />
          </div>
        </motion.div>
    </MainDinamyc >
    </Suspense>
  )
}

export async function getStaticProps() {
  const products = await loadProducts()
  return {
    props: {
      products,
    }, 
  }
}

