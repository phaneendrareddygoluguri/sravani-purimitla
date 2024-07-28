function AboutHeader() {
  const React = document.React;
  const { Box, Grid } = React.Imports(({ materialUI }) => materialUI);
  // const { AboutBulb, AboutGirl } = React.Imports(({ assets }) => assets);
  return (
    <>
      <Grid className="container-about">
        <Box className="card-headings">
          <h5>Sravani Purimitla</h5>
          <p>
            Passionate Frontend Developer 🧑‍💻| React.js 💻 | JavaScript 🌐| Redux-Toolkit
            🔄| HTML 📄| CSS 🎨 | Bootstrap 🅱️ | Material-UI 🧱| Formik 📝| Yup
            ✅ | Axios 🌐 | Git & GitHub Enthusiast 🐙🔗
          </p>
        </Box>
      </Grid>
    </>
  );
}

export default AboutHeader;
