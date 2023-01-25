import React, { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [collection, setCollection] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);
    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData
    })
    .then((response) => response.json())
    .then((data) => {
      setCollection(data.updated_collection);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <div>
        {collection.map((num, index) => (
          <div key={index}>{num}</div>
        ))}
      </div>
    </div>
  );
};

export default Upload;
