import logo from "./logo.svg";

const Logo = () => <img src={logo} className="App-logo" alt="logo" />;

function Header({ title, id }) {
  return (
    <header className="App-header">
      <Logo></Logo>
      <p>{title}</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default Header;
