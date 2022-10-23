import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className="bg-principal h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20 mt-20 ">
				<div className="">
					<ul>
						<div className="rounded-full bg-logo-black flex "><Image className="rounded-full" src="/img/logo.png" width={60} height={60} alt="logo dragones" layout="intrinsic" /></div>
						<div className="flex ">
							<FaInstagram className="text-2xl cursor-pointer text-white hover:text-red-600 mr-2 mt-2" />
							<FaFacebook className="text-2xl cursor-pointer text-white hover:text-red-600 mt-2" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Productos</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
							Uniformes
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
							Servicios
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
							Entrenamientos
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
							Precio por dia
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Compañia</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
							Acerca de
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
							Precios
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
							Contacto
						</li>
						
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Soporte</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
							Contacto
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-red-600 cursor-pointer">
						+57 321-540-0876
						</li>
						
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-logo-white">
				<h1 className=" text-gray-800 font-semibold">
					© 2022 All rights reserved | Build by {"AndresG"}
					
				</h1>
			</div>
		</>
	);
}

export default Footer;