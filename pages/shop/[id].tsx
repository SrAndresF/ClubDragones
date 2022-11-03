import { BsWhatsapp } from 'react-icons/bs'
import Link from "next/link"
import { Suspense } from 'react'
import dynamic from "next/dynamic";
import Image from "next/image"
import { loadProducts } from "../../lib/loadProducts"
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring';

const MainDinamyc = dynamic(()=> import('../../components/layout/Main'),{ 
  suspense:true,
  });
export default function Shop({product, products}:{product:any, products:any}) {
  return (
    <Suspense fallback={<div className="flex justify-center items-center transform "><div className=" inline-block w-44 h-44 m-4 rounded-full bg-ball animate-bounce "></div></div>} >
    <MainDinamyc title={product.title}>
      
              <div className=" mb-10 sm:mb-0  text-white flex flex-row justify-center items-center text-center flex-flow bg-secondary bg-opacity-50 rounded-lg   w-full">
                <div className="flex flex-col">
                <div >
                  <Image src={`/${product.img}`} width={150 * 2} height={110 * 2} layout="intrinsic" alt={product.title} />
                </div>
                </div>
                <div className="flex flex-col mr-5">
                <h3 className=" text-base font-semibold" > {product.title} </h3>
                <p className=" text-base" >{product.description}</p>
                <p className=" text-base font-semibold" >valor: {product.price}</p>
                </div>
                <div className="bg-[#25D366] flex flex-row w-max items-center justify-center rounded-lg p-2 text-white hover:bg-[#25FF77] cursor-pointer">
                <BsWhatsapp className="text-white" />
                <a href={`https://wa.me/573215400876?text=Hola, estoy interesado en: °° con precio: °price}° Url: https://clubdragones`} target="_blank" rel="noopener noreferrer" >Comprar por whatsaap</a>
                </div>
              </div>
              <h2 className=" text-3xl ml-3 sm:ml-10 mt-10 font-semibold border p-2">Otros Productos</h2>
              <ul className=" ml-3 sm:ml-10 mt-10 lg:ml-20 grid md:lg:grid-cols-3 grid-cols-1  md:lg:grid-rows-2 sm:grid-cols-2 grid-flow-row md:gap-10 sm:gap-5 lg:gap-20 ">
              {products?.map((c:any)=>(
                <Link href={`/shop/${c.title.toLowerCase().replace(/\s/g, "-")}`} key={c.title} >
                <li className="mb-10 sm:mb-0 cursor-pointer text-white flex flex-col justify-center items-center text-center flex-flow bg-secondary bg-opacity-50 rounded-lg hover:translate-x-1 hover:translate-y-1  w-max" key={c.title} >
                  <div>
                    <Image src={`/${c.img}`} width={150 * 2} height={110 * 2} layout="intrinsic" alt={c.title} />
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
      id: c.title.toLowerCase().replace(/\s/g, "-"),
    }
  })})
  return {
    paths,
    fallback: false
}}


export const getStaticProps: GetStaticProps = async ({params}) => {
  const id = (params as ParsedUrlQuery).id;
  const products = await loadProducts();
  const producSlice = products.slice(1,5);
  const product = await products.find((p:any)=>(p.title.toLowerCase().replace(/\s/g, "-") === id));
  return {
    props: {  
      products: producSlice,
      product: product,
    },
  }
}