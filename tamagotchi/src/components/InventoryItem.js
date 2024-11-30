export default function InventoryItem({ icon, count }) {
    return (<>
        <p className="text-3xl">{icon}: {count}</p>
    </>);
}
