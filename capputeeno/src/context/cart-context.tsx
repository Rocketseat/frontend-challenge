import React, {
  createContext,
  useContext,
  useState,
  ChangeEvent,
  ReactNode,
} from 'react'
import { ProductInCart } from '@/types/use-product'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { key } from '@/utils/key-local-storage'

interface CartContextProps {
  cartItems: ProductInCart[]
  handleUpdateQuantity: (id: string, quantity: number) => void
  handleChange: (e: ChangeEvent<HTMLSelectElement>, id: string) => void
  addToCart: (product: ProductInCart) => void
  removeFromCart: (id: string) => void
  cartLength: number
}

const CartContext = createContext<CartContextProps | undefined>(undefined)

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
    key,
    [],
  )
  const [cartItems, setCartItems] = useState<ProductInCart[]>(value)

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity }
      }
      return item
    })
    setCartItems(updatedCart)
    updateLocalStorage(updatedCart)
  }

  const handleChange = (e: ChangeEvent<HTMLSelectElement>, id: string) => {
    handleUpdateQuantity(id, Number(e.target.value))
  }

  const addToCart = (product: ProductInCart) => {
    const existingProduct = cartItems.find((item) => item.id === product.id)

    if (existingProduct) {
      handleUpdateQuantity(product.id, existingProduct.quantity + 1)
    } else {
      const productWithQuantity = { ...product, quantity: 1 }
      setCartItems([...cartItems, productWithQuantity])
      updateLocalStorage([...cartItems, productWithQuantity])
    }
  }

  const removeFromCart = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedCart)
    updateLocalStorage(updatedCart)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleUpdateQuantity,
        handleChange,
        addToCart,
        removeFromCart,
        cartLength: cartItems.length,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
