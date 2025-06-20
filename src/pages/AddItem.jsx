import React from 'react';
import AddItemForm from '../components/AddItemForm';

export default function AddItem() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Add New Item</h1>
      <AddItemForm />
    </div>
  );
}
