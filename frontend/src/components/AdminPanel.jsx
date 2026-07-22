import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminPanel() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/admin/data').then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h2>Admin Panel</h2>
      <p><b>Crops:</b> {data.crops?.join(', ')}</p>
      <p><b>Pests:</b> {data.pests?.join(', ')}</p>
      <ul>
        {data.pesticides?.map((item, i) => (
          <li key={i}>{item.crop} - {item.pest} ➜ {item.pesticide} ({item.dosage})</li>
        ))}
      </ul>
    </div>
  );
}