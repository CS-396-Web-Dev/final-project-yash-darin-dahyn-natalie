export default function InventoryItem({ icon, count, onClick }) {
  return (
    <div onClick={() => onClick(icon)} className="cursor-pointer">
      <p className="text-3xl">
        {icon}: {count}
      </p>
    </div>
  );
}
