import Hero from "./Hero";
import Navbar from "./NavBar";
import NewFooter from "./NewFooter";
import What from "./What";

function NewHome() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        title="Attendance Marking, Simplified!"
        text="No more heavy Logbooks :)"
        buttonText="Mark Now !"
        url="/login"
        btnClass="show"
      />
      <What />
      <NewFooter />
    </>
  );
}
export default NewHome;