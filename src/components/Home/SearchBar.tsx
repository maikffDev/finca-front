import { useState } from "react";
import { FaClock, FaCalendarAlt, FaSearch } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./SearchBar.module.css";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className={styles.container}>
      {/* Icono Reloj */}
      <div className={styles.iconBox}>
        <FaClock color="#4b5563" />
      </div>

      {/* Icono Calendario */}
      <div className={styles.iconBox}>
        <FaCalendarAlt color="#4b5563" />
      </div>

      {/* DatePickers */}
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          if (endDate && date && date > endDate) {
            setEndDate(null);
          }
        }}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}
        placeholderText="Entrada"
        dateFormat="dd/MM/yyyy"
        className={styles.datePicker}
      />

      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate ?? new Date()}
        placeholderText="Salida"
        dateFormat="dd/MM/yyyy"
        className={styles.datePicker}
      />

      {/* Campo de búsqueda */}
      <div className={styles.inputContainer}>
        <FaSearch color="#9ca3af" />
        <input
          type="text"
          placeholder="Buscar"
          className={styles.inputField}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Botón */}
      <button className={styles.searchButton}>
        <FaSearch />
      </button>
    </div>
  );
}
