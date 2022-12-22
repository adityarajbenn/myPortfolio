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
            My desire to earn a better life motivated me to put my utmost
            efforts into what I do. I{" "}
            <span className="blue">Aditya Raj Benn</span> aspiring full-stack
            web developer. I like to build websites/application that serves the
            world. And always want to enhance my knowledge & adopt new
            technologies that make impact on people.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
