import axios from "axios"
import { BsWhatsapp } from 'react-icons/bs'
import Main from "../../components/layout/Main"
import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"
import { server } from "../../config"
export default function Shop({product, products}:{product:any, products:any}) {
  const router = useRouter();
  return (
    <Main title={product.title}>
      
              <div className=" mb-10 sm:mb-0  text-white flex flex-row justify-center items-center text-center flex-flow bg-secondary bg-opacity-50 rounded-lg   w-full">
                <div className="flex flex-col">
                <div >
                  <Image src={`/${product.img}`} width={150 * 2} height={110 * 2} layout="intrinsic" alt={product.title} />
                </div>
                </div>
                <div className="flex flex-col mr-5">
                <h3 className=" text-base font-semibold" >{product.title} </h3>
                <p className=" text-base" >{product.description}</p>
                <p className=" text-base font-semibold" >valor: {product.price}</p>
                </div>
                <div className="bg-[#25D366] flex flex-row w-max items-center justify-center rounded-lg p-2 text-white hover:bg-[#25FF77] cursor-pointer">
                <BsWhatsapp className="text-white" />
                <a href={`https://wa.me/573215400876?text=Hola, estoy interesado en: °${product.title}° con precio: °${product.price}° Url: https://clubdragones${router.asPath}`} target="_blank" rel="noopener noreferrer" >Comprar por whatsaap</a>
                </div>
              </div>
              <h2 className=" text-3xl ml-3 sm:ml-10 mt-10 font-semibold border p-2">Otros Productos</h2>
              <ul className=" ml-3 sm:ml-10 mt-10 lg:ml-20 grid md:lg:grid-cols-3 grid-cols-1  md:lg:grid-rows-2 sm:grid-cols-2 grid-flow-row md:gap-10 sm:gap-5 lg:gap-20 ">
            {products.map((c:any)=>(
              <Link href={`/shop/${c.title.toLowerCase().replace(/\s/g, "-")}`} key={c.title} >
              <li className="mb-10 sm:mb-0 cursor-pointer text-white flex flex-col justify-center items-center text-center flex-flow bg-secondary bg-opacity-50 rounded-lg hover:translate-x-1 hover:translate-y-1  w-max" key={c.title} >
                <div>
                  <Image src={`/${c.img}`} width={150 * 2} height={110 * 2} layout="intrinsic" alt={c.title} />
                </div>
                <h2 className=" text-base font-semibold" >{c.title}</h2>
                <p className=" text-base" >{c.description}</p>
                <p className=" text-base font-semibold" >valor: {c.price}</p>
              </li>
              </Link>
            ))}
          </ul>
      
    </Main>
  )
}


export async function getStaticPaths() {
  const products = await axios.get(`${server}/api/products`)
  const paths = products.data.map((c: any)=>({
    params: { id: c.title.toLowerCase().replace(/\s/g, "-")}
  }))
  return {
    paths,
    fallback: false
}}


export const getStaticProps = async ({params}:{ params: any}) => {
  const products = await  axios.get(`${server}/api/products`)
  const producSlice = products.data.slice(1,5)
  const product = await products.data.find((p:any)=>(p.title.toLowerCase().replace(/\s/g, "-") === params.id))
  return {
    props: {  
      products: producSlice,
      product: product,
    },
  }
}
