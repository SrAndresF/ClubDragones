import Main from "../../components/layout/Main";
import Image from "next/image";
import { motion } from "framer-motion"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { GetStaticProps } from "next";
import { loadPayments } from "../../lib/loadProducts";
import axios from "axios";

export default function pagos({payments}:{payments: any}) {
  const onSubmit = (values: any) =>{
   console.log(values)   
  }
  const validate = (values: any) =>{
    const errors = {
      id: 'La identificacion no existe',
    }
    if(undefined !== payments.find((c:any)=> (c.cc === values.id))){errors.id}else{
      return;
    }
    
  }
  return (
    <Main title="Pagos👍">
      
      <div className=" flex  flex-col sm:flex-row justify-start sm:mt-0 mt-20">
      <div className="flex flex-col justify-start sm:justify-center items-start h-screen sm:mr-32">
      <h3 className="ml-7 font-bold text-3xl lg:text-7xl sm:ml-20 mb-4">Pagos</h3>
      
      <Formik
      initialValues={{
        name: '',
        id: '',
        date: '',
      }}
      onSubmit={onSubmit}
      validate={validate} >
        <Form className="flex flex-col ml-7 md:ml-20 ">
          <Field name="id" type="text" placeholder="Introduce la identificación del estudiante"  className="bg-gray-200 p-2 text-white rounded-lg " />
          <ErrorMessage name="id" />
          <h4 className="font-semibold text-1xl lg:text-1xl">Fecha de nacimiento del estudiante:</h4>
          <Field name="date" type="date" className="bg-gray-200 p-2 text-white rounded-lg mb-3" />
          <ErrorMessage name="date" />
          <button type="submit" className=" bg-secondary w-44 h-10 rounded-lg hover:bg-opacity-80  " >
          <h6 className="text-white">Enviar</h6>
          </button>
        </Form>
      </Formik>
      
      
      <div className="flex ml-10 md:ml-0 sm:absolute sm:right-0  md:lg:w-96 md:h-96 bg-principal rounded-full md:mt-0 mt-20 w-72 h-72">
        <motion.div className="absolute rounded-full rotate-90  "
        initial={{y: 300}}
        animate={{y:0}}
        transition={{duration:0.7}} >
        <Image src="/img/pay2.png" alt="payments" width={3000/2} height={3000/2}  layout="intrinsic" />
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


export async function mercadoPago() {
  const res = await axios.post(`https://api.mercadopago.com`, {
      headers: {
        'Authorization': process.env.ACCESS_TOKEN,
        Accept: 'application/json, text/plain, */*',
      },
    })
    return res.data
  
}