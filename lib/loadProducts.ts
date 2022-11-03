import axios from 'axios'
import { server } from '../config/index'
export async function loadProducts() {
  const res = await axios.get(`${server}/api/products`, {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'User-Agent': '*',
    },
  })
  return res.data
}