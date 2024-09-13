import "./footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <p>
        Har du ikke rukket å bli drita enda?
        <br />
        <br />
        <b>Kontakt:</b>
        <br />
        Fredrik Carsten Hansteen
        <br />
        Applikasjonskomiteen, Online
        <br />
        <a href="mailto:fredrik.carsten.hansteen@online.ntnu.no">fredrik.carsten.hansteen@online.ntnu.no</a>
        <br />
        <a href="tel:+4747630231">(+47) 476 30 231</a>

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
