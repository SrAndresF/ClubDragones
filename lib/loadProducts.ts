import axios from 'axios'
import { server } from '../config/index'
export async function loadProducts() {
  const products = await axios.get(`${server}/api/products`)
  return products.data
}