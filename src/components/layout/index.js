/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
// import { useNavigate } from "react-router";

function Layout({ children }) {
  const React = document.React;
  const { useState, useEffect } = React.Imports(({ react }) => react);
  const { Box, Link, IconButton, Button } = React.Imports(
    ({ materialUI }) => materialUI
  );
  const { resume } = React.Imports(({ assets }) => assets);
  const {
    HomeOutlinedIcon,
    TravelExploreOutlinedIcon,
    AssignmentOutlinedIcon,
    ListAltOutlinedIcon,
    AccountCircleOutlinedIcon,
    MenuIcon,
    FileDownloadIcon,
    LinkedInIcon,
    InstagramIcon,
    // RedditIcon,
    GitHubIcon,
  } = React.Imports(({ icons }) => icons);
  const { IconLogo, MenuDrawer } = React.Imports(({ utils }) => utils);
  const { Nav_Info } = React.Imports(({ constants }) => constants);
  const {
    NAME,
    PORTFOLIO,
    LOGO_TYPE,
    HOME,
    EXPERIENCE,
    SKILLS,
    PROJECT,
    ABOUT,
    DOWNLOAD_BUTTON_TEXT,
    // FOOTER_CONTENT_INFO,
    // COPY_RIGHT,
    // TEARMS,
  } = Nav_Info();
  const [activeRoute, setActiveRoute] = useState("home");
  // const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  const onDownload = () => {
    let a = document.createElement("a");
    a.href = resume;
    a.download = "Phaneendra_Reddy_Goluguri_Resume";
    a.click();
  };

  useEffect(() => {
    const activeRouteName =
      window?.location?.pathname === "/"
        ? "home"
        : window?.location?.pathname === "/about"
        ? "about"
        : window?.location?.pathname === "/skills"
        ? "skills"
        : window?.location?.pathname === "/experience"
        ? "experience"
        : window?.location?.pathname === "/project"
        ? "project"
        : "home";
    setActiveRoute(activeRouteName);
  }, [window?.location?.pathname]);

  return (
    <div className="layout">
      <Box className="stickyheader">
        <span className="menuIconContainer">
          <span className="drawerIconButton">
            <IconButton onClick={handleOpen}>
              <MenuIcon />
            </IconButton>
          </span>
          <IconLogo type={LOGO_TYPE} name={NAME} tagName={PORTFOLIO} />
          <MenuDrawer open={open} handleClose={handleClose}>
            <Box className="sideDrawerListContainer">
              <Link href="/" underline="none" color="inherit">
                <div
                  className={
                    activeRoute === "home"
                      ? "sideDrawerMenuListContainerActive"
                      : ""
                  }
                >
                  <HomeOutlinedIcon
                    style={{ width: "22px", margin: "0px 10px" }}
                  />
                  {HOME}
                </div>
              </Link>
              <Link href="/experience" underline="none" color="inherit">
                <div
                  className={
                    activeRoute === "experience"
                      ? "sideDrawerMenuListContainerActive"
                      : ""
                  }
                >
                  <TravelExploreOutlinedIcon
                    style={{ width: "20px", margin: "0px 10px" }}
                  />
                  {EXPERIENCE}
                </div>
              </Link>
              <Link href="/skills" underline="none" color="inherit">
                <div
                  className={
                    activeRoute === "skills"
                      ? "sideDrawerMenuListContainerActive"
                      : ""
                  }
                >
                  <AssignmentOutlinedIcon
                    style={{ width: "20px", margin: "0px 10px" }}
                  />
                  {SKILLS}
                </div>
              </Link>
              <Link href="/project" underline="none" color="inherit">
                <div
                  className={
                    activeRoute === "project"
                      ? "sideDrawerMenuListContainerActive"
                      : ""
                  }
                >
                  <ListAltOutlinedIcon
                    style={{ width: "20px", margin: "0px 10px" }}
                  />
                  {PROJECT}
                </div>
              </Link>
              <Link href="/about" underline="none" color="inherit">
                <div
                  className={
                    activeRoute === "about"
                      ? "sideDrawerMenuListContainerActive"
                      : ""
                  }
                >
                  <AccountCircleOutlinedIcon
                    style={{ width: "20px", margin: "0px 10px" }}
                  />
                  {ABOUT}
                </div>
              </Link>
            </Box>
          </MenuDrawer>
        </span>

        <Box className="menuListContainer">
          <Link href="/" underline="none" color="inherit">
            <div
              className={
                activeRoute === "home" ? "menuListContainerActive" : ""
              }
            >
              <HomeOutlinedIcon style={{ width: "15px" }} />
              {HOME}
            </div>
          </Link>
          <Link href="/experience" underline="none" color="inherit">
            <div
              className={
                activeRoute === "experience" ? "menuListContainerActive" : ""
              }
            >
              <TravelExploreOutlinedIcon style={{ width: "15px" }} />
              {EXPERIENCE}
            </div>
          </Link>
          <Link href="/skills" underline="none" color="inherit">
            <div
              className={
                activeRoute === "skills" ? "menuListContainerActive" : ""
              }
            >
              <AssignmentOutlinedIcon style={{ width: "15px" }} />
              {SKILLS}
            </div>
          </Link>
          <Link href="/project" underline="none" color="inherit">
            <div
              className={
                activeRoute === "project" ? "menuListContainerActive" : ""
              }
            >
              <ListAltOutlinedIcon style={{ width: "15px" }} />
              {PROJECT}
            </div>
          </Link>
          <Link href="/about" underline="none" color="inherit">
            <div
              className={
                activeRoute === "about" ? "menuListContainerActive" : ""
              }
            >
              <AccountCircleOutlinedIcon style={{ width: "15px" }} />
              {ABOUT}
            </div>
          </Link>
        </Box>
        <span className="drawerIconButton">
          <Button id="downloadButton">
            <FileDownloadIcon style={{ width: "18px", marginTop: "4px" }} />
            {DOWNLOAD_BUTTON_TEXT}
          </Button>
        </span>
      </Box>

      <Box className="componentContainer">
        <div class="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {children}
      </Box>
      {/* <Box>
<footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="#">
      <LinkedInIcon className="footerIcon" />        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
      <InstagramIcon className="footerIcon" />
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
      <GitHubIcon className="footerIcon" />
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="#">About</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Team</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>

    </ul>
    <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
  </footer>
</Box> */}
      <Box className="footerContainer">
        <div class="header-reverse">
          <div>
            <svg
              class="waves"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shape-rendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g class="parallax">
                <use href="#gentle-wave" x="48" y="7" fill="#2b1cfc" />
              </g>
            </svg>
          </div>
        </div>
        <div className="footerItems">
          <div className="logodownloadContainer">
            <IconLogo type={LOGO_TYPE} name={NAME} tagName={PORTFOLIO} />

            <div className="optionaContent">
              <p
                style={{
                  maxWidth: "500px",
                  textAlign: "center",
                  fontWeight: "600px",
                }}
              >
                {"Get In Touch"}
              </p>
            </div>
          </div>

          <div className="footerActions">
            <Button
              id="footerDownloadButton"
              onClick={() => {
                onDownload();
              }}
            >
              <FileDownloadIcon style={{ width: "18px", marginTop: "4px" }} />
              {DOWNLOAD_BUTTON_TEXT}
            </Button>
          </div>
          <ul class="social-icon">
            <li class="social-icon__item">
              <a
                class="social-icon__link"
                href="www.linkedin.com/in/phaneendrareddy-goluguri-front-end-dev"
              >
                <LinkedInIcon className="footerIcon" />{" "}
              </a>
            </li>

            {/*  eslint-disable-next-line react-hooks/exhaustive-deps */}
            <li class="social-icon__item">
              <a class="social-icon__link" href="#">
                <InstagramIcon className="footerIcon" />
              </a>
            </li>
            <li class="social-icon__item">
              <a class="social-icon__link" href="#">
                <GitHubIcon className="footerIcon" />
              </a>
            </li>
            <li class="social-icon__item">
              <a class="social-icon__link" href="#">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
          <ul class="menu">
            <li class="menu__item">
              <a class="menu__link" href="/">
                Home
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="/about">
                About
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="/experience">
                experience
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="/skills">
                Skills
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="/project">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </Box>
    </div>
  );
}

export default Layout;
