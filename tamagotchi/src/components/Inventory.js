import InventoryItem from "./InventoryItem";

export default function Inventory({ inventory, setInventory, barStates }) {
  function useItem(icon) {
    const newInventory = { ...inventory };
    if (newInventory[icon] === 1) {
      delete newInventory[icon];
    } else {
      newInventory[icon] -= 1;
    }
    if (icon === "🥫") {
        barStates.hunger.setState(Math.min(100, barStates.hunger.state + 30));
    } else if (icon === "💊") {
        barStates.health.setState(Math.min(100, barStates.health.state + 30));
    } else if (icon === "🪀") {
        barStates.happiness.setState(Math.min(100, barStates.happiness.state + 30));
    }
    setInventory(newInventory);
  }
  return (
    <>
      <div className="flex flex-row gap-x-4 justify-evenly bg-neutral-100 p-3 rounded-lg w-full max-w-md">
        {Object.entries(inventory).map((pair, idx) => (
          <InventoryItem
            key={idx}
            icon={pair[0]}
            count={pair[1]}
            onClick={useItem}
          />
        ))}
      </div>
    </>
  );
}
