import axios from 'axios'
import { server } from '../config/index'
export async function loadProducts() {
  const res = {
    hola: "title"
  }
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

