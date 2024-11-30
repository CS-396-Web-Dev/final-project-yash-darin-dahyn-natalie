import Button from "./Button";
import Item from "./Item";
import { useState } from "react";

export default function Shop() {
    const [isShopOpen, setIsShopOpen] = useState(false);
    function openShop() {
        setIsShopOpen(!isShopOpen);
    }
    return (<>
        <Button text="Shop" onClick={openShop} />
        {isShopOpen && (
        )
        }
    </>);
}
