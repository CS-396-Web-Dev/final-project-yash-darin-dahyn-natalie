import Button from "./Button";
import ShopItem from "./ShopItem";
import { useState } from "react";

export default function Shop() {
    const [isShopOpen, setIsShopOpen] = useState(false);
    function openShop() {
        setIsShopOpen(!isShopOpen);
    }
    return (<>
        <Button text="Shop" onClick={openShop} />
        {isShopOpen && (
            <div className="flex flex-col md:flex-row gap-4">
                <ShopItem name="Puffle Chow" icon="🥫" price="10" />
                <ShopItem name="Medicine" icon="💊" price="10" />
                <ShopItem name="Toy" icon="🪀" price="10" />
            </div>)}
    </>);
}
