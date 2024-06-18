// import React, { useState } from "react";

function ProjectMetaInfo() {
  const React = document.React;
  const { Box, Grid, Rating } = React.Imports(({ materialUI }) => materialUI);
  const { CheckCircleOutlineIcon } = React.Imports(({ icons }) => icons);
  const { ProjectsInfoData } = React.Imports(({ constants }) => constants);
  const { PROJECT_INFO_DATA } = ProjectsInfoData();
  return (
    <>
      {PROJECT_INFO_DATA?.map((each) => {
        return (
          <div>
            <Grid container xs={12} className="mainContainer">
              <Grid items xs={12} md={7}>
                <Box className={"projectTitleContanier"}>
                  <div>
                    <h2 className="projectText">{each.ProjectName}</h2>
                    <p className="roleText">{each.Role}</p>
                  </div>
                  <div>
                    <Rating
                      name="read-only"
                      precision={0.5}
                      value={4}
                      readOnly
                    />
                  </div>
                </Box>

                <Box className="listContainer">
                  <div className="listItemContainer">
                    <CheckCircleOutlineIcon id="listIcons" />
                    <p>{each.RolesAndResponsiblities.pointOne}</p>
                  </div>
                  <div className="listItemContainer">
                    <CheckCircleOutlineIcon id="listIcons" />
                    <p>{each.RolesAndResponsiblities.pointTwo}</p>
                  </div>
                  <div className="listItemContainer">
                    <CheckCircleOutlineIcon id="listIcons" />
                    <p>{each.RolesAndResponsiblities.pointThree}</p>
                  </div>
                  <div className="listItemContainer">
                    <CheckCircleOutlineIcon id="listIcons" />
                    <p>{each.RolesAndResponsiblities.pointFour}</p>
                  </div>
                </Box>
              </Grid>
              {each.ImageStatus === "notOwned" ? null : (
                <Grid items xs={12} md={5}>
                  <Box className="projectImage">
                    <img src={each.Image} alt="p" />
                    {/* <div className="fallbackImageContainer">
                <p>Project Name</p>
              </div> */}
                  </Box>
                </Grid>
              )}
            </Grid>
            <Grid container xs={12}>
              <div style={{ width: "100%", margin: "5px 8px" }}>
                <div className="aboutContainerHeader">
                  <div className="about">{"ABOUT"}</div>
                </div>
                <div className="aboutInfo">
                  <br />
                  {each.About}
                </div>
              </div>
            </Grid>
          </div>
        );
      })}
    </>
  );
}

export default ProjectMetaInfo;
