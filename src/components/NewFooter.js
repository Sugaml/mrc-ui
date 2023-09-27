import "./FooterStyles.css";

const NewFooter = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>SAM</h1>
          <p>Attendance Marking, Simplified!</p>
        </div>
        <div>
          <a href="https://www.facebook.com/amritesh.amr/" target="blank">
            <i class="fa-brands fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/neymar._.kid/" target="blank">
            <i class="fa-brands fa-instagram-square"></i>
          </a>
          <a href="https://github.com/amriteshamr" target="blank">
            <i class="fa-brands fa-github-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/amritesh-v-b-a66923183/"
            target="blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">ChangeLog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default NewFooter;
