import styles from "./header.module.css"

import { useEffect, useState } from "react";
import UserWelcome from "./UserWelcome";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) setUserName(storedName);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("accessToken");
    setUserName(null);
    navigate("/login");
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
           <span className={styles.logoText}>G&L</span>

{userName && (
  <UserWelcome name={userName} onLogout={handleLogout} />
)}

<span className={styles.logoSubtitle}>Reservas</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
