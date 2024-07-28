function CourseCard() {
  const React = document.React;
  const { Grid } = React.Imports(({ materialUI }) => materialUI);

  return (
    <>
      <Grid items xs={12} md={6} className="skillsContainerRight">
        <div style={{ textAlign: "center" }}>
          {[
            { skill: "Html" },
            { skill: "Css" },
            { skill: "Bootstrap" },
            { skill: "JavaScript" },
            { skill: "React" },
            { skill: "Redux-Toolkit" },
            { skill: "Advanced Javascript" },
            { skill: "Asynchronus Javascript" },
            { skill: "Material-UI" },
            { skill: "Git" },
            { skill: "Github" },
            { skill: "Formik" },
            { skill: "Yup" },
            { skill: "Axios" },
          ]?.map((each, index) => {
            return (
              <div className="skillsCardContainer">
                <p>{each.skill}</p>
              </div>
            );
          })}
        </div>
      </Grid>
    </>
  );
}

export default CourseCard;
