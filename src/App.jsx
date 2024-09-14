import { useMemo, useState } from "react";
import Header from "./component/Header";
import CardList from "./component/CardList";
import AddProduct from "./component/AddProduct";

function App() {
  const [theme, setTheme] = useState("dark");
  const [products, setProducts] = useState([
    { id: 1, name: "chips", price: 100, items: 1 },
    { id: 2, name: "pepsi", price: 200, items: 1 },
    { id: 3, name: "cigarets", price: 300, items: 1 },
    { id: 4, name: "kranshi", price: 400, items: 1 },
  ]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === "dark") return "light";
      return "dark";
    });
  };
  const handleChangeItem = (id, amount) => {
    const newProducts = products.map((product) => {
      if (product.id === id) product.items += amount;

      if (product.items < 1) product.items = 1;
      return product;
    });

    setProducts(newProducts);
  };
  const handleRemoveItem = (id) => {
    const newProduct = products.filter((product) => product.id !== id);
    setProducts(newProduct);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const productName = e.target[0].value;
    const productPrice = e.target[1].value;
    e.target[0].value = "";
    e.target[1].value = "";

    const newProduct = {
      id: Math.random(),
      name: productName,
      price: productPrice,
      items: 1,
    };

    const newProducts = [newProduct, ...products];
    setProducts(newProducts);
  };
  const handleDeleteAll = () => setProducts([]);
  const handleReset = () => {
    const newProduct = products.map((product) => {
      product.items = 1;
      return product;
    });
    setProducts(newProduct);
  };

  const totalPrice = useMemo(() => {
    let total = 0;
    products.forEach((product) => {
      total += product.items * product.price;
    });
    return total;
  }, [products]);

  return (
    <div data-theme={theme} className="flex flex-col min-h-[100vh]">
      <Header
        items={products.length}
        totalPrice={totalPrice}
        handleChangeTheme={handleChangeTheme}
      />
      <div className="max-w-[1440px] mx-auto flex flex-col gap-7">
        <AddProduct handleSubmit={handleSubmit} />
        <div className="flex items-center justify-between">
          <span>All Product</span>
          <div className="flex gap-4 items-center">
            <button className="btn btn-outline btn-info" onClick={handleReset}>
              Reset
            </button>
            <button
              className="btn btn-outline btn-error"
              onClick={handleDeleteAll}
            >
              Delete all
            </button>
          </div>
        </div>
        <CardList
          allCards={products}
          handleChangeItems={handleChangeItem}
          handleRemoveItem={handleRemoveItem}
        />
        <div className="flex justify-center">Total Price : {totalPrice}$</div>
      </div>
    </div>
  );
}

export default App;
