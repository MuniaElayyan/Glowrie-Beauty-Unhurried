
type OrderItem = {
    name: string
    quantity: number
    price: number
}

type OrderDetails = {
    name: string
    phone: string
    city: string
    address: string
    notes: string
    items: OrderItem[]
    total: number
}

const EMAILJS_SERVICE_ID = "service_niyoq1p"
const EMAILJS_TEMPLATE_ID = "template_17ys9pe"
const EMAILJS_PUBLIC_KEY = "g_qCqJTP-JS_9wn65"

export async function sendOrderEmail(order: OrderDetails) {
    const itemsText = order.items
        .map(
            item =>
                `${item.name} — الكمية: ${item.quantity} — السعر: ${item.price * item.quantity}`
        )
        .join("\n")

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            service_id: EMAILJS_SERVICE_ID,
            template_id: EMAILJS_TEMPLATE_ID,
            user_id: EMAILJS_PUBLIC_KEY,
            template_params: {
                customer_name: order.name,
                customer_phone: order.phone,
                customer_city: order.city,
                customer_address: order.address,
                delivery_notes: order.notes || "لا توجد ملاحظات",
                order_items: itemsText,
                order_total: order.total,
            },
        }),
    })

    if (!response.ok) {
        throw new Error("Failed to send order email")
    }
}

