import "../Styles/About.css";

function About() {
  return (
    <div className="divComponents" id="about" >
      <h1 className="blue">About</h1>
      <div className="mainAboutDiv">
        <div className="profileImage">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQFA94x10sv84A/profile-displayphoto-shrink_800_800/0/1665724015179?e=1677110400&v=beta&t=OCpWd_Nq8fk3QUMCivSk-wLguaszMfUoUpUuqpggIas"
            alt=""
          />
        </div>
        <div>
          <p>Hi there,</p>
          <p>
          A passionate and skilled Web Developer with 1 year and 7 months of professional experience in building dynamic, responsive web applications. Proficient in frontend technologies, including React, JavaScript, antd and MUI, with a solid understanding of UI/UX principles. Strong communicator and quick learner, known for effectively collaborating with teams to deliver high-quality projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
