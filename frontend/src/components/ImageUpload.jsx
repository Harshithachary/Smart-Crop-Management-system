import React, { useState } from 'react';
import axios from 'axios';

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [pest, setPest] = useState('');

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', image);
    const res = await axios.post('http://localhost:5000/upload-image', formData);
    setPest(res.data.pest);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handleUpload}>Detect Pest</button>
      {pest && <p>Detected Pest: {pest}</p>}
    </div>
  );
}