import headerLogo from "../images/header.svg";

function Header() {
  return (
    <header className="header">
      <img
        className="header__image"
        src={headerLogo}
        alt="The
project's title"
      />
    </header>
  );
}

export default Header;
