import { ProductInCart } from '@/types/use-product'

export const calculateTotal = (value: ProductInCart[]): number => {
  return value.reduce(
    (sum, item) => (sum += item.price_in_cents * item.quantity),
    0,
  )
}
