const About = () => {
  const React = document.React;
  const { SkillsInfo } = React.Imports(({ constants }) => constants);
  const { WorkIcon } = React.Imports(({ icons }) => icons);
  const { HEADER, ABOUT, OPEN_TO_WORK, ABOUT_INFO } = SkillsInfo();
  return (
    <div>
      <h1 className="overview">{HEADER}</h1>
      <div className="aboutContainer">
        <div className="aboutContainerHeader">
          <div className="about">{ABOUT}</div>
          <div className="opentowork">
            <WorkIcon style={{ width: "15px", margin: "0px 4px" }} />
            {OPEN_TO_WORK}
          </div>
        </div>
        <div className="aboutInfo">{ABOUT_INFO}</div>
      </div>
    </div>
  );
};
export default About;
