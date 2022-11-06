import Main from "../../components/layout/Main";
import { Menu, Transition } from '@headlessui/react'
import { loadProducts } from "../../lib/loadProducts";

export default function admin({products}:{products:any}) {


  return (
    <Main title="Admin Dashboard💾">
      <Menu>
      <Menu.Button
      className=" bg-secondary w-44 py-3 rounded-lg sm:ml-20 hover:bg-opacity-80 ml-3 text-white font-medium " >Crear y/ó eliminar/actualizar Producto</Menu.Button>
      <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Crear producto
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Editar Producto
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="#Eliminar Producto"
            >
              Eliminar Producto
            </a>
            )}
        </Menu.Item>
      </Menu.Items>
      </Transition>
    </Menu>
          
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