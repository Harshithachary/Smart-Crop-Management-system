import React, { useState } from 'react';
import axios from 'axios';

export default function PredictForm() {
  const [crop, setCrop] = useState('');
  const [pest, setPest] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/predict', {
      crop, pest
    });
    setResult(res.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Crop" value={crop} onChange={(e) => setCrop(e.target.value)} />
      <input placeholder="Pest" value={pest} onChange={(e) => setPest(e.target.value)} />
      <button type="submit">Predict</button>
      {result && <p>Pesticide: {result.pesticide}, Dosage: {result.dosage}</p>}
    </form>
  );
}