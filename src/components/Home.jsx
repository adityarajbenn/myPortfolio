import "../Styles/Home.css"
import pic from "../images/contact.gif"
import resume from "../images/Aditya_Raj_Benn_Resume.pdf"

function Home() {
  return (
    <div className="mainBioDiv" id="home" >
            <div >
        <div className="bioDiv">
            <h1>Hi,</h1>
            <h1>
            I am <span className="blue">Aditya</span>
            </h1>
            <h1>Web Developer</h1>
            <a 
                href={resume} 
                target="_blank" 
                rel="noreferrer"
                onClick={(e) => {
                    e.preventDefault(); 
                    const newTab = window.open(resume, "_blank");
                    const link = document.createElement("a");
                    link.href = resume;
                    link.download = "Aditya_Raj_Benn_Resume.pdf";
                    link.click(); 
                    if (newTab) newTab.focus(); 
                }}
                >
                <button id="resumeDownloadbtn">
                    <i className="fa-solid fa-download"></i>Resume
                </button>
                </a>

            </div>
        <div className="linkIcons">
            <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/aditya-raj-benn-86b507148/"
            className="jss4"
            target="_blank"
            >
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                className="HeroSection_linkedInIcon__JVjey"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
            </svg>
            </a>
            <a
            rel="noreferrer"
            href="https://github.com/adityarajbenn"
            className="jss4"
            target="_blank"
            >
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="HeroSection_gitIcon__8YmT0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
            </svg>
            </a>
            <a href="mailto:adityarajbenn@gmail.com" rel="noreferrer" target="_blank">
            <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                className="HeroSection_gitIcon__8YmT0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
            </svg>
            </a>

        </div>
        </div>
        <div className="bioImageGif">
            <img src={pic} alt="gif" />
        </div >
    </div>
  );
}

export default Home;
