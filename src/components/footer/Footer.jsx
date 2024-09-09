import "./footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <p>
        Har du ikke rukket å bli drita enda?
        <br />
        Kontakt: Fredrik
      </p>
      <div className="logoer">
        <a href="https://www.facebook.com/LinjeforeningenOnline">
          {" "}
          <img src="/facebook ikon.svg" alt="Facebook logo"></img>{" "}
        </a>
        <a href="https://www.instagram.com/online_ntnu/">
          {" "}
          <img src="/instagram ikon.svg" alt="instagram logo"></img>{" "}
        </a>
      </div>
    </footer>
  );
}
export default Footer;
