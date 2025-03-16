import React, { useState, useEffect } from 'react';

const PropTypeEditor = () => {
  const [propTypes, setPropTypes] = useState(() => {
    const saved = localStorage.getItem('propTypes');
    return saved ? JSON.parse(saved) : [
      { name: 'title', type: 'string', required: true },
      { name: 'count', type: 'number', required: false }
    ];
  });

  const [newProp, setNewProp] = useState({ name: '', type: 'string', required: false });

  useEffect(() => {
    localStorage.setItem('propTypes', JSON.stringify(propTypes));
  }, [propTypes]);

  const handleAddProp = () => {
    if (!newProp.name) return;
    setPropTypes([...propTypes, { ...newProp, id: Date.now() }]);
    setNewProp({ name: '', type: 'string', required: false });
  };

  const handleDelete = (index) => {
    setPropTypes(propTypes.filter((_, i) => i !== index));
  };

  return (
    <div className="prop-types-container">
      <div className="card mb-4">
        <h2 className="text-xl font-bold mb-4">Add New PropType</h2>
        <div className="flex gap-4 flex-wrap">
          <input
            type="text"
            value={newProp.name}
            onChange={(e) => setNewProp({ ...newProp, name: e.target.value })}
            className="border rounded p-2 dark:bg-gray-700 dark:border-gray-600"
            placeholder="Property name"
          />
          <select
            value={newProp.type}
            onChange={(e) => setNewProp({ ...newProp, type: e.target.value })}
            className="border rounded p-2 dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="string">String</option>
            <option value="number">Number</option>
            <option value="boolean">Boolean</option>
            <option value="array">Array</option>
            <option value="object">Object</option>
          </select>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={newProp.required}
              onChange={(e) => setNewProp({ ...newProp, required: e.target.checked })}
              className="mr-2"
            />
            Required
          </label>
          <button
            onClick={handleAddProp}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add PropType
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        {propTypes.map((prop, index) => (
          <div key={index} className="prop-type-item flex justify-between items-center">
            <div>
              <span className="font-bold">{prop.name}</span>
              <span className="ml-2 text-gray-600 dark:text-gray-400">
                {prop.type}
                {prop.required && ' (required)'}
              </span>
            </div>
            <button
              onClick={() => handleDelete(index)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropTypeEditor;
