interface Props {
  active: "all" | "active" | "completed";
  onChange: (f: "all" | "active" | "completed") => void;
}

export default function TodoFilters({ active, onChange }: Props) {
  return (
    
    <div className="filter-container">
      <button
        className={`filter-btn ${active === "all" ? "filter-btn-active" : ""}`}
        onClick={() => onChange("all")}
      >
        Vše
      </button>

      <button
        className={`filter-btn ${active === "active" ? "filter-btn-active" : ""}`}
        onClick={() => onChange("active")}
      >
        Aktivní
      </button>

      <button
       className={`filter-btn ${active === "completed" ? "filter-btn-active" : ""}`}
        onClick={() => onChange("completed")}
      >
        Dokončeno
      </button>
    </div>
  );
}
