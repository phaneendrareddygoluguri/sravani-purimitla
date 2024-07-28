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
        <Grid container>
          {ABOUT_DESCRIPTION_CARD?.map((item) => {
            return (
              <Grid items xs={12} className="roles-header">
                <div className="interest-container">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div>
                      <img src={item.icon} alt="" width={"40px"} />
                    </div>
                    <div style={{ margin: "5px 5px 5px 17px" }}>
                      <h5 className="rolesRole">{item.role}</h5>
                      <p className="roleSalary">{item.jobDuration}</p>
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutExperienceCard;
