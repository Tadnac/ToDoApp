interface Props {
  active: "all" | "active" | "completed";
  onChange: (f: "all" | "active" | "completed") => void;
}

export default function TodoFilters({ active, onChange }: Props) {
  return (
    
    <div className="filter-container">
      <button
        className={active === "all" ? "active" : ""}
        onClick={() => onChange("all")}
      >
        Vše
      </button>

      <button
        className={active === "active" ? "active" : ""}
        onClick={() => onChange("active")}
      >
        Aktivní
      </button>

      <button
        className={active === "completed" ? "active" : ""}
        onClick={() => onChange("completed")}
      >
        Dokončeno
      </button>
    </div>
  );
}
