import React, { useState } from 'react';

const Upload = () => {
  const [jsonString, setJsonString] = useState('');
  const [collection, setCollection] = useState([]);

  const handleJsonStringChange = (e) => {
    setJsonString(e.target.value);
  };

  const handleUpload = () => {
    const jsonData = JSON.parse(jsonString);
    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: JSON.stringify(jsonData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      setCollection(data.updated_collection);
    });
  };


  return (
    <div>
      <textarea onChange={handleJsonStringChange} />
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
