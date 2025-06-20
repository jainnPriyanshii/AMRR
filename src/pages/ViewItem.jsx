import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import ItemCard from '../components/ItemCard';
import { useNavigate } from 'react-router-dom';

export default function ViewItems() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'items'));
      const fetched = querySnapshot.docs.map(doc => doc.data());
      setItems(fetched);
    };
    fetchItems();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">View Items</h1>
        <button
          onClick={() => navigate('/add')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Item
        </button>
      </div>

      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <ItemCard key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
