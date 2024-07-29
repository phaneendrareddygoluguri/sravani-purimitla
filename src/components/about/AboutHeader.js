import { Avatar, Chip } from "@mui/material";

function AboutHeader() {
  const React = document.React;
  const { Box, Grid } = React.Imports(({ materialUI }) => materialUI);

  const skills = [
    { text: "React.js", emoji: "💻" },
    { text: "JavaScript", emoji: "🌐" },
    { text: "Redux-Toolkit", emoji: "🔄" },
    { text: "HTML", emoji: "📄" },
    { text: "CSS", emoji: "🎨" },
    { text: "Bootstrap", emoji: "🅱️" },
    { text: "Material-UI", emoji: "🧱" },
    { text: "React-Router", emoji: "🔃" },
    { text: "Git & GitHub Enthusiast", emoji: "🔗" },
    { text: "Axios", emoji: "🌐" },
  ];

  return (
    <Grid className="container-about">
      <Box className="card-headings">
        <h5>Sravani Purimitla</h5>
        <p>
          {skills?.map((skill, index) => (
            <>
              <Chip
                avatar={<Avatar>{skill?.emoji}</Avatar>}
                label={skill?.text}
                style={{ margin: "1px" }}
              />
              {index < skills.length - 1 && " | "}
            </>
          ))}
        </p>
      </Box>
    </Grid>
  );
}

export default AboutHeader;
