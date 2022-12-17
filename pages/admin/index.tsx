import Main from "../../components/layout/Main";
import { Button, Card, Input, List, message, Image, Progress } from 'antd'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { Popover } from '@headlessui/react'
import { loadProducts } from "../../lib/loadProducts";
import Stadistics from "../../components/Stadistics";
import { BiExit } from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"
import { server } from '../../config/index'
import axios from "axios";
import { useState } from 'react'
import { storage } from '../../firebaseConfig'
import MoonLoader from "react-spinners/MoonLoader";
import { BarLoader } from "react-spinners";

export default function Admin({products}:{products:any}) {
  
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null >(null);
  const [price, setPrice] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [imageFile, setImageFile] = useState<File>()
  const [downloadURL, setDownloadURL] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [progressUpload, setProgressUpload] = useState(0)

  const changeState = () => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1000)
  }
  const handleDelete = async (id:string) => {
    try {
    await axios.delete(`${server}api/products/${id}`) 
    }
    catch(err){
      setError(true)
    }
    changeState()
  }
  const handleSubmit = async (e: any) =>{
    e.preventDefault()
    changeState()
    try {
      await axios.post(`${server}api/products`,{
        title,
        description,
        price,
        img: downloadURL,
      });

    }
    catch(err){
      setError(true)

    }
  }
  const handleSelectedFile = (files: any) => {
    if (files && files[0].size < 10000000) {
      setImageFile(files[0])

      console.log(files[0])
    } else {
      message.error('File size to large')
    }
  }
  const handleUploadFile = () => {
    if (imageFile) {
      const name = imageFile.name
      const storageRef = ref(storage, `image/${name}`)
      const uploadTask = uploadBytesResumable(storageRef, imageFile)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100

          setProgressUpload(progress) // to show progress upload

          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          message.error(error.message)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setDownloadURL(url)
          })
        },
      )
    } else {
      message.error('File not found')
    }
  }
  const handleRemoveFile = () => setImageFile(undefined)

  return (
    <Main title="Admin Dashboard💾">
       <div className="mt-14">
       <Popover>
      {({ open }) => (
        <>
          <Popover.Button>
          <div className=" bg-secondary w-44 h-10 rounded-lg  hover:bg-opacity-80 flex justify-center items-center mt-4 ml-7" >
              <h6 className="text-white">Actualizar Uniformes</h6>
              <BiExit className={open ? 'rotate-180 transform text-white' : 'text-white'} />
          </div> 
          </Popover.Button>
              <Popover.Panel>
            <div className="flex justify-center items-center w-full h-max  ">
              <div className="bg-gray-100 w-full-2 h-max rounded-2xl flex justify-center items-center flex-col">
            <div className="">
                 <h3 className=" font-bold text-2xl lg:text-3xl   text-center mt-7">Crear Uniforme</h3>      
                      <div className="flex justify-center items-center   ">
                        <form className=" justify-center items-center flex flex-col mb-3 mx-3" onSubmit={handleSubmit}  >
                          <input type="text" placeholder="Titulo del uniforme" name="uniformTitle"onChange={(e)=> setTitle(e.target.value)}  className="bg-gray-300 mt-3 rounded-2xl p-3"  />
                          <input type="text" placeholder="Descripción del uniforme" name="uniformDescription" onChange={(e)=> setDescription(e.target.value)}  className="bg-gray-300 mt-3 rounded-2xl p-3"  />
                          <input type="text" placeholder="Precio del uniforme" name="UniformePrice" onChange={(e)=> setPrice(e.target.value)} className="bg-gray-300 mt-3 rounded-2xl p-3"  />
                          <div className="container mt-5">
      <div className="">
        <Input
          type="file"
          placeholder="Selecciona una imagen a subir"
          accept="image/png/jpg"
          onChange={(files) => handleSelectedFile(files.target.files)}
        />

        <div className="mt-5">
          <Card>
            {imageFile && (
              <>
                <List.Item
                  extra={[
                    <Button
                      key="btnRemoveFile"
                      onClick={handleRemoveFile}
                      type="text"
                      icon={<i className="fas fa-times"></i>}
                    />,
                  ]}
                >
                  <List.Item.Meta
                    title={imageFile.name}
                    description={`Tamaño Archivo: ${imageFile.size}`}
                  />
                </List.Item>

                <div className="text-right mt-3">
                  <Button
                    loading={isUploading}
                    type="dashed"
                    onClick={handleUploadFile}
                    className="bg-slate-200"
                  >
                    Subir
                  </Button>

                  <Progress percent={progressUpload} />
                </div>
              </>
            )}

            {downloadURL && (
              <>
                <Image
                  src={downloadURL}
                  alt={downloadURL}
                  style={{ width: 200, height: 200, objectFit: 'cover' }}
                />
                <p>{downloadURL}</p>
              </>
            )}
            <p></p>
          </Card>
        </div>
      </div>
    </div>
                          <button type="submit" className=" bg-secondary w-36 h-10 rounded-lg flex justify-center items-center  hover:bg-opacity-80  mt-3" onClick={handleSubmit} >
                            
                            {loading ? <BarLoader color="#FFF" width={80} height={4} /> : <h5 className="text-white">Crear</h5> }
                            
                          </button>
                          {error && <span className=' text-red-500'>Vuelve A Intentarlo</span>}
                        </form>
                      </div>

            </div>
              <h3 className=" font-bold text-2xl lg:text-3xl  mb-4">Uniformes</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 grid-flow-row mb-7 ">
              {products.map((c:any)=>(
              <li className="mb-10 sm:mb-0 cursor-pointer text-white flex flex-col justify-center items-center text-center flex-flow bg-secondary bg-opacity-50 rounded-lg hover:translate-x-1 hover:translate-y-1  w-44" key={c.data.title} >
                
                <div>
                  <img src={c.data.img} width={150 * 2} height={110 * 2}  alt={`${c.title}`} />
                </div>
                <h2 className=" text-base font-semibold" >{c.data.title}</h2>
                <p className=" text-base" >{c.data.description}</p>
                <p className=" text-base font-semibold" >valor: co${c.data.price}</p>

                <div className="w-0 h-0">
                  <button title="Eliminar Uniforme" key="DeleteUniform" onClick={() => handleDelete(c.id)} className=" relative w-8 border-white h-8 bg-principal rounded-full flex justify-center items-center cursor-pointer hover:bg-opacity-70 bottom-40  left-10">
                  { loading ? <MoonLoader color="#FFF" size={17}   /> :  <AiFillDelete />}
                  </button>
                </div>
              </li>
              ))}
              </div>
              </div>
            </div>
          </Popover.Panel>
        </>
      )}
    
    </Popover>
       </div>
       
      
      <Stadistics />
      
    </Main>
  )
}

export const getServerSideProps = async (ctx: any) => {
  const myCookie = ctx.req?.cookies || "";
  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    }
  }
  const products = await loadProducts();
  return{
    props:{
      products: products,
    }
  }}
