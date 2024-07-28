// import Edu1 from "../assets/edu1.png";
// import Edu2 from "../assets/edu2.png";
// import Edu3 from "../assets/edu3.png";
const AboutCard = () => {
  const React = document.React;
  const { SkillsInfo } = React.Imports(({ constants }) => constants);
  const { WorkIcon } = React.Imports(({ icons }) => icons);
  const { ABOUT, OPEN_TO_WORK, ABOUT_INFO } = SkillsInfo();
  const { WhyChoosingMe } = React.Imports(({ utils }) => utils);
  const { WhyChoosingMeReasons } = React.Imports(({ constants }) => constants);
  const { passportpic } = React.Imports(({ assets }) => assets);

  const { REASONS } = WhyChoosingMeReasons();
  // const { Container } = React.Imports(({ materialUI }) => materialUI);
  const { Grid } = React.Imports(({ materialUI }) => materialUI);
  // const { BookmarkBorderIcon, HomeIcon, CalendarMonthIcon } = React.Imports(
  //   ({ icons }) => icons
  // );
  // const { AboutExpCard } = React.Imports(({ constants }) => constants);
  // const { ABOUT_DESCRIPTION_CARD } = AboutExpCard();
  const listItems = ABOUT_INFO.split(".")
    .map((item, index) => item.trim())
    .filter((item) => item)
    .map((item, index) => <li key={index}>{item}</li>);
  return (
    <div>
      <div className="aboutContainerHeader">
        <div className="about" style={{ display: "flex" }}>
          {ABOUT}{" "}
          <div className="opentowork">
            <WorkIcon style={{ width: "15px", margin: "0px 4px" }} />
            {OPEN_TO_WORK}
          </div>
        </div>
      </div>
      <div className="aboutInfo">
        <ul>{listItems}</ul>
      </div>

      <Grid
        container
        xs={12}
        className="educationContainer"
        style={{ flexWrap: "wrap-reverse" }}
      >
        <Grid items xs={12} md={6} className="educationContainerRight">
          <div>
            <WhyChoosingMe reasons={REASONS} title={false} />
          </div>
        </Grid>
        <Grid items xs={12} md={6} className="educationContainerLeft">
          <p>Why choosing me?</p>
          <img src={passportpic} alt={"img"} className="profileImage" />
        </Grid>
      </Grid>
    </div>
  );
};
export default AboutCard;
