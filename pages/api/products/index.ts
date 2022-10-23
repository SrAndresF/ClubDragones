import db from "../../../lib/firebase-admin";
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    const { method } = req


    if(method === "GET"){
      try {
        const products = await db.collection("products").get();
        const productsData = products.docs.map((product:any)=> product.data())
        res.status(200).json(productsData)
      } catch (error) {
        res.status(500).json(error)
      }
    }

    if(method === "POST"){
      try {
        const product = await db.collection("products").add(req.body)
        res.status(201).json(product)
        
      } catch (error) {
        res.status(500).json(error)
      }
    }
}


