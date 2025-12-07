function Nav({ files, selectedFile, onSelect }) {
  return (
    <nav className="nav">
      {files.map((file) => (
        <a
          key={file}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onSelect(file);
          }}
          className={file === selectedFile ? "active" : ""}
        >
          {file.replace(".md", "")}
        </a>
      ))}
    </nav>
  );
}
export default Nav;
