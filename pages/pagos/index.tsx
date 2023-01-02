import Main from "../../components/layout/Main";
import Image from "next/image";
import { motion } from "framer-motion"
import { GetStaticProps } from "next";
import { loadPayments } from "../../lib/loadProducts";
import WidgetPayment from "../../components/transaction/WidgetPayments";
import { useState } from "react"
import Link from "next/link";
import { useForm } from "react-hook-form"

type FormValues = {
  cc: string;
  fechaDeNacimiento: string;
}
export default function Pagos({payments}:{payments: any}) {

  const {register, handleSubmit, formState:{errors}} = useForm<FormValues>()
  const [view, setView] = useState<boolean>(false)
  const [credential, setCredential] = useState<boolean>(false)

  const onSubmit = ( values: any ) =>{
    validator(values)
  }
  const validator = (value: any) =>{
    let day = value.fechaDeNacimiento.substr(8,1) === "0" ? value.fechaDeNacimiento.substr(9,3)  : value.fechaDeNacimiento.substr(8,8)
    let month = value.fechaDeNacimiento.substr(5,1) === "0" ? value.fechaDeNacimiento.substr(6,1)  : value.fechaDeNacimiento.substr(5,2)
    let year = value.fechaDeNacimiento.substr(0,4)
    const formatDate = day  + "/" + month + "/" + year
    if(payments?.find((e: any)=>(e.cc.toString() === value.cc && e.fechaDeNacimiento === formatDate && e.pagoInscripcion === "x"))){
      return setView(true)
    }else{
      setCredential(true)
    }
  } 
  

  return (
    <Main title="Pagos👍" >
      <div className=" flex  flex-col sm:flex-row justify-start sm:mt-0 mt-20">
      <div className="flex flex-col justify-start sm:justify-center items-start h-screen sm:mr-32">
      <h3 className="ml-7 font-bold text-3xl lg:text-7xl sm:ml-20 mb-4">{view ? "Paga con wompi" : "Pagos"}</h3>
        <p className=" text-lg ml-7 md:ml-20 mb-2 ">{view ? "Presiona en el boton para pagar": null}</p>
        {view 
        ? 
        <div className="ml-7 md:ml-20">
          <WidgetPayment total={60000} />
        </div> 
        : 
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ml-7 md:ml-20 ">
          <input type="text" placeholder="Introduce la identificación del estudiante"  className="bg-gray-200 p-2 text-gray-400 rounded-lg " {...register('cc', {required: true, maxLength: 10, minLength: 8})} />
          {errors.cc?.type === "required" && <p>Este campo es requerido</p> }
          {errors.cc?.type === "maxLength" && <p>No se pueden escribir mas de de 10 caracteres</p> }
          {errors.cc?.type === "minLength" && <p>No se pueden escribir menos de 10 caracteres</p> }

          <h4 className="font-semibold text-1xl lg:text-1xl">Fecha de nacimiento del estudiante:</h4>
          <input type="date"  className="bg-gray-200 p-2 text-gray-400 rounded-lg" {...register('fechaDeNacimiento',{required:true})}  />
          {errors.fechaDeNacimiento?.type === "required" && <p>Este campo es requerido</p> }
          {credential ? <p className=" text-red-600">No existen unas credenciales parecidas, primero debes inscribirte por favor.</p> : null }
          <Link href="/pagos/inscripciones" ><a className=" text-link mb-3">¿No estas inscrito?</a></Link>
          <button type="submit" className=" bg-secondary w-44 h-10 rounded-lg hover:bg-opacity-80  " >
          <h6 className="text-white">Enviar</h6>
          </button>
          
        </form>
        }
      <div className="flex ml-10 md:ml-0 sm:absolute sm:right-0  md:lg:w-96 md:h-96 bg-principal rounded-full md:mt-0 mt-20 w-72 h-72">
        <motion.div className="absolute rounded-full rotate-90  "
        initial={{y: 300}}
        animate={{y:0}}
        transition={{duration:0.7}} >
        <Image src="/img/pay2.png" alt="payments" priority={false}  placeholder="empty" width={3000/2} height={3000/2}  layout="intrinsic" />
        </motion.div>
      </div>
      
        </div>
        </div>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const payments = await loadPayments()
  return {
    props: {
      payments: payments.dragonesBaseDeDatos,
    }, 
  }
}

