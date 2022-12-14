import { motion } from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import { Suspense } from 'react'
import dynamic from "next/dynamic";
import {BiMap} from 'react-icons/bi'
import { loadProducts } from "../lib/loadProducts";
import { GetStaticProps } from "next";

const MainDinamyc = dynamic(()=> import('../components/layout/Main'),{ 
  suspense:true,
  });

  
export default function precios({products}:{products:any}){
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen "><h2 className=" absolute  text-3xl font-semibold">Por favor espere.....</h2><div className=" animate-spin">
    <div className=" scroll-smooth inline-block w-44 h-44 m-4 rounded-full bg-ball animate-ping "></div><div className=" scroll-smooth inline-block w-44 h-44 m-4 rounded-full bg-ball animate-ping "></div></div><div className=" scroll-smooth inline-block w-44 h-44 m-4 rounded-full bg-ball animate-ping "></div></div>} >
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
          <p className=" text-md sm:mx-0  sm:ml-0 ml-3">Entrenamientos LUNES,  MIÉRCOLeS y VIERNES   </p>
          <ul className=" list-disc text-start ml-5 sm:ml-0 mr-3 sm:mr-0">
            <li>6 a 12 años de 5:30 pm a 6:30 pm</li>
            <li>13 a 15 años Principiantes y avanzados y 16 a 18 años Principiantes  de 6:30 pm a 7:30 pm</li>
            <li>15 a 18 años avanzados y 19 años en adelantes principiantes  de 7:30 pm a 8:30 pm</li>
          </ul>  
            <p className="ml-5 sm:ml-0" > mensualidad de 60.000 $ inscripción gratuita</p>
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
            <li>6 a 12 años de 5:30 pm a 6:30 pm</li>
            <li>13 a 17 años de 6:30 pm a 8:00 pm</li>
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
          <ul className=" lg:mb-0 md:sm:mb-44 ml-7 mt-36 lg:ml-20 grid md:lg:grid-cols-3 grid-cols-1  md:lg:grid-rows-2 sm:grid-cols-2 grid-flow-row md:gap-10 sm:gap-5 lg:gap-20 ">
            {products.map((c:any)=>(
              <Link href={`/shop/${c.data.title.toLowerCase().replace(/\s/g, "-")}`} key={c.data.title}  >
              <li className="mb-10 sm:mb-0 cursor-pointer text-white flex flex-col justify-center items-center text-center flex-flow bg-secondary bg-opacity-50 rounded-lg hover:translate-x-1 hover:translate-y-1  w-max" key={c.data.title} >
                <div>
                  <img src={`${c.data.img}`} width={150 * 2} height={110 * 2}  alt={`${c.title}`} />
                </div>
                <h2 className=" text-base font-semibold" >{c.data.title}</h2>
                <p className=" text-base" >{c.data.description}</p>
                <p className=" text-base font-semibold" >valor: co${c.data.price}</p>
              </li>
              </Link> 
              ))}
          </ul>
        </div>

        <div className="bg-principal w-full mt-16 md:-mt-0 shadow-2xl ">
          <h3 className="text-center font-semibold text-3xl text-white py-5">Formas de pago</h3>
        </div>
        <motion.div className=" -mt-3 bg-principal w-full h-128 sm:h-60 text-white flex sm:flex-row flex-col justify-around items-center"
        initial={{y: 300}}
        animate={{y:0}}
        transition={{duration: 0.5}}>
          <div className="rounded-full sm:ml-20 sm:mt-10 ">
          <Image className="rounded-full " alt="michaelJordanRefran" src="/img/refran.png" width={260} height={260} layout="intrinsic" />
          </div>
          <div className="text-start sm:mx-0 w-full  sm:w-1/3 sm:mr-20">
          <h2 className=" font-semibold text-center text-2xl">Clases personalizadas</h2>
          <p className=" text-md sm:mx-0  sm:ml-0 ml-3">La primera clase es de cortesia, asi que no esperes más.</p>
          <ul className=" list-disc text-start ml-5 sm:ml-0 mr-3 sm:mr-0">
            <li>Pago por clase: $7.000co.</li>
            <li>Escribenos, para personalizar tú entreno.</li>
          </ul>  
            <p className="ml-5 sm:ml-0" >Para pagar de forma en linea </p>
          </div>
        </motion.div>

        <motion.div className="bg-white w-full h-128 sm:h-60 text-black flex justify-around flex-col-reverse sm:flex-row items-center"
        initial={{y: -300}}
        animate={{y:0}}
        transition={{duration: 0.5}}>
        <div className="text-start w-full sm:w-1/3  sm:mx-0 sm:mr-20">
          <h2 className=" font-semibold text-center text-2xl">Realiza tus pagos aquí!!!</h2>
          <button className=" bg-secondary w-44 h-10 rounded-lg  hover:bg-opacity-80  absolute  mt-24 ml-7 md:ml-20" >
          <Link href="/pagos" className="bg-secondary  rounded-2xl h-10 w-72 text-center   "><a className="font-medium  text-lg mt-5 mb-7 text-white">Pagar</a></Link></button>
          <p className=" text-md sm:ml-0 ml-5">Otras formas de pagar tú mensualidad.</p>
          <ul className=" list-disc text-start ml-5 sm:ml-0">
            <li>De manera fisica, acercandote a uno de los profes.</li>
            <li>Via daviplata, Davivienda o nequi.</li>
          </ul> 
          </div>
          <div className="rounded-full sm:ml-20 mt-10">
          <Image className="rounded-full object-cover" alt="cortesiaAlusion" src="/img/cortesia.png" width={260} height={260} layout="intrinsic" />
          </div>
        </motion.div>
    </MainDinamyc >
    </Suspense>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await loadProducts()
  return {
    props: {
      products,
    }, 
  }
}

