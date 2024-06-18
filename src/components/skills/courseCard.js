function CourseCard() {
  const React = document.React;
  const { Grid, Rating } = React.Imports(({ materialUI }) => materialUI);
  const { Doller, Idcard, Pepole, Textcard } = React.Imports(
    ({ assets }) => assets
  );
  const { ReactECharts } = React.Imports(({ ECharts }) => ECharts);
  const { KeyboardDoubleArrowDownIcon, KeyboardDoubleArrowUpIcon } =
    React.Imports(({ icons }) => icons);
  const { SkillsInfo } = React.Imports(({ constants }) => constants);
  const { LANGUAGES_INFO } = SkillsInfo();

  return (
    <>
      {LANGUAGES_INFO?.map((each) => {
        return (
          <div className="aboutContainer">
            <Grid container xs={12}>
              <div className="languageContainer">
                <b className="languageText">{each?.LANGUAGE}</b>
                <Rating
                  name="read-only"
                  precision={0.5}
                  value={each?.STAR_RATING}
                  readOnly
                />
              </div>
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={12} md={12} lg={6}>
                <Grid container>
                  <Grid item xs={12} md={5.6} m={1} className="courseCard">
                    <div>
                      <p className="courseDataText">{each?.EXPERIENCE}</p>
                      <div
                        className="courseDataContainer"
                        style={{
                          color: "#117B34FF",
                          background: " #EEFDF3FF",
                        }}
                      >
                        <KeyboardDoubleArrowUpIcon style={{ width: "18px" }} />
                        <b>{each?.EXPERIENCE_VALUE}</b>
                      </div>
                    </div>
                    <div>
                      <img src={Pepole} alt="EXP" />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={5.6} m={1} className="courseCard">
                    <div>
                      <p className="courseDataText">{each?.AVG_EXPERIENCE}</p>
                      <div className="courseDataContainer">
                        <KeyboardDoubleArrowDownIcon
                          style={{ width: "18px" }}
                        />
                        <b>{each?.AVG_EXPERIENCE_VALUE}</b>
                      </div>
                    </div>
                    <div>
                      <img src={Doller} alt="EXP" />
                    </div>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12} md={5.6} m={1} className="courseCard">
                    <div>
                      <p className="courseDataText">{each?.STRENGTH}</p>
                      <div
                        className="courseDataContainer"
                        style={{
                          color: "#117B34FF",
                          background: " #EEFDF3FF",
                        }}
                      >
                        <KeyboardDoubleArrowUpIcon style={{ width: "18px" }} />
                        <b>{each?.STRENGTH_VALUE}</b>
                      </div>
                    </div>
                    <div>
                      <img src={Idcard} alt="EXP" />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={5.6} m={1} className="courseCard">
                    <div>
                      <p className="courseDataText">{each?.AVG_STRINGTH}</p>
                      <div className="courseDataContainer">
                        <KeyboardDoubleArrowDownIcon
                          style={{ width: "18px" }}
                        />
                        <b>{each?.AVG_STRINGTH_VALUE}</b>
                      </div>
                    </div>
                    <div>
                      <img src={Textcard} alt="EXP" />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <Grid container>
                  <Grid item xs={12} md={5.6} m={1} className="grapgcard">
                    <p className="courseDataText">{each?.EXPERIENCE}</p>
                    <div
                      style={{
                        height: "180px",
                        position: "relative",
                        bottom: "50px",
                      }}
                    >
                      <ReactECharts option={each?.EXPERIENCE_OPTIONS} />
                    </div>
                    <p
                      className="courseDataText"
                      style={{ textAlign: "center" }}
                    >
                      {each?.EXPERIENCE_VALUE} / {each?.AVG_EXPERIENCE_VALUE}
                    </p>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={5.6}
                    m={1}
                    className="grapgcard"
                    style={{
                      background: "#F2F4FDFF",
                    }}
                  >
                    <p className="courseDataText">{each?.STRENGTH}</p>
                    <div
                      style={{
                        height: "180px",
                        position: "relative",
                        bottom: "50px",
                      }}
                    >
                      <ReactECharts option={each?.STRENGTH_OPTIONS} />
                    </div>
                    <p
                      className="courseDataText"
                      style={{ textAlign: "center" }}
                    >
                      {each?.STRENGTH_VALUE} / {each?.AVG_STRINGTH_VALUE}
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </>
  );
}

export default CourseCard;
