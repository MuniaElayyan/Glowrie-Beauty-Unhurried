import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <div className="flex items-center gap-3">
            <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-[#FDEFE9]">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain p-1" />
            </div>
            <div className="mr-auto">
                <div className="text-sm text-plum-900 font-medium">
                    {item.name}{" "}
                    {quantity > 1 && <span className="text-plum-400 text-xs">×{quantity}</span>}
                </div>
                <div className="text-plum-400 text-xs">
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div className="text-sm text-plum-900 font-medium">{formatCurrency(item.price * quantity)}</div>
            <button
                className="w-7 h-7 flex items-center justify-center rounded-full text-plum-400 hover:text-blush-600 hover:bg-blush-100 text-sm transition-colors"
                onClick={() => removeFromCart(item.id)}
                aria-label="Remove item"
            >
                &times;
            </button>
        </div>
    )
}
