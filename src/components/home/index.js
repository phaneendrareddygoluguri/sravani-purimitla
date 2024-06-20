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
  const {
    Image8,
    projectImg1,
    Sravani,
    jsicon,
    reactlogo,
    htmlicon,
    muiicon,
    giticon,
    githubicon,
    formikicon,
    yupicon,
    reduxtoolkit,
    typescripticon,
    cssicon,
    axiosicon,
  } = React.Imports(({ assets }) => assets);
  const { yearsAndMonthsCompleted, ReUsableCard } = React.Imports(
    ({ utils }) => utils
  );
  // const {
  //   SignalWifi0BarIcon,
  //   ShareOutlinedIcon,
  //   FastForwardOutlinedIcon,
  //   CloseIcon,
  // } = React.Imports(({ icons }) => icons);
  const { ReactECharts } = React.Imports(({ ECharts }) => ECharts);
  const { DonutOptions } = React.Imports(({ constants }) => constants);
  const { DONUT_OPTIONS } = DonutOptions();
  const cardsData = [
    {
      image: projectImg1,
      title: "PDS Galaxy",
      content: "PDS Galaxy provides  services for the Health sector",
      date: "Dec 23, 2021",
      readTime: "5 min read",
    },
    {
      image: projectImg1,
      title: "NCUK-The University Consortium ",
      content: "NCUK is unique in UK higher education. ",
      date: "Dec 23, 2021",
      readTime: "3 min read",
    },
    {
      image: projectImg1,
      title: "SIC",
      content: "PDS-SIC is an Integrated Web solution for Secure Email",
      date: "Dec 23, 2021",
      readTime: "5 min read",
    },
    // Add more card data as needed
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const skills = [
    {
      language: "HTML",
      // experience: yearsAndMonthsCompleted(),
      icon: htmlicon,
    },
    {
      language: "CSS",
      // experience: yearsAndMonthsCompleted(),
      icon: cssicon,
    },
    {
      language: "JavaScript",
      // experience: yearsAndMonthsCompleted(),
      icon: jsicon,
    },

    {
      language: "ReactJS",
      // experience: yearsAndMonthsCompleted(),
      icon: reactlogo,
    },

    {
      language: "Redux Toolkit",
      // experience: yearsAndMonthsCompleted(),
      icon: reduxtoolkit,
    },
    {
      language: "Git",
      // experience: yearsAndMonthsCompleted(),
      icon: giticon,
    },
    {
      language: "GitHub",
      // experience: yearsAndMonthsCompleted(),
      icon: githubicon,
    },
    {
      language: "TypeScript",
      // experience: yearsAndMonthsCompleted(),
      icon: typescripticon,
    },
    {
      language: "Material-UI",
      // experience: yearsAndMonthsCompleted(),
      icon: muiicon,
    },
    {
      language: "Formik",
      // experience: yearsAndMonthsCompleted(),
      icon: formikicon,
    },
    {
      language: "Yup",
      // experience: yearsAndMonthsCompleted(),
      icon: yupicon,
    },
    {
      language: "Axios",
      // experience: yearsAndMonthsCompleted(),
      icon: axiosicon,
    },
    // {
    //   language: "BitBucket",
    //    experience: yearsAndMonthsCompleted(),
    //   icon: bitbucketicon,
    // },

    // {
    //   language: "Node.JS",
    //   experience: "0.6YR",
    //   icon: nodejsicon,
    // },
  ];
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="main">
      <Grid container>
        <Grid container>
          <Grid item xs={12} md={6} className={"homeMainContainer"}>
            <h3>
              Hello,I'm Sravani Purimitla And I'm a Front-End Developer{" "}
            </h3>
            <p>
              {` I'm a Front-End Developer. Expertise is to create and web design,Frontend design and
              many more....`}
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
              href="mailto:phaneendrareddygoluguri@gmail.com"
            >
              Get in Touch
            </a>
          </button>
          {/* <div>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 0,
                      marginLeft: 32,
                      zIndex: 1,
                    }}
                    onClick={handleClose}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography
                    sx={{ p: 2, fontWeight: 600, fontSize: "0.9rem" }}
                  >
                    Get in touch
                  </Typography>
                  <div>
                    <Typography
                      sx={{ display: "flex", alignItems: "center", p: 2 }}
                    >
                      <EmailIcon color="primary" sx={{ marginRight: 1 }} />
                      <span className="popText">Mail</span>
                    </Typography>
                    <Typography
                      sx={{ display: "flex", alignItems: "center", p: 2 }}
                    >
                      <WhatsAppIcon color="success" sx={{ marginRight: 1 }} />
                      <span className="popText">Whatsapp</span>
                    </Typography>
                  </div>
                </Popover>
              </div> */}
          {/* </div> */}
          {/* </div> */}
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6} className="aboutUSContainer">
            <div className="aboutContent">
              <h3>About</h3>
              <img src={Image8} width={"80%"} alt="img" className="about-img" />
            </div>
            <p>
              {`•${yearsAndMonthsCompleted()} of work experience as a React JS (JavaScript library) Web Developer. • Developed reusable
              components using the React JS library for the user interface. •
              Exposed to working with the latest react hooks functional
              programming. • Strong hands-on experience with Forms, and data
              tables. • Experience with Formik, Yup, Material UI. • Integrated
              Redux store management to drill down API response throughout all
              the reusable components. • Worked with the promise-based HTTP
              client Axios and Fetch to interface the resources from API
              (Application Programming Interface). • Involved in requirement
              analysis, design and development. • Experience in using GIT for
              code repository and as version control mechanism. • Ability to be
              creative and take self-initiatives to manage multiple projects in
              parallel during critical situations. . Ability to work
              independently and with a team.............`}
            </p>
            <button
              className="learnButton"
              onClick={() => {
                navigate("/experience");
              }}
            >
              Learn More
            </button>
          </Grid>
          <Grid item xs={12} md={6} className="aboutImageContainer" pl={4}>
            {/* <div className="about-us">
              <div className="about-container">
                <div className="connection">
                  <h5 className="connect-head">Eiusmod comm</h5>
                  <div className="icons-names">
                    <ul>
                      <li style={{ background: "#7930d833" }}>
                        <SignalWifi0BarIcon className="li-icons" />
                        Connection
                      </li>
                      <li style={{ background: "rgb(32 151 225 / 20%)" }}>
                        <ShareOutlinedIcon className="li-icons" />
                        Share
                      </li>
                      <li style={{ background: "rgb(201 150 12 / 14%)" }}>
                        <FastForwardOutlinedIcon className="li-icons" />
                        instantiate
                      </li>
                    </ul>{" "}
                  </div>
                </div>
                <img src={Image9} alt="Image9" className="img9" />
              </div>
            </div> */}
            <div className="aboutImageContent">
              <img src={Sravani} alt="Image9" className="aboutUSImage" />
              {/* <img src={Image6} alt="projects" className="ProjectsStamp" /> */}
              {/* <img src={Image4} alt="girlImage" className="profileImage" /> */}
            </div>
          </Grid>
        </Grid>
        <Grid container className="skillsContainer">
          <h1>Skills</h1>
          <Grid item xs={3}></Grid>
          <Grid item xs={4}>
            <ReactECharts option={DONUT_OPTIONS} />
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item className="donut-names">
            {skills?.map((each) => {
              return (
                <ReUsableCard
                  profile={each?.icon}
                  course={each?.language}
                  experience={each?.experience}
                />
              );
            })}
          </Grid>
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
