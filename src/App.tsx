import { menuItems } from "./data/db";
import MenuItems from "./components/MenuItems";
import useOrder from "./hooks/useOrder";
import OrderContents from "./components/OrderContents";
import TipPropina from "./components/TipPropina";
import OrderTotal from "./components/OrderTotal";

function App() {
  const { addItem, order, removeItem, tip, setTip, placeOrder } = useOrder();
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de propinas
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black ">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItems key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContents order={order} removeItem={removeItem} />

              <TipPropina setTip={setTip} tip={tip} />

              <OrderTotal order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) :(
            <p className="text-center">La orden esta vacía</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
