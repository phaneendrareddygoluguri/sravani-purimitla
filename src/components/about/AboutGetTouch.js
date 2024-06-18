function AboutGetTouch() {
  const React = document.React;
  const { Grid, } = React.Imports(
    ({ materialUI }) => materialUI
  );
  // const { AboutBulb, AboutGirl } = React.Imports(({ assets }) => assets);
  const { WorkIcon } = React.Imports(({ icons }) => icons);
  const { AboutGetTouchData } = React.Imports(({ constants }) => constants);
  const { ABOUT_GET_CARD } = AboutGetTouchData();
  return (
    <Grid className="container-get-touch">
      <div className="aboutOpentoworkContainer">
        <div className="opentowork" style={{ maxWidth: "120px" }}>
          <WorkIcon style={{ width: "15px", margin: "0px 4px" }} />
          {"OPEN_TO_WORK"}
        </div>
        <button
          className="actionButton"
          // aria-describedby={id}
          variant="contained"
          // onClick={handleClick}
        >
          Get in Touch
        </button>
      </div>

      <div className="aboutSectionDetails">
        {ABOUT_GET_CARD?.map((each) => {
          return (
            <span className="opentowork2">
              {each.icon}
              {each.data}
            </span>
          );
        })}
      </div>
    </Grid>
  );
}

export default AboutGetTouch;
