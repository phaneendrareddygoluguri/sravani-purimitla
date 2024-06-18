import Choosen from "../assets/choosen.png";
// import Edu1 from "../assets/edu1.png";
// import Edu2 from "../assets/edu2.png";
// import Edu3 from "../assets/edu3.png";
const AboutCard = () => {
  const React = document.React;
  const { SkillsInfo } = React.Imports(({ constants }) => constants);
  const { WorkIcon } = React.Imports(({ icons }) => icons);
  const {  ABOUT, OPEN_TO_WORK, ABOUT_INFO } = SkillsInfo();
  const { WhyChoosingMe } = React.Imports(({ utils }) => utils);
  const { WhyChoosingMeReasons } = React.Imports(({ constants }) => constants);
  const { REASONS } = WhyChoosingMeReasons();
  // const { Container } = React.Imports(({ materialUI }) => materialUI);
  const { Grid } = React.Imports(({ materialUI }) => materialUI);
  // const { BookmarkBorderIcon, HomeIcon, CalendarMonthIcon } = React.Imports(
  //   ({ icons }) => icons
  // );
  // const { AboutExpIcon } = React.Imports(({ assets }) => assets);
  // const { AboutExpCard } = React.Imports(({ constants }) => constants);
  // const { ABOUT_DESCRIPTION_CARD } = AboutExpCard();
  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      <div className="aboutContainerHeader">
        <div className="about" style={{ display: "flex" }}>
          {ABOUT}{" "}
          <div className="opentowork">
            <WorkIcon style={{ width: "15px", margin: "0px 4px" }} />
            {OPEN_TO_WORK}
          </div>
        </div>
      </div>
      <div className="aboutInfo">{ABOUT_INFO}</div>

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
          <img src={Choosen} alt={"img"} />
        </Grid>
      </Grid>
    </div>
  );
};
export default AboutCard;
