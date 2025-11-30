import { useState } from "react";

interface Props {
  onAdd: (text: string) => void;
}

export default function TodoInput({ onAdd }: Props) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
     if (!text.trim()) {
      setError("Zadej úkol.");
      return;
    }
    
    onAdd(text);
    setText("");
    setError("");
  };

  return (
     <div className="input-container">
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
      <input
      className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Přidat úkol..."
      />
      <button type="submit" className="button">Přidat</button>
    {error && (
        <p style={{ color: "red", marginTop: "5px", fontSize: "0.9rem" }}>
          {error}
        </p>
    )}
    </form>
    </div>
  );
}
