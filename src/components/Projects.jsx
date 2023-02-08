import "../Styles/Project.css"



function Project({name,description,Tools,featureOne,featureTwo,featureThree,featureFour,netlify_link,github_link,gif}) {
  console.log({gif})
  return (
    // <div className="divComponent" >
      <div className="projectDivs">
        <div className="leftPart">
            <div className="description">
                <h4 className="blue">{name} Clone</h4>
                <p><b>{description}</b></p>
                <p>Tools: {Tools} </p>
                <p>Features:</p>
                <ul>
                    <li>{featureOne}</li>
                    <li>{featureTwo}</li>
                    <li>{featureThree}</li>
                    <li>{featureFour}</li>
                </ul>
            </div>
            <div className="projectButtonDiv">
                <a href={netlify_link} target="_blank" rel="noreferrer"><button className="demoButton buttonHover" >DEMO</button></a>
                <a href={github_link} target="_blank" rel="noreferrer"><button className="viewCodeButton buttonHover">VIEW CODE</button></a>
            </div>
        </div>
        <div>
            <img src={gif} alt="Project_gif" style={{width:"100%"}}/>
        </div>
      </div>
    // </div>
  );
}

export default Project;
