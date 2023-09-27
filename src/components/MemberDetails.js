import "./MemberStyles.css";
import MemberData from "./MemberData";
import amrpic from "../assets/amr.jpg";
import mhdpic from "../assets/mhd.jpg";
import zadpic from "../assets/zad.jpg";
import majpic from "../assets/maj.png";
const MemberDetails = () => {
  return (
    <div className="members">
      <h1>Know the Team</h1>
      <p>Here are the team members behind SAM along with the guide..</p>
      <MemberData
        className="member-des"
        heading="Amritesh"
        desc="Hello, my name is Amritesh VB, and I am a student at KMCT College of
      Engineering. My interests lie in the fields of Python, AI, and ML,
      and I am currently undertaking a course on business analytics to
      broaden my knowledge further. What I love most about programming is
      the freedom it offers in finding solutions. Unlike other fields,
      there is no one standard way of coding things. It's fascinating to
      see how different programmers can approach the same problem in
      different ways, each with its own advantages and disadvantages. I am
      constantly looking to improve my skills and stay updated with the
      latest trends in the industry. I am excited about the possibilities
      that programming holds, and I am eager to apply my knowledge to
      real-world problems."
        pers1={amrpic}
      />
      <MemberData
        className="member-des-reverse"
        heading="Muhammed"
        desc="Hi there! My name is Muhammed, and I am a student at KMCT College of Engineering. My technical interests lie in machine learning, python, and fullstack development. I am currently honing my skills in these areas through an internship training in machine learning. I am driven by a desire to become a successful fullstack developer. To achieve this goal, I am committed to learning and mastering new technologies, as well as continuously improving my existing skills.Although I am still in the early stages of my career, I am proud to have already achieved some notable accomplishments. For example, I have received recognition from my peers and instructors for my exceptional work in programming and software development. I am truly passionate about using technology to make the world a better place, and I look forward to continuing to do so in my future career as a fullstack developer."
        pers1={mhdpic}
      />
      <MemberData
        className="member-des"
        heading="Zadeeda"
        desc="Hi, I'm Zadeeda Ayisha VP, a student at KMCT College of Engineering with a passion for front-end web development and Python. As a budding technologist, I have a solid foundation in HTML, CSS, and JavaScript, and I'm always looking for new ways to expand my skill set. I'm particularly interested in creating engaging and responsive user interfaces that provide a seamless user experience. While still in the early stages of my career, I have already gained valuable experience through projects and internships that have helped me sharpen my coding skills and develop a keen eye for design. I'm excited to continue honing my craft and becoming a proficient front-end developer. In my free time, I enjoy exploring new programming languages. I am passionate about using technology to create meaningful and impactful experiences, and I am committed to becoming a skilled and sought-after front-end developer."
        pers1={zadpic}
      />
      <MemberData
        className="member-des-reverse"
        heading="Ms. Majida CV"
        desc="Ms. Majida Chettiyam Veettil is an Assistant Professor in the CSE department of KMCT College of Engineering. She holds an M.Tech degree in CSE and has specialized in Object-Oriented Programming using Java. As our project guide, she has provided valuable support and guidance to the team members throughout the development process. Throughout the project development process, Ms. Majida has been a guiding force, offering insights into the latest technology trends and providing guidance on professional-level project development considerations. Her expertise in the field has proven to be instrumental in the success of our  project. She has also motivated the team to publish the project as a paper, emphasizing the potential benefits this could bring in the future."
        pers1={majpic}
      />
    </div>
  );
};

export default MemberDetails;
