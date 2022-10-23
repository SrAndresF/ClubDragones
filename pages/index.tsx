import Main from "../components/layout/Main"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import Slider from "../components/Slider"
const Home = () => {

  return (
    <Main title="Bienvenido">
      
      
      
      <motion.div 
      className="h-screen w-full text-start "
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <Slider>
        <div className=" sm:ml-20 ml-7  mt-24">
          <motion.h2 
          initial={{x:300}}
          animate={{x:0}}
          transition={{duration:0.5}}
          className="text-white text-5xl md:text-5xl lg:text-7xl font-bold ">Club <br /> De <br /> Baloncesto</motion.h2>
          <motion.p 
          initial={{x:300}}
          animate={{x:0}}
          transition={{duration:0.5}}
          className="text-white font-light text-lg mt-3">la primera clase es 100% gratis, ademas <br /> contamos con 2 sedes asi que, no <br /> esperes más y inscribete</motion.p>
          <motion.button className=" bg-secondary w-36 h-14 md:w-44 md:h-14 rounded-lg md:rounded-2xl mt-3 mb-20 hover:translate-x-2 hover:translate-y-2 hover:bg-opacity-90" initial={{ x: 300, scale: 0.5 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          ><Link href="/contacto"><a className=" text-lg justify-center items-center text-center flex text-white font-light">Inscribete Aqui!</a></Link></motion.button>
        </div>
        </Slider>
        </motion.div>
        

      <div>
      <div className="flex flex-col justify-center items-start h-screen -mt-20 sm:md:-mt-60 lg:-mt-0">
      <h3 className=" font-bold text-3xl lg:text-7xl ml-7 sm:ml-20 mb-4 mt-32 sm:mt-0">Valores</h3>
      <p className=" ml-7 sm:ml-20 ">El club Dragones se caracteriza no solo por formar <br />
      deportistas, vamos mas alla. Aportamos valores para formar <br /> seres humanos de calidad. Por ello nos representa:
      </p>
      <ul className=" list-disc ml-12 sm:ml-24 mt-4 mb-4">
      <li>El compañerismo</li>
      <li>La lealtad</li>
      <li>El respeto</li>
      <li>La honestidad</li>
      <li>La solidaridad</li>
      </ul>
      <button className=" bg-secondary w-44 h-10 rounded-lg ml-8 sm:ml-20 hover:bg-opacity-80" >
        <Link href="/contacto"><a className="text-white">Comenzar</a></Link>
      </button>
      </div>
      <div className="absolute ml-3 sm:ml-3 md:ml-0   sm:top-full top-full md:top-full lg:top-full-2 sm:right-0 bg-principal rounded-full w-96 h-96  md:w-96 md:h-96 lg:w-128 lg:h-128 -z-10">
        <div className="absolute right-20 sm:right-0 md:right-20 top-28 lg:-rotate-6  z-0">
        <motion.img
        initial={{x:-300}}
        animate={{x: 0}}
        transition={{duration: 2}}
        src="/img/grupoImg.png"
        alt="dragones grupo"
        width="1080 / 3"
        height="1080 / 3"
        >
        </motion.img>
        </div>
      </div>
      </div>

      <div className="flex  flex-col sm:flex-row justify-start  sm:justify-end">
      <div className="flex flex-col justify-start sm:justify-center items-start h-screen sm:mr-32">
      <h3 className="ml-10 font-bold text-3xl lg:text-7xl sm:ml-20 mb-4">Integracion</h3>
      <p className="sm:ml-20 mb-4 ml-10">Lorem ipsum do ipsum ipsum ipsum lor sit amet. <br />
      Lorem ipsum dolipsum ipsum or sit. <br /> Lorem ipsum doipsum ipsum ipsum lor sit.
      </p>
      
      <button className=" bg-secondary w-44 h-10 rounded-lg sm:ml-20 hover:bg-opacity-80 ml-10" >
        <Link href="/contacto"><a className="text-white">Comenzar</a></Link>
      </button>
      </div>
      <div className="flex md:ml-20  md:w-1/3 lg:w-1/2 bg-principal  h-screen -mt-96 sm:-mt-0">
        <div className="flex flex-row flex-flow justify-center items-center">
          
          <div className="absolute right-10">
            <Image className="rounded-full" src="/img/integraciones/integraciones1.jpg" width={600/4} height={600/4} alt="integraciones 1" layout="intrinsic" />
          </div>
          <div className="absolute right-60 sm:right-128 sm:-ml-10">
            <Image className="rounded-full" src="/img/integraciones/integraciones2.jpg" width={600/4} height={600/4} alt="integraciones 1" layout="intrinsic" />
          </div>
          <div className="absolute mb-128 right-0">
            <Image className="rounded-full" src="/img/integraciones/integraciones3.jpg" width={600/4} height={600/4} alt="integraciones 1" layout="intrinsic" />
          </div>
          <div className="absolute right-56 sm:right-integracion-lg mb-128">
            <Image className="rounded-full " src="/img/integraciones/integraciones4.jpg" width={600/4} height={600/4} alt="integraciones 1" layout="intrinsic" />
          </div>
          
          <div className="absolute right-60 sm:right-integracion-lg mt-128">
            <Image className="rounded-full" src="/img/integraciones/integraciones6.jpg" width={600/4} height={600/4} alt="integraciones 1" layout="intrinsic" />
          </div>
          <div className="absolute mt-128 right-20">
            <Image className="rounded-full" src="/img/integraciones/integraciones7.jpg" width={600/4} height={600/4} alt="integraciones 1" layout="intrinsic" />
          </div>
        </div>
      </div>
      </div>



      
    </Main>
  )
}

export default Home
