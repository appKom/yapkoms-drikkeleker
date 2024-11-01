import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div id="container">
        <a href="https://www.online.ntnu.no/" id="online-container">
          <img src="/online-logo.svg" alt="Online logo" />
        </a>

        <a href="https://www.appkom.no" id="appkom-container">
          <img src="/appkom-logo.svg" alt="Appkom logo" />
        </a>

        <a href="https://www.bekk.no" id="sponsor-container">
          <img src="/bekk.svg" alt="Bekk logo" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
