
import AboutImg from "../assets/contactImg.jpg";
import Hero from "./Hero";
import Navbar from "./NavBar";
import NewFooter from "./NewFooter";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <NewFooter />
    </>
  );
}
export default Contact;