import React, { useState } from 'react';
import AddClassForm from './AddClassForm';
import ExistingClasses from './ExistingClasses';

function ClassManagement() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Class Management</h1>
      <div className="mb-8">
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {showAddForm ? 'Hide Add Class Form' : 'Add Class'}
        </button>
      </div>
      {showAddForm && <AddClassForm />}
      <ExistingClasses />
    </div>
  );
}

export default ClassManagement;

