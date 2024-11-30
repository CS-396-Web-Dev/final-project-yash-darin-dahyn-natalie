import Button from "./Button";
import ShopItem from "./ShopItem";
import { useState } from "react";

export default function Shop({
  inventory,
  setInventory,
  currency,
  setCurrency,
}) {
  const [isShopOpen, setIsShopOpen] = useState(false);
  function openShop() {
    setIsShopOpen(!isShopOpen);
  }
  function purchaseItem(icon, price) {
    if (price > currency) {
      return;
    } else {
      setCurrency(currency - price);
    }
    const newInventory = { ...inventory };
    if (inventory.hasOwnProperty(icon)) {
      newInventory[icon] += 1;
    } else {
      newInventory[icon] = 1;
    }
    setInventory(newInventory);
  }
  return (
    <>
      <Button text="Shop" onClick={openShop} />
      {isShopOpen && (
        <div className="flex flex-col md:flex-row gap-4">
          <ShopItem
            name="Pet Chow"
            icon="🥫"
            price="10"
            onClick={purchaseItem}
          />
          <ShopItem
            name="Medicine"
            icon="💊"
            price="10"
            onClick={purchaseItem}
          />
          <ShopItem name="Toy" icon="🪀" price="10" onClick={purchaseItem} />
        </div>
      )}
    </>
  );
}
