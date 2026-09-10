
import "./Navbar.css";

const Navbar = ({
  navItems,
  active,
  navOpen,
  setNavOpen,
  scrollTo,
  goHome,
}) => {
  return (
    <header className="ny-header">
      <div className="ny-header-inner">

        <button className="ny-logo" onClick={goHome}>
          Nitin Yadav
        </button>

        <button
          className="ny-nav-toggle"
          onClick={() => setNavOpen((v) => !v)}
        >
          Menu
        </button>

        <nav className={`ny-nav ${navOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={active === item.id ? "active" : ""}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

      </div>
    </header>
  );
};

export default Navbar;

