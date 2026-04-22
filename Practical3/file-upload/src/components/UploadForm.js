import axios from "axios";
import { useState } from "react";

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Upload success:", res.data);
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="file"
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />
      <button type="submit">Upload</button>
    </form>
  );
}