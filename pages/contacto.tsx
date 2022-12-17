import Main from "../components/layout/Main";
import {BiMap} from 'react-icons/bi'
import Link from "next/link";
import { server } from "../config";

export default function contacto() {
  return (
    <Main title="Contacto">
        <div className="mt-20 items-center flex justify-center flex-col">
          <h2 className="font-bold text-5xl  mb-2 md:mb-2 text-center ">Paga la mensualidad</h2>
          <Link href="/pagos" ><a className="font-medium  text-lg mt-2 mb-3 bg-secondary px-4 py-2 rounded-lg text-white">Pagar</a></Link>
        </div>
        <div className="grid grid-cols-1 grid-flow-row lg:md:grid-cols-2 w-full">
        <div className="flex flex-col justify-center items-center text-black  w-full sm:w-1/2 rounded-2xl md:ml-5">
          <h3 className="font-bold text-5xl mt-7 mb-3">Contáctanos:</h3>
          <div>
          <div>
          <h4 className="font-mediun text-2xl mt-7 mb-3 ml-5 sm:ml-0" >Teléfono:</h4>
          <p className="   font-light text-mediun  rounded-2xl  text-black   ml-5 sm:ml-0" >+57 321-540-0876</p>
          </div>
          <div>
          <h4 className="font-mediun text-2xl mt-7 mb-3 ml-5 sm:ml-0" >Horario:</h4>
          <p className="  font-light text-mediun  rounded-2xl text-black  mr-5 sm:mr-0 ml-5 sm:ml-0" >Lunes a sábado, de 8:00 AM a 10:00 PM. Domingo, de 8:00 AM a 2:30 PM.</p>
          </div>
          <div>
          <h4 className="font-mediun text-2xl mt-7 mb-3 ml-5 sm:ml-0" >Ubicacion:</h4>
        </div>
        </div>
      </div>
      <form action="https://formsubmit.co/clubdragones01@gmail.com" method="POST" className="flex flex-col justify-center items-center text-black mt-20 w-full sm:w-1/2 rounded-2xl">
        <h3 className="font-bold text-5xl  mb-3">
        Escribanos:
        </h3>
        <input type="text" name="Nombre" placeholder="Nombre" className=" w-72 h-10 mb-3 rounded-2xl outline-none bg-gray-200 text-white placeholder-gray-600  text-center" />
        <input type="email" name="Correo Electronico" placeholder="Correo Electronico" className="w-72 h-10 text-center mb-3 rounded-2xl outline-none bg-gray-200 text-white placeholder-gray-600 " />
        <textarea name="Descripción"  placeholder="Descripcion" className=" w-72 h-44 text-center rounded-2xl outline-none bg-gray-200  placeholder-gray-600 " ></textarea>
        <button className="bg-secondary  rounded-2xl text-center font-medium h-10 w-72 text-lg mt-5 mb-7 text-white hover:bg-opacity-80 ">Enviar</button>

        <input type="hidden" name="_next" value={`${server}contacto`} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Dragones-Pregunta Pagina Web!!" />
        <input type="text" name="_honey" style={{'display':'none'}} />
      </form>
      </div>

      <div className="grid grid-cols-1 grid-flow-row lg:md:grid-cols-2 sm:gap-0 gap-10">
      <div >
      <a href="https://goo.gl/maps/giDP256F5SvMC4HZ7" target="_Blank" rel="noreferrer" >
        <h3 className=" font-semibold text-center text-lg flex items-center"><BiMap />Cra 78a Calle 10a Parque principal</h3>
      </a>
      <iframe src="https://www.google.com/maps/embed?pb=!4v1665784308332!6m8!1m7!1siMv8Sch8yHUi6zrYulK0jQ!2m2!1d3.388276095098956!2d-76.54136458890143!3f336.10338838363697!4f-2.273657871823403!5f1.5970735545557107" className="w-full h-72"  loading="lazy" ></iframe>
      </div>
      <div className="">
      <a href="https://goo.gl/maps/1qNxpg3o5TLGdsc1A" target="_Blank" rel="noreferrer" >
        <h3 className=" font-semibold text-center text-lg flex items-center"><BiMap />Calle 34 # 94-39 </h3>
      </a>
      <iframe src="https://www.google.com/maps/embed?pb=!4v1665784415771!6m8!1m7!1s4QzmoScck26jSKbi2nXkMA!2m2!1d3.37452115697939!2d-76.52206864226582!3f291.71116621384687!4f5.54129115556789!5f1.4918713312373106" className="w-full  h-72" ></iframe>
      </div>
      </div>
    </Main>
  )
}
