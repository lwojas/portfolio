import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./App.css";
import Nav from "./components/Nav.jsx";

// Main App
export default function App() {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState("");
  const [content, setContent] = useState("");

  // Fetch list of markdown files
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}files.json`)
      .then((res) => res.json())
      .then((data) => {
        setFiles(data);
        if (data.length > 0) setSelectedFile(data[0]);
      });
  }, []);

  // Fetch content of selected file
  useEffect(() => {
    if (!selectedFile) return;
    fetch(`${import.meta.env.BASE_URL}${selectedFile}`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [selectedFile]);

  return (
    <div className="app">
      <Nav
        files={files}
        selectedFile={selectedFile}
        onSelect={setSelectedFile}
      />

      <div className="markdown-container">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
