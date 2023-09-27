import campic from "../assets/camera.jpg";
import perspic from "../assets/facerec.jpg";
import pythonpic from "../assets/python.jpg";
import regpic from "../assets/register.jpg";
import Data from "./Data";
import "./WhatStyles.css";

const What = () => {
  return (
    <div>
      <Data
        className="what-des"
        heading="What is SAM ?"
        text="SAM, or Smart attendance Marker is an innovative approach rowards
    attendance marking in educational institutions. SAM aims to overthrow
    the conventional methods of attendance registers and even some of the
    latest biometric methods by implementing the face recognition
    technology. Smarter than ever, isn't it?"
        img1={campic}
        img2={perspic}
      />
      <Data
        className="what-des-reverse"
        heading="Why SAM ?"
        text="SAM is the perfect attendance tracking solution for educational institutions of any size. With its advanced facial recognition technology, SAM ensures that only authorized individuals can mark attendance, reducing the risk of errors and fraudulent activities. SAM is highly accurate and reliable, making attendance marking quick and easy for both students and teachers. Real-time attendance reports enable teachers and administrators to monitor attendance patterns and make data-driven decisions to optimize their educational programs. SAM reduces costs by eliminating the need for manual record-keeping, making it an efficient solution for any educational institution. Its scalability ensures that SAM can grow with the institution, making it ideal for schools of any size."
        img1={pythonpic}
        img2={regpic}
      />
    </div>
  );
};

export default What;
