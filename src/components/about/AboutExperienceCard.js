import Education from "../assets/education.svg";
// import Edu2 from "../assets/edu2.png";
// import Edu3 from "../assets/edu3.png";
const AboutExperienceCard = ({ listOfExperiences }) => {
  const React = document.React;
  const { Grid } = React.Imports(({ materialUI }) => materialUI);
  // const { BookmarkBorderIcon, HomeIcon, CalendarMonthIcon } = React.Imports(
  //   ({ icons }) => icons
  // );
  const { AboutExpCard } = React.Imports(({ constants }) => constants);
  const { ABOUT_DESCRIPTION_CARD } = AboutExpCard();
  return (
    <Grid container xs={12} className="educationContainer">
      <Grid items xs={12} md={6} className="educationContainerLeft">
        <p>Do you know where I studied</p>
        <img src={Education} alt={"img"} />
      </Grid>
      <Grid items xs={12} md={6} className="educationContainerRight">
        {ABOUT_DESCRIPTION_CARD?.map((each, index) => {
          return (
            <div className="educationCardContainer">
              <div className="ImageInfo">
                <img src={each?.icon} alt={"edu1"} width={"60px"} />
                <p>{each.jobDuration}</p>
              </div>
              <div>
                <p>{each.role}</p>
                <p>{each.place}</p>
                <p>{each.jobDescription}</p>
              </div>
            </div>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default AboutExperienceCard;
