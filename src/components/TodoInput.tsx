import { useState } from "react";

interface Props {
  onAdd: (text: string) => void;
}

export default function TodoInput({ onAdd }: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
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
    </form>
    </div>
  );
}
