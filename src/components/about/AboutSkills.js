// import Education from "../assets/education.svg";
// import Edu1 from "../assets/edu1.png";
import Skills from "../assets/skills.png";
// import Edu3 from "../assets/edu3.png";
const AboutSkill = () => {
  const React = document.React;
  const { Grid } = React.Imports(({ materialUI }) => materialUI);
  // const { yearsAndMonthsCompleted } = React.Imports(({ utils }) => utils);
  return (
    <Grid
      container
      xs={12}
      className="educationContainer"
      style={{ flexWrap: "wrap-reverse" }}
    >
      <Grid items xs={12} md={6} className="skillsContainerRight">
        <div style={{ textAlign: "center" }}>
          {[
            { skill: "Html" },
            { skill: "Css" },
            { skill: "JavaScript" },
            { skill: "React" },
            { skill: "Redux-Toolkit" },
            { skill: "Bootstrap" },
            { skill: "Material-UI" },
            { skill: "React-router" },
            { skill: "Git" },
            { skill: "Github" },
            { skill: "Axios" },
          ]?.map((each, index) => {
            return (
              <div className="skillsCardContainer">
                <p>{each.skill}</p>
                {/* <p className="yearsExp">{yearsAndMonthsCompleted()}</p> */}
              </div>
            );
          })}
        </div>
      </Grid>
      <Grid items xs={12} md={6} className="educationContainerLeft">
        <p>Small look at my skills</p>
        <img src={Skills} alt={"img"} />
      </Grid>
    </Grid>
  );
};
export default AboutSkill;
