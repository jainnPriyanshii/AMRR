export default function ItemCard({ item }) {
  return (
    <div className="shadow rounded p-3 hover:bg-gray-100 transition">
      <img src={item.coverImage} alt={item.name} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 font-semibold">{item.name}</h3>
    </div>
  );
}
