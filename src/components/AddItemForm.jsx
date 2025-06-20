import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function AddItemForm() {
  const [item, setItem] = useState({
    name: '',
    type: '',
    description: '',
    coverImage: null,
    images: []
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'coverImage') {
      setItem({ ...item, coverImage: files[0] });
    } else if (name === 'images') {
      setItem({ ...item, images: [...files] });
    } else {
      setItem({ ...item, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = {
      name: item.name,
      type: item.type,
      description: item.description,
      coverImage: URL.createObjectURL(item.coverImage),
      images: item.images.map(file => URL.createObjectURL(file))
    };

    try {
      await addDoc(collection(db, 'items'), newItem);
      alert('Item successfully added ✅');
      setItem({ name: '', type: '', description: '', coverImage: null, images: [] });
      e.target.reset();
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to add item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4">
      <input name="name" type="text" placeholder="Item Name" className="w-full border p-2 rounded" required onChange={handleChange} />
      <select name="type" required onChange={handleChange} className="w-full border p-2 rounded">
        <option value="">Select Type</option>
        <option value="Shirt">Shirt</option>
        <option value="Pant">Pant</option>
        <option value="Shoes">Shoes</option>
        <option value="Sports Gear">Sports Gear</option>
      </select>
      <textarea name="description" placeholder="Description" className="w-full border p-2 rounded" onChange={handleChange} />
      <input name="coverImage" type="file" accept="image/*" required onChange={handleChange} />
      <input name="images" type="file" accept="image/*" multiple onChange={handleChange} />
      <button type="submit" className="bg-blue-600 text-white w-full p-2 rounded">Add Item</button>
    </form>
  );
}
