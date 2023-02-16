import NavbarStyle from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={NavbarStyle.navbar}>
      <a href="#">About Us</a>
      <a href="#">For You</a>
      <a href="#">Services</a>
      <a href="#">Blog</a>
      <a href="#">Vlog</a>
      <a href="#">Contact</a>
    </div>
  );
};

export default Navbar;
