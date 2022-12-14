import { BsWhatsapp } from 'react-icons/bs'
import Link from "next/link"
import { Suspense } from 'react'
import dynamic from "next/dynamic";
import { loadProducts } from "../../lib/loadProducts"
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
const MainDinamyc = dynamic(()=> import('../../components/layout/Main'),{ 
  suspense:true,
  });
export default function Shop({product, products}:{product:any, products:any}) {
  const router = useRouter()
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen "><h2 className=" absolute  text-3xl font-semibold">Por favor espere.....</h2><div className=" animate-spin">
    <div className=" scroll-smooth inline-block w-44 h-44 m-4 rounded-full bg-ball animate-ping "></div><div className=" scroll-smooth inline-block w-44 h-44 m-4 rounded-full bg-ball animate-ping "></div></div><div className=" scroll-smooth inline-block w-44 h-44 m-4 rounded-full bg-ball animate-ping "></div></div>} >
    <MainDinamyc title={product.data.title}>
      
              <div className=" mt-21 mb-10 sm:mb-0  text-white flex flex-col md:flex-row justify-center items-center text-center flex-flow bg-secondary bg-opacity-50 rounded-lg   w-full">
                <div className="flex flex-row">
                <div >
                  <img src={`${product.data.img}`} width={150 * 2} height={110 * 2} className="object-cover"  alt={product.data.title} />
                </div>
                </div>
                <div className="flex flex-col mr-5">
                <h3 className=" text-base font-semibold" > {product.data.title} </h3>
                <p className=" text-base" >{product.data.description}</p>
                <p className=" text-base font-semibold" >valor: co${product.data.price}</p>
                <Link href="/politicas-devoluciones"><a className="text-blue-300 border-b-2 border-blue-300 mb-3">Politica de devoluciones</a></Link>

                </div>
                <div className="bg-[#25D366] flex flex-row w-max items-center justify-center rounded-lg p-2 text-white hover:bg-[#25FF77] cursor-pointer mb-3 md:mb-0 ">
                <BsWhatsapp className="text-white " />
                <a href={`https://wa.me/573215400876?text=Hola, estoy interesado en: °${product.data.title}° con precio: °${product.data.price}° Url: https://clubdragones${router.asPath}.com`} target="_blank" rel="noopener noreferrer" >Comprar por whatsapp</a>
                </div>
                
              </div>
              
              <h2 className=" text-3xl ml-3 sm:ml-10 mt-10 font-semibold border p-2">Otros Productos</h2>
              <ul className=" ml-7 sm:ml-10 mt-10 lg:ml-20 grid md:lg:grid-cols-3 grid-cols-1  md:lg:grid-rows-2 sm:grid-cols-2 grid-flow-row md:gap-10 sm:gap-5 lg:gap-20 ">
              {products?.map((c:any)=>(
                <Link href={`/shop/${c.title.toLowerCase().replace(/\s/g, "-")}`} key={c.title} >
                <li className="mb-10 sm:mb-0 cursor-pointer text-white flex flex-col justify-center items-center text-center flex-flow bg-secondary bg-opacity-50 rounded-lg hover:translate-x-1 hover:translate-y-1  w-max" key={c.title} >
                  <div>
                    <img src={`${c.img}`} width={150 * 2} height={110 * 2}  alt={c.title} />
                  </div>
                  <h2 className=" text-base font-semibold" >{c.title}</h2>
                  <p className=" text-base" >{c.drescription}</p>
                  <p className=" text-base font-semibold" >valor: {c.price} </p>
                </li>
                </Link>
              )) }
          </ul>
      
    </MainDinamyc>
    </Suspense>
  )
}



export const getStaticPaths: GetStaticPaths = async () => {
  const products = await loadProducts()
  const paths = products?.map((c: any)=>{
  return({
    params: { 
      id: c.data.title.toLowerCase().replace(/\s/g, "-"),
    }
  })})
  return {
    paths,
    fallback: false
}}


export const getStaticProps: GetStaticProps = async ({params}) => {
  const id = (params as ParsedUrlQuery).id;
  const products = await loadProducts();
  const producSlice = products.map((c:any)=> c.data)
  const product = await products.find((p:any)=>(p.data.title.toLowerCase().replace(/\s/g, "-") === id));
  return {
    props: {  
      products: producSlice,
      product: product,
    },
  }
}