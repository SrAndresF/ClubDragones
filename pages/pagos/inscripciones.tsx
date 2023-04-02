import React from 'react'
import Main from '../../components/layout/Main'
import { motion } from 'framer-motion'
export default function inscripciones() {
  return (
    <Main title="Inscripciones😊">
      <div className='flex sm:items-center h-128 flex-col sm:h-screen items-start justify-start  md:flex-row  pb-full-2 sm:pb-0'>
      <div className="flex flex-col justify-start items-start ">
      <h3 className=" font-bold text-3xl lg:text-7xl ml-7 sm:ml-20 mb-4  sm:mt-0 ">Inscríbete</h3>
      <p className=" ml-7 sm:ml-20  sm:w-2/3">Para inscribirte deberás <b>seguir  los siguientes pasos</b>, si presentas algún inconveniente contactanos.
      </p>
      <ul className=" list-decimal ml-12 sm:ml-24 mt-4  sm:w-1/2 md:mb-3 mr-5">
      <li>Rellena el formulario de <b>Google Forms</b> en el botón de abajo.</li>
      <li>Si deseas pagar en línea danos <b>alrededor de 2 a 3 días</b>, mientras te registramos.</li>
      <li>Una vez ya hayas pagado tu inscripción, <b>podrás pagar las mensualidades en línea</b>.</li>
      <li>Eso es todo, <b>gracias por estar en Club Dragones</b>.</li>
      </ul>
        <a href='https://forms.gle/NujfpAchNAVyRadA9' rel="noopener noreferrer" target="_blank" className=" mt-3 text-white bg-secondary py-2 px-7 rounded-lg ml-8 sm:ml-20 hover:bg-opacity-80 text-center ">Inscibete aquí</a>
      </div>
      <div className="  absolute md:absolute mt-128 ml-3 sm:ml-3 md:ml-0 sm:right-0 bg-principal rounded-full w-80 h-80 sm:mt-0 sm:w-96 sm:h-96  md:w-96 md:h-96 lg:w-128 lg:h-128 -z-10">
        <div className="absolute right-20 sm:right-0 md:right-20 top-28 lg:-rotate-6  z-0">
        <motion.img
        initial={{x:-300}}
        animate={{x: 0}}
        transition={{duration: 2}}
        src="/img/post.png"
        alt="dragones grupo"
        width="1080 / 3"
        height="1080 / 3"
        >
        </motion.img>
        </div>
      </div>
      </div>
    </Main>
  )
}
