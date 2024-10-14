import { useState } from "react";
import { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const [tip, setTip] = useState(0)

  const addItem = (item: MenuItem) => {
    const existe = order.some((orderItem) => orderItem.id === item.id);
    if (existe) {
      const updateOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updateOrder);
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: OrderItem['id']) => {
const updateOrder = order.filter(itemOrder => itemOrder.id !== id );
setOrder(updateOrder)

  }

  const placeOrder = () => {
    setOrder([])
    setTip(0)

  }

  return {
    order,
    tip, 
    setTip,
    addItem,
    removeItem,
    placeOrder

  };
}
