import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function HomeIndex() {
  const { Grid, Card, CardContent, CardMedia } = React.Imports(
    ({ materialUI }) => materialUI
  );
  const [quote, setQuote] = useState();
  function getRandomNumber(min, max) {
    const randomDecimal = Math.random();
    const randomInRange = randomDecimal * (max - min + 1) + min;
    const randomInteger = Math.floor(randomInRange);
    return randomInteger;
  }

  useEffect(() => {
    axios.get("https://api.quotable.io/quotes?tags=technology").then((res) => {
      const randomNumber = getRandomNumber(0, res?.data?.count);
      setQuote(res?.data?.results[randomNumber]?.content);
    });
  }, []);
  const { Image8, yumyard, Sravani, passportpic } = React.Imports(
    ({ assets }) => assets
  );

  const cardsData = [
    {
      image: yumyard,
      title: "YumYard",
      content:
        "YumYard is a dynamic and user-friendly food discovery and delivery platform developed using React. The application connects users with local restaurants and food outlets, offering a seamless experience for exploring diverse cuisines and ordering meals online.",
      date: "June 13, 2024",
      readTime: "5 min read",
    },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="main">
      <Grid container>
        <Grid container>
          <Grid item xs={12} md={6} className={"homeMainContainer"}>
            <h3>Hello,I'm Sravani Purimitla And I'm a Front-End Developer </h3>
            <p>
              {`An Aspiring Front-End Developer passionate about crafting seamless web experiences. Equipped with skills in HTML, CSS, and JavaScript, I specialize in creating dynamic and user-friendly interfaces using modern technologies like ReactJS, Bootstrap, and Material UI. With expertise in advanced JavaScript, Redux Toolkit, Formik, Yup, and Axios, I build applications that are both functional and visually appealing. My strong foundation in responsive design ensures adaptability across all devices, while my commitment to writing clean, efficient code makes for scalable solutions. Proficient in Git and GitHub, I thrive in collaborative environments and am eager to contribute to a dynamic team, transforming ideas into impactful digital experiences.`}
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className={"homeMainProfileContainer"}
            pl={4}
          >
            <div className="profileImageContainer">
              {/* <img
                src={Image6}
                alt="projects"
                className="ProjectsStamp"
                onClick={() => {
                  navigate("/project");
                }}
              /> */}
              <img src={Sravani} alt="Profile" className="profileImage" />
            </div>
          </Grid>
          <button
            className="getStartedButton"
            onClick={() => {
              navigate("/about");
            }}
          >
            Know Me
          </button>
        </Grid>
        <Grid container className="getInTouchContainer">
          <h2 className="action-head">Call to Action</h2>

          <p className="action-para">
            Developed a highly configurable user interface (UI) within these
            modules, allowing users to dynamically create windows with
            customizable fields, validation rules, and various field types,
            including file uploading functionality and more.
          </p>

          <button
            aria-describedby={id}
            variant="contained"
            style={{ border: " 0px solid black" }}
            onClick={handleClick}
          >
            <a
              className="actionButton"
              href="mailto:sravani235p@gmail.com"
              style={{ "text-decoration": "none" }}
            >
              Get in Touch
            </a>
          </button>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6} className="aboutUSContainer">
            <div className="aboutContent">
              <h3>About</h3>
              <img src={Image8} width={"80%"} alt="img" className="about-img" />
            </div>
            <div>
              <h1>{`🌟 Aspiring Front-End Developer | Crafting Seamless Web Experiences 🌟`}</h1>
              <p>
                Hello! I'm <b>Sravani Purimitla</b>, a passionate front-end
                developer with a knack for creating dynamic and user-friendly
                web interfaces. Armed with a robust toolkit that includes HTML,
                CSS, JavaScript, and a suite of modern technologies, I am ready
                to dive into the exciting world of web development.
              </p>
              <h2>{`🔧 Skills & Tools:`}</h2>
              <p>
                <b>Core Technologies: </b>HTML, CSS, JavaScript
              </p>
              <p>
                <b>Frameworks & Libraries:</b> ReactJS, Bootstrap, Material UI
              </p>
              <p>
                <b>State Management & APIs:</b> Redux Toolkit, Axios
              </p>
              <p>
                <b>Form Handling:</b> Formik, Yup
              </p>
              <p>
                <b>Version Control:</b> Git & GitHub
              </p>

              <p>
                With a strong foundation in advanced JavaScript and a keen eye
                for design, I build applications that are not only functional
                but also visually appealing. I thrive on the challenge of
                transforming complex problems into simple, elegant solutions and
                am constantly exploring new ways to enhance user experiences.
              </p>

              <h2>{`🌱 What I Bring:`}</h2>
              <p>
                <b>Responsive Design:</b>Building adaptable interfaces for all
                devices
              </p>
              <p>
                <b>Interactive Features:</b> Utilizing ReactJS to create
                engaging components
              </p>
              <p>
                <b>Code Efficiency:</b> Writing clean, maintainable, and
                scalable code
              </p>
              <p>
                <b>Collaboration:</b>Experience with Git and GitHub for
                effective teamwork
              </p>
              <p>
                I am eager to contribute my skills and grow within a dynamic
                team, creating impactful digital experiences that resonate with
                users. Let's connect and turn ideas into reality!
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="aboutImageContainer" pl={4}>
            <div className="aboutImageContent">
              <img src={passportpic} alt="Image9" className="aboutUSImage" />
            </div>
          </Grid>
          {/* <Grid item xs={12} md={6} className="aboutImageContainer" pl={4}>
            <button
              className="learnButton"
              onClick={() => {
                navigate("/experience");
              }}
            >
              Learn More
            </button>
          </Grid> */}
        </Grid>
        <Grid container className="projetContainer">
          <h2>Projects</h2>
          <div className="cardContainer">
            {cardsData.map((card, index) => (
              <Card className="card">
                <CardMedia
                  component="img"
                  height="250"
                  image={card.image}
                  alt="Card Image"
                />
                <CardContent>
                  <p className="title">{card.title}</p>
                  <p className="content">{card.content}</p>
                  <span className="date">{card.date}</span>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="gotoProjectsContainer">
            <button
              className="gotoProjects"
              onClick={() => {
                navigate("/project");
              }}
            >
              Go to Projects
            </button>
          </div>
        </Grid>
        <Grid container className="testimonals">
          <p>
            {quote && quote?.length > 0
              ? quote
              : "First, solve the problem. Then write the code💡🤌🧠 "}
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeIndex;
