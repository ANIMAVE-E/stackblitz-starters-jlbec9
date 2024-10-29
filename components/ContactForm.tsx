'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    yearOfPass: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div>
          <label className="block mb-1">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div>
          <label className="block mb-1">
            Phone<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            className="w-full p-2 border rounded"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>

        <div>
          <label className="block mb-1">
            Education Qualification<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded"
            value={formData.education}
            onChange={(e) => setFormData({...formData, education: e.target.value})}
          />
        </div>

        <div>
          <label className="block mb-1">
            Year of Pass Out<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded"
            value={formData.yearOfPass}
            onChange={(e) => setFormData({...formData, yearOfPass: e.target.value})}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded font-bold text-lg"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}