import AboutImg from "../assets/grp7.jpg";
import Hero from "./Hero";
import MemberDetails from "./MemberDetails";
import Navbar from "./NavBar";
import NewFooter from "./NewFooter";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About Us"
        btnClass="hide"
      />
      <MemberDetails />
      <NewFooter />
    </>
  );
}
export default About;