import { server } from '../config/index'
export async function loadProducts() {
  const res = await fetch(`${server}/api/products`)
  const data = await res.json()
  return data
}