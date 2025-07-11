import styles from "./header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <span className={styles.logoText}>G&L</span>
            <span className={styles.logoSubtitle}>Reservas</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
