import React, { useState } from 'react';

export default function AppForm() {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault(); // refresh 방지
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>이름:</label>
      <input
        type='text'
        id='name'
        name='name'
        value={form.name}
        onChange={(e) => {
          setForm({ ...form, name: e.target.value });
        }}
      />
      <label htmlFor='email'>이메일:</label>
      <input
        type='email'
        id='email'
        name='email'
        value={form.email}
        onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }}
      />
      <button>Submit</button>
    </form>
  );
}
