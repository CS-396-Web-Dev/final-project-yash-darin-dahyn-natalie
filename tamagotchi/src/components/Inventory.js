import InventoryItem from "./InventoryItem";

export default function Inventory({ inventory, setInventory }) {
  function useItem(icon) {
    const newInventory = { ...inventory };
    if (newInventory[icon] === 1) {
      delete newInventory[icon];
    } else {
      newInventory[icon] -= 1;
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
