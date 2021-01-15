import "./_header.scss";

const Header = (props) => {
  return (
    <header className={`header header--${props.className}`}>
      {props.children}
    </header>
  );
};

export default Header;
