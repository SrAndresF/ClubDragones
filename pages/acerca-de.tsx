import Main from "../components/layout/Main";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"

export default function acercaDe() {
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
          <h2 className=" font-semibold text-2xl">Andres Gonzales</h2>
          <p className=" text-md sm:mx-0 mx-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consectetur neque nostrum labore tenetur. Optio laborum esse consequatur et accusamus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eum.</p>
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
          <h2 className=" font-semibold text-2xl">Andres Gonzales</h2>
          <p className=" text-md mx-3 sm:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consectetur neque nostrum labore tenetur. Optio laborum esse consequatur et accusamus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eum.</p>
          </div>
        </motion.div>

        <motion.div className="bg-white w-full sm:flex-row flex-col-reverse h-128 sm:h-60 text-black flex justify-around items-center"
        initial={{x: 300}}
        animate={{x:0}}
        transition={{duration: 0.5}}>
        <div className="text-center w-full sm:w-1/3 sm:mx-0 sm:mr-20">
          <h2 className=" font-semibold text-2xl">Andres Gonzales</h2>
          <p className=" text-md sm:mx-0 mx-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consectetur neque nostrum labore tenetur. Optio laborum esse consequatur et accusamus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eum.</p>
          </div>
          <div className="rounded-full sm:ml-20 mt-10">
          <Image className="rounded-full " alt="Profesor sinisterra" src="/img/profesores/sinisterra.png" width={292} height={292} layout="intrinsic" />
          </div>
          
        </motion.div>
        
      </div>

      <div className="flex  flex-col sm:flex-row justify-start sm:mt-0 mt-20">
      <div className="flex flex-col justify-start sm:justify-center items-start h-screen sm:mr-32">
      <h3 className="ml-3 font-bold text-3xl lg:text-7xl sm:ml-20 mb-4">Mision</h3>
      <p className="sm:ml-20 mb-4 ml-3">Ser lideres de formacion deportiva y en informacion <br />  del ser de cada uno de nuestros deportistas, dando <br />  herrramientas útiles para la vida, siendo parte activa <br /> de su formacion e incentivando a la practica del <br /> deporte.
      </p>
      
      <button className=" bg-secondary w-44 h-10 rounded-lg sm:ml-20 hover:bg-opacity-80 ml-3" >
        <Link href="/contacto"><a className="text-white">Comenzar</a></Link>
      </button>
      <div className="flex ml-10 md:ml-0 sm:absolute sm:right-0  md:lg:w-96 md:h-96 bg-principal rounded-full md:mt-0 mt-20 w-72 h-72">
        <motion.div className="absolute rounded-full left-0 sm:mr-20 sm:mt-10 animate-bounce ml-10 md:ml-0"
        initial={{x: 300}}
        animate={{x:0}}
        transition={{duration:0.7}} >
        <Image src="/img/ball.png" alt="basketball" width={1245 / 4 } height={1245 / 4 }  layout="intrinsic" />
        </motion.div>
      </div>
      
        </div>
        </div>


        <div className="flex  flex-col sm:flex-row justify-start  ">
      <div className="flex flex-col justify-start sm:justify-center items-start h-screen sm:mr-32">
      <h3 className="ml-10 font-bold text-3xl lg:text-7xl sm:ml-20 mb-4">Vision</h3>
      <p className="sm:ml-20 mb-4 ml-10">para el año 2024 seremos un club con alto <br />  reconocimiento a nivel nacional y con un <br /> desarrollo integral.
      </p>
      
      <button className=" bg-secondary w-44 h-10 rounded-lg sm:ml-20 hover:bg-opacity-80 ml-10" >
        <Link href="/contacto"><a className="text-white">Comenzar</a></Link>
      </button>
      <div className="flex md:absolute md:mr-20 md:right-0 lg:w-96 bg-principal rounded-full  h-96  ml-7 md:ml-0">
        <motion.div className="absolute rounded-full left-0 md:mr-20 mt-10 ml-7"
        initial={{y: -300}}
        animate={{y:0}}
        transition={{duration: 1.8}} >
        <Image src="/img/vision.png" alt="vision" width={1245 / 4 } height={1245 / 4 } />
        </motion.div>
      </div>
      
        </div>
        </div>

        <div>
          <div className=" h-screen flex flex-col justify-center items-center w-full">
            <img className="object-cover w-full h-4/5" src="/img/banner1.jpg" alt="profesores" />
            <img className="object-cover w-full h-max" src="/img/asset2.png" alt="asset"    />
            <button className=" bg-secondary w-44 h-10 rounded-lg  hover:bg-opacity-80  absolute right-60 mt-128" >
              <Link href="/contacto"><a className="text-white">Comenzar</a></Link>
            </button> 
          </div>
          
          <div className="flex flex-col  relative -top-20 ">
          <h3 className="ml-10 font-bold text-3xl lg:text-7xl sm:ml-20 mb-4">Historia</h3>
          <p className="sm:ml-20 mb-4 ml-10 w-72 sm:w-1/2 ">El club dragones de Baloncesto cali fue  fundado en el año  2003 por Andres  Gonzales, es un joven Guarapireño que en  ese entonces era un jugador de la liga vallecaucana de  baloncesto. Con la idea de ayudar a los niños de  la zona  a  utilizar mejor su tiempo  libre, el club fue dando sus primeros  pasos sin saber el gran impacto que tendria en la ciudad de cali.
          </p>
          </div>

        </div>

    </Main>
  )
}
