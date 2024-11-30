export default function Button({ text, onClick }) {
  return (
    <button
      className="px-4 py-2 bg-red-400 text-white rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
