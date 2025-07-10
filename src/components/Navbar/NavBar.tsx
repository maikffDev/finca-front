import "./NavBarStyle.css";

function NavBar() {
  return (
    <div className="home-navbar">
      <input type="date" className="input-date" placeholder="Fecha inicio" />
      <input type="date" className="input-date" placeholder="Fecha fin" />
      <input type="text" className="input-search" placeholder="Buscar..." />
      <button className="btn-search">Buscar</button>
    </div>
  );
}

export default NavBar;
