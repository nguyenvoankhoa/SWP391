import React, { useState } from "react";

const FileUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      console.log(formData);
      // Send the formData to the backend using an HTTP request (e.g., fetch or axios)
      // Example using fetch:
      //   fetch("/api/upload", {
      //     method: "POST",
      //     body: formData,
      //   })
      //     .then((response) => {
      //       // Handle the response from the backend
      //     })
      //     .catch((error) => {
      //       // Handle any errors
      //     });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default FileUploadForm;
