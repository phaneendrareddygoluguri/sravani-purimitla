import { Avatar, Chip } from "@mui/material";

function AboutHeader() {
  const React = document.React;
  const { Box, Grid } = React.Imports(({ materialUI }) => materialUI);
  // const { AboutBulb, AboutGirl } = React.Imports(({ assets }) => assets);

  const skills = [
    { text: "Passionate Frontend Developer", emoji: "🧑‍💻" },
    { text: "React.js", emoji: "💻" },
    { text: "JavaScript", emoji: "🌐" },
    { text: "Redux-Toolkit", emoji: "🔄" },
    { text: "HTML", emoji: "📄" },
    { text: "CSS", emoji: "🎨" },
    { text: "Bootstrap", emoji: "🅱️" },
    { text: "Material-UI", emoji: "🧱" },
    { text: "Formik", emoji: "📝" },
    { text: "Yup", emoji: "✅" },
    { text: "Git & GitHub Enthusiast", emoji: "🔗" },
    { text: "Axios", emoji: "🌐" },
  ];

  return (
    <Grid className="container-about">
      <Box className="card-headings">
        <h5>Sravani Purimitla</h5>
        <p>
          {skills.map((skill, index) => (
            <>
              <Chip
                avatar={<Avatar>{skill.emoji}</Avatar>}
                label={skill.text}
                style={{ margin: "2px" }}
              />
              {index < skills.length - 1 && " | "}
            </>
            // <span
            //   key={index}
            //   style={{
            //     marginBottom: "25px",
            //     marginTop: "25px",
            //   }}
            // >
            //   <span>
            //     {skill.text} {skill.emoji} {index < skills.length - 1 && " | "}
            //   </span>
            // </span>
          ))}
        </p>
      </Box>
    </Grid>
  );
}

export default AboutHeader;
