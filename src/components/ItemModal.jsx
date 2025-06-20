// import { Dialog } from '@headlessui/react';
import { useState } from 'react';

export default function ItemModal({ isOpen, onClose, item }) {
  const [current, setCurrent] = useState(0);
  if (!item) return null;

  const images = item.images.map(file => URL.createObjectURL(file));

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 max-w-lg w-full rounded relative">
        <h2 className="text-xl font-bold">{item.name}</h2>
        <p className="mb-2 text-gray-600">{item.type}</p>
        <p>{item.description}</p>

        <div className="mt-4 relative">
          <img src={images[current]} alt="" className="w-full h-64 object-cover rounded" />
          <div className="flex justify-between mt-2">
            <button onClick={() => setCurrent((current - 1 + images.length) % images.length)}>←</button>
            <button onClick={() => setCurrent((current + 1) % images.length)}>→</button>
          </div>
        </div>

        <button onClick={() => alert("Enquiry sent to xyz@email.com")} className="mt-4 w-full bg-green-600 text-white py-2 rounded">
          Enquire
        </button>
      </div>
    </Dialog>
  );
}
