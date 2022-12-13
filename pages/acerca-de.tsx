import Main from "../components/layout/Main";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react";

export default function AcercaDe(){
  const ref = useRef(null)
  const isInView = useInView(ref)
  
  return (
    <Main title="Acerca De">
      <div className="grid grid-cols-1 grid-rows-3 grid-flow-row">

        <motion.div className="sm:mt-4 bg-principal w-full h-128 sm:h-60 text-white flex sm:flex-row flex-col justify-around items-center"
        initial={{x: -300}}
        animate={{x:0}}
        transition={{duration: 0.5}}>
          <div className="rounded-full sm:ml-20 sm:mt-10">
          <Image className="rounded-full " alt="profesor Andres" src="/img/profesores/andres.jpg" width={260} height={260} layout="intrinsic" />
          </div>
          <div className="text-center sm:mx-0 mx-7 w-full sm:w-1/3 sm:mr-20">
          <h2 className=" font-semibold text-2xl">Andres Gonzales</h2>
          <p className=" text-md sm:mx-0 mx-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consectetur neque nostrum labore tenetur. Optio laborum esse consequatur et accusamus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eum.</p>
          </div>
        </motion.div>

        <motion.div className="bg-white w-full h-128 sm:h-60 text-black flex justify-around flex-col-reverse sm:flex-row items-center"
        initial={{x: 300}}
        animate={{x:0}}
        transition={{duration: 0.5}}>
        <div className="text-center w-full sm:w-1/3  sm:mx-0 sm:mr-20">
          <h2 className=" font-semibold text-2xl">Camilo Montaño</h2>
          <p className=" text-md sm:mx-0 mx-3">Juan Camilo Montaño Trochez
          Llevo 8 años siendo jugador activo del club donde comenzó mi formación deportiva
          Estudio licenciatura en idiomas
          Y busco complementar mi amor por el deporte y la enseñanza con mi carrera profesional.</p>
          </div>
          <div className="rounded-full sm:ml-20 mt-10">
          <Image className="rounded-full object-cover" alt="Profesor montaño" src="/img/profesores/montaño.jpg" width={260} height={260} layout="intrinsic" />
          </div>
        </motion.div>


        <motion.div className="bg-principal w-full h-128 sm:h-60 text-white flex justify-around items-center sm:flex-row flex-col"
        initial={{x: -300}}
        animate={{x:0}}
        transition={{duration: 0.5}}>
          <div className="rounded-full sm:ml-20 mt-10">
          <Image className="rounded-full  object-cover" alt="profesor" src="/img/profesores/cabello.png" width={1600 / 6} height={1500 /6} layout="intrinsic" />
          </div>
          <div className="text-center w-full sm:w-1/3 sm:mx-0 sm:mr-20">
          <h2 className=" font-semibold text-2xl">Juan Camilo Sinisterra</h2>
          <p className=" text-md mx-3 sm:mx-0">Juan Camilo Sinisterra Sanclemente
            Soy parte del club desde hace 7 años, pero el deporte y el basket a estado en mi vida desde que tengo memoria, estudio diseño industrial. Enseñar es algo que disfruto y llevo en la sangre, todavía más con mi amor por el Basketball.</p>
          </div>
        </motion.div>

        <motion.div className="bg-white w-full sm:flex-row flex-col-reverse h-128 sm:h-60 text-black flex justify-around items-center"
        initial={{x: 300}}
        animate={{x:0}}
        transition={{duration: 0.5}}>
        <div className="text-center w-full sm:w-1/3 sm:mx-0 sm:mr-20">
          <h2 className=" font-semibold text-2xl">Juan Camilo Sinisterra</h2>
          <p className=" text-md sm:mx-0 mx-3 ">Juan Camilo Sinisterra Sanclemente
            Soy parte del club desde hace 7 años, pero el deporte y el basket a estado en mi vida desde que tengo memoria, estudio diseño industrial. Enseñar es algo que disfruto y llevo en la sangre, todavía más con mi amor por el Basketball.</p>
          </div>
          <div className="rounded-full sm:ml-20 mt-10">
          <Image className="rounded-full " alt="Profesor sinisterra" src="/img/profesores/sinisterra.png" width={292} height={292} layout="intrinsic" />
          </div>
          
        </motion.div>

        <motion.div className="bg-principal w-full h-128 sm:h-60 text-white flex justify-around items-center sm:flex-row flex-col"
        initial={{x: -300}}
        animate={{x:0}}
        transition={{duration: 0.5}}>
          <div className="rounded-full sm:ml-20 mt-10">
          <Image className="rounded-full  object-cover" alt="profesor" src="/img/profesores/profe5.jpg" width={1600 / 6} height={1500 /6} layout="intrinsic" />
          </div>
          <div className="text-center w-full sm:w-1/3 sm:mx-0 sm:mr-20">
          <h2 className=" font-semibold text-2xl">Juan Camilo Sinisterra</h2>
          <p className=" text-md mx-3 sm:mx-0">Juan Camilo Sinisterra Sanclemente
            Soy parte del club desde hace 7 años, pero el deporte y el basket a estado en mi vida desde que tengo memoria, estudio diseño industrial. Enseñar es algo que disfruto y llevo en la sangre, todavía más con mi amor por el Basketball.</p>
          </div>
        </motion.div>
        
      </div>

      <div className="flex  flex-col sm:flex-row justify-start sm:mt-0 mt-20 ">
      <div className="flex flex-col justify-start sm:justify-center items-start sm:mb-20 sm:mr-32 sm:mt-44">
      <h3 className="ml-7 font-bold text-3xl lg:text-7xl sm:ml-20 mb-4">Misión</h3>
      <p className="sm:ml-20 mb-4 ml-7">Ser líderes de formación deportiva y en información <br />  del ser de cada uno de nuestros deportistas, dando <br />  herramientas útiles para la vida, siendo parte activa <br /> de su formación e incentivando a la práctica del <br /> deporte.
      </p>
      
      <button className=" bg-secondary w-44 h-10 rounded-lg sm:ml-20 hover:bg-opacity-80 ml-7" >
        <Link href="/contacto"><a className="text-white">Comenzar</a></Link>
      </button>
      <div className="flex ml-7 md:ml-0 sm:absolute sm:right-0 flex-col  md:lg:w-96 md:h-96 bg-principal rounded-full md:mt-0 mt-24 w-72 h-72 ">
        <motion.div className="relative sm:absolute rounded-full left-0 sm:mr-20 sm:mt-10 animate-bounce ml-10 md:ml-0"
        initial={{x: 300}}
        animate={{x:0}}
        transition={{duration:0.7}} >
        <Image src="/img/ball.png" alt="basketball" width={1245 / 4 } height={1245 / 4 }  layout="intrinsic" />
        </motion.div>
      </div>
      
        </div>
        </div>


        <div className="flex  flex-col sm:flex-row justify-start ">
      <motion.div className="flex flex-col justify-start items-start mb-20  sm:mr-32 mt-44"
      
       >
      <h3 className="ml-7 font-bold text-3xl lg:text-7xl sm:ml-20 mb-4">Visión</h3>
      <p className="sm:ml-20 mb-4 ml-7 sm:w-96">Para el año 2024 seremos un club con alto  reconocimiento a nivel nacional y con un desarrollo integral.
      </p>
      
      <button className=" bg-secondary w-44 h-10 rounded-lg sm:ml-20 hover:bg-opacity-80 ml-10" >
        <Link href="/contacto"><a className="text-white">Comenzar</a></Link>
      </button>
      <div className=" mt-20 flex md:absolute md:mr-20 md:right-0 lg:w-96 bg-principal rounded-full md:-mt-20  h-96  ml-7 md:ml-0  ">
        <motion.div className="absolute rounded-full left-0 md:mr-20 ml-7 "
        initial={{y: -300}}
        animate={{y:0}}
        transition={{duration: 1.8}} >
        <Image src="/img/vision.png" alt="vision" width={1245 / 4 } height={1245 / 4 } />
        </motion.div>
      </div>
      
        </motion.div>
        </div>

        <div>
          <div className=" sm:mt-44 h-screen flex flex-col justify-center items-center w-full">
            <img className="object-cover w-full h-4/5" src="/img/banner1.jpg" alt="profesores" />
            <img className="object-cover w-full h-min md:h-max" src="/img/asset2.png" alt="asset"    />
            <button className=" bg-secondary w-44 h-10 rounded-lg  hover:bg-opacity-80  absolute mt-96 sm:right-60 sm:mt-128" >
              <Link href="/contacto"><a className="text-white">Comenzar</a></Link>
            </button> 
          </div>
          
          <div className="flex flex-col  relative -top-10 sm:-top-20 ">
          <h3 className="ml-7 font-bold text-3xl lg:text-7xl md:ml-28 mb-4">Historia</h3>
          <p className="md:ml-28 mb-4 ml-7 w-50 sm:w-1/3  mr-2">El club dragones de Baloncesto cali fue fundado en el año 2003 por Andres  Gonzales, es un joven Guarapireño que en  ese entonces era un jugador de la liga vallecaucana de  baloncesto. Con la idea de ayudar a los niños de  la zona a  utilizar mejor su tiempo  libre, el club fue dando sus primeros  pasos sin saber el gran impacto que tendría en la ciudad de cali.
          </p>
          </div>

        </div>

    </Main>
  )
}
