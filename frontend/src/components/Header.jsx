const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <a href="/">
              <img src="/img/logo.png" alt="Logo" />
            </a>
          </div>
          <nav className="nav">
            <a className="nav__link" href="/">
              Home
            </a>
            <a className="nav__link" href="/matches">
              Matches
            </a>
            <a className="nav__link" href="/teams">
              Teams
            </a>
            <a className="nav__link" href="/players">
              Players
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
