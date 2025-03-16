import * as React from 'react';
import { useState } from 'react';

interface PropType {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'object' | 'array';
  required: boolean;
  description: string;
}

const PropTypeEditor: React.FC = () => {
  const [propTypes, setPropTypes] = useState<PropType[]>([]);
  const [newProp, setNewProp] = useState<PropType>({
    name: '',
    type: 'string',
    required: false,
    description: ''
  });
  
  const handleAddPropType = (e: React.FormEvent): void => {
    e.preventDefault();
    setPropTypes([...propTypes, newProp]);
    setNewProp({
      name: '',
      type: 'string',
      required: false,
      description: ''
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Додати властивість</h2>
        <form onSubmit={handleAddPropType} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Назва</label>
            <input
              type="text"
              value={newProp.name}
              onChange={(e) => setNewProp({...newProp, name: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Тип</label>
            <select
              value={newProp.type}
              onChange={(e) => setNewProp({...newProp, type: e.target.value as PropType['type']})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="string">String</option>
              <option value="number">Number</option>
              <option value="boolean">Boolean</option>
              <option value="object">Object</option>
              <option value="array">Array</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={newProp.required}
              onChange={(e) => setNewProp({...newProp, required: e.target.checked})}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-900">
              Обов'язкове поле
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Додати властивість
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Список властивостей</h2>
        {propTypes.length === 0 ? (
          <p className="text-gray-500 text-center py-4">Немає доданих властивостей</p>
        ) : (
          <div className="space-y-3">
            {propTypes.map((prop, index) => (
              <div key={index} className="border-b py-3">
                <div className="font-medium">{prop.name}</div>
                <div className="text-sm text-gray-600">
                  Тип: {prop.type}
                  {prop.required && <span className="text-red-500 ml-2">*</span>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropTypeEditor;
