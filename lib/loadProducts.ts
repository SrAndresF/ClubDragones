import axios from 'axios'
import { server } from '../config/index'
export async function loadProducts() {
  const res = await axios.get(`${server}/api/products`, {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'User-Agent': '*',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  })
  return res.data
}

export async function loadPayments() {
  const res = await axios.get(`https://api.sheety.co/3299dff32a515a2e99c2709f83b570f4/dragonesBaseDeDatos/dragonesBaseDeDatos`, {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'User-Agent': '*',
      },
    })
    return res.data
}

