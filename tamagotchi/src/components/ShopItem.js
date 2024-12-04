export default function ShopItem({ name, icon, price, onClick }) {
  return (
    <div onClick={() => onClick(icon, price)} className="cursor-pointer">
      <div className="flex flex-col gap-y-4 text-center bg-neutral-100 p-5 rounded-lg w-52">
        <h1 className="text-2xl">{name}</h1>
        <p className="text-8xl">{icon}</p>
        <p className="text-xl">${price}</p>
      </div>
    </div>
  );
}
