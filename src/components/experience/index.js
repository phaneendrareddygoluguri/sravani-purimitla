const Experience = () => {
  const React = document.React;
  const { Sravani } = React.Imports(({ assets }) => assets);
  const { Grid, Box } = React.Imports(({ materialUI }) => materialUI);
  const { WhyChoosingMe } = React.Imports(({ utils }) => utils);
  const {
    WhyChoosingMeReasons,
    Description,
    RoleDescription,
    // RolesAndResposibilities,
    // WorkDescription,
  } = React.Imports(({ constants }) => constants);
  const { REASONS } = WhyChoosingMeReasons();
  const { DESCRIPTION } = Description();
  const { ROLEDESCRIPTION } = RoleDescription();
  // const { ROLESANDRESPONSIBILITIES } = RolesAndResposibilities();
  // const { WORK_DESCRIPTION } = WorkDescription();

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={3} className="openToworkContainer">
          <Box className="centre-align" style={{ marginTop: "30px" }}>
            <div className="imageContainer">
              <img src={Sravani} alt="EXPERIENCE" className="image" />
            </div>
            <div className="lokkingForJobContainer">
              <h4 className="newJob">Front-End Developer</h4>
              <p className="role-description">{ROLEDESCRIPTION}</p>
              <button
                variant="contained"
                style={{
                  border: " 0px solid black",
                }}
              >
                <a
                  className="actionButton"
                  href="mailto:sravani235p@gmail.com"
                  style={{ "text-decoration": "none", margin: "10px" }}
                >
                  Get in Touch
                </a>
              </button>
            </div>
          </Box>
        </Grid>

        <Grid item xs={12} md={9} className="aboutInfoContainer">
          <h3 className="experience-font">Experience</h3>
          <Box className="about_info_Text">{DESCRIPTION}</Box>
          <Box>
            <WhyChoosingMe reasons={REASONS} />
          </Box>
        </Grid>
      </Grid>
      {/* <Grid container>
        <Grid item xs={12} md={5} className="aboutInfoContainer">
          <Box className={"expDatContentInfo"}>
            <img src={Work} alt="img" width={250} />
            <div className="infoTextExpContent">
              <h4>Cashapona It Technologies Pvt Ltd</h4>
              <p>React.JS Developer</p>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={7} className="openToworkContainerInfo">
          <Box className={"expDatContent"}>
            <img src={Work} alt="img" width={"100px"} />
            <div className="infoTextExpContent">
              <h4>Cashapona It Technologies Pvt Ltd</h4>
              <p>React.JS Developer</p>
            </div>
          </Box>
          {ROLESANDRESPONSIBILITIES?.map((ele) => (
            <p style={{ marginLeft: "5px" }}>{`- ${ele?.responsiblities}`}</p>
          ))}

        </Grid>
      </Grid> */}
    </>
  );
};

export default Experience;
/* Container 25 */
