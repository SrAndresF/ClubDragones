import { server } from '../config/index'
export async function loadProducts() {
  const res = await fetch(`${server}/api/products`)
  const data = res.json()
  return data
}