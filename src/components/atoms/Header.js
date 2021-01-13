import "./_header.scss";

const Header = (props) => {
  return <header className="header">{props.Children}</header>;
};

export default Header;
