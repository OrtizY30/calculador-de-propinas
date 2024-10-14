import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (item: OrderItem['id']) => void
};

const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-5 mb-5">
        {
          order.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-t py-5 border-gray-200 last-of-type:border-b">
                <div>
                <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black ml-5 -mt-1">
<span className="font-medium">x</span> {item.quantity}  -  {formatCurrency(item.price * item.quantity)}
              </p>

                </div>
           
              <button 
              className="bg-red-600 text-white font-bold w-8 h-8 rounded-full hover:bg-red-800"
              onClick={() => removeItem(item.id)}
              >
                X
              </button>
            </div>
          ))}
      </div>
     
     
    </div>
  );
};

export default OrderContents;
