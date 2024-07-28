/* eslint-disable no-dupe-keys */
import React from "react";

export const constants = {
  homePage: {
    name: "natasha-IE-R-45",
    designation: "AI-Model Developer",
  },
  EV_Info: () => {
    return {
      education: {
        data: [
          {
            name: "integrated clg of BSC",
            year: "2014-2016",
            location: "Hyd",
            cgpa: "78.5",
          },
        ],
      },
    };
  },

  Nav_Info: () => {
    return {
      NAME: "Sravani Purimitla",
      PORTFOLIO: "Portfolio",
      LOGO_TYPE: "LogoB",
      HOME: "Home",
      EXPERIENCE: "Experience",
      SKILLS: "Skills",
      PROJECT: "Project",
      ABOUT: "About",
      DOWNLOAD_BUTTON_TEXT: "Resume",
      FOOTER_CONTENT_INFO: `Now is the time to make this CSS footer design fully responsive.
      Here I have used media to make it responsive. We just need to
change some basics to make Footer Design responsive. First I gave`,
      COPY_RIGHT: "copyRight@Sravani-Purimitla- 2023",
      TEARMS: "Privacy - Terms - Conditions",
    };
  },

  SkillsInfo: () => {
    const { yearsAndMonthsCompleted } = React.Imports(({ utils }) => utils);
    return {
      HEADER: "overview",
      ABOUT: "about",
      OPEN_TO_WORK: "Open To Work",
      ABOUT_INFO: `•I'm a React JS (JavaScript library) Web Developer. 
      •	Developed reusable components using the React JS library for the user interface.
      •	Exposed to working with the latest react hooks functional programming.
      •	Strong hands-on experience with Forms, and data tables.
      •	Integrated Redux store management to drill down API response throughout all the reusable components.
      •	Experience with Formik, Yup, Material UI.
      •	Worked with the promise-based HTTP client Axios and Fetch to interface the resources from API (Application Programming Interface).
      •	Involved in requirement analysis, design and development.
      •	Experience in using GIT for code repository and as version control mechanism.
      •	Ability to be creative and take self-initiatives to manage multiple projects in parallel during critical situations.
      .   Ability to work independently and with a team.       
      `,
      LANGUAGES_INFO: [
        {
          LANGUAGE: "Java Script",
          STAR_RATING: 3,
          EXPERIENCE: "experience",
          AVG_EXPERIENCE: "avg experience",
          EXPERIENCE_VALUE: "2.3 Yr",
          AVG_EXPERIENCE_VALUE: "2 Yr",
          STRENGTH: "strength",
          AVG_STRINGTH: "avg strength",
          STRENGTH_VALUE: "87 %",
          AVG_STRINGTH_VALUE: "76 %",
          EXPERIENCE_OPTIONS: {
            tooltip: {
              show: false,
            },
            legend: {
              top: "25%",
              left: "center",
              // doesn't perfectly work with our tricks, disable it
              selectedMode: false,
            },
            series: [
              {
                name: "java script",
                type: "pie",
                radius: ["45%", "60%"],
                center: ["50%", "70%"],
                // adjust the start angle
                startAngle: 180,
                label: {
                  show: false,
                  formatter(param) {
                    // correct the percentage
                    return param.name + " (" + param.percent * 2 + "%)";
                  },
                },
                data: [
                  { value: 80, name: "Exp" },
                  { value: 20, name: "Avg Exp" },
                  {
                    // make an record to fill the bottom 50%
                    value: 100,
                    itemStyle: {
                      // stop the chart from rendering this piece
                      color: "none",
                      decal: {
                        symbol: "none",
                      },
                    },
                    label: {
                      show: false,
                    },
                  },
                ],
                color: ["#a21cfc", "#a21cfc50"],
              },
            ],
          },
          STRENGTH_OPTIONS: {
            tooltip: {
              show: false,
            },
            legend: {
              top: "25%",
              left: "center",
              // doesn't perfectly work with our tricks, disable it
              selectedMode: false,
            },
            series: [
              {
                name: "java script",
                type: "pie",
                radius: ["45%", "60%"],
                center: ["50%", "70%"],
                // adjust the start angle
                startAngle: 180,
                label: {
                  show: false,
                  formatter(param) {
                    // correct the percentage
                    return param.name + " (" + param.percent * 2 + "%)";
                  },
                },
                data: [
                  { value: 75, name: "Strn" },
                  { value: 25, name: "Avg Strn" },
                  {
                    // make an record to fill the bottom 50%
                    value: 100,
                    itemStyle: {
                      // stop the chart from rendering this piece
                      color: "none",
                      decal: {
                        symbol: "none",
                      },
                    },
                    label: {
                      show: false,
                    },
                  },
                ],
                color: ["#2b1cfc", "#2b1cfc50"],
              },
            ],
          },
        },
        {
          LANGUAGE: "React",
          STAR_RATING: 4.5,
          EXPERIENCE: "experience",
          AVG_EXPERIENCE: "avg experience",
          EXPERIENCE_VALUE: "2.3 Yr",
          AVG_EXPERIENCE_VALUE: "2.3 Yr",
          STRENGTH: "strength",
          AVG_STRINGTH: "avg strength",
          STRENGTH_VALUE: "90% %",
          AVG_STRINGTH_VALUE: "90% %",
          EXPERIENCE_OPTIONS: {
            tooltip: {
              show: false,
            },
            legend: {
              top: "25%",
              left: "center",
              // doesn't perfectly work with our tricks, disable it
              selectedMode: false,
            },
            series: [
              {
                name: "React",
                type: "pie",
                radius: ["45%", "60%"],
                center: ["50%", "70%"],
                // adjust the start angle
                startAngle: 180,
                label: {
                  show: false,
                  formatter(param) {
                    // correct the percentage
                    return param.name + " (" + param.percent * 2 + "%)";
                  },
                },
                data: [
                  { value: 80, name: "Exp" },
                  { value: 20, name: "Avg Exp" },
                  {
                    // make an record to fill the bottom 50%
                    value: 100,
                    itemStyle: {
                      // stop the chart from rendering this piece
                      color: "none",
                      decal: {
                        symbol: "none",
                      },
                    },
                    label: {
                      show: false,
                    },
                  },
                ],
                color: ["#a21cfc", "#a21cfc50"],
              },
            ],
          },
          STRENGTH_OPTIONS: {
            tooltip: {
              show: false,
            },
            legend: {
              top: "25%",
              left: "center",
              // doesn't perfectly work with our tricks, disable it
              selectedMode: false,
            },
            series: [
              {
                name: "React",
                type: "pie",
                radius: ["45%", "60%"],
                center: ["50%", "70%"],
                // adjust the start angle
                startAngle: 180,
                label: {
                  show: false,
                  formatter(param) {
                    // correct the percentage
                    return param.name + " (" + param.percent * 2 + "%)";
                  },
                },
                data: [
                  { value: 75, name: "Strn" },
                  { value: 25, name: "Avg Strn" },
                  {
                    // make an record to fill the bottom 50%
                    value: 100,
                    itemStyle: {
                      // stop the chart from rendering this piece
                      color: "none",
                      decal: {
                        symbol: "none",
                      },
                    },
                    label: {
                      show: false,
                    },
                  },
                ],
                color: ["#2b1cfc", "#2b1cfc50"],
              },
            ],
          },
        },
        {
          LANGUAGE: "CSS",
          STAR_RATING: 4.5,
          EXPERIENCE: "experience",
          AVG_EXPERIENCE: "avg experience",
          EXPERIENCE_VALUE: "2.5 Yr",
          AVG_EXPERIENCE_VALUE: "2.5Yr",
          STRENGTH: "strength",
          AVG_STRINGTH: "avg strength",
          STRENGTH_VALUE: "90 %",
          AVG_STRINGTH_VALUE: "85 %",
          EXPERIENCE_OPTIONS: {
            tooltip: {
              show: false,
            },
            legend: {
              top: "25%",
              left: "center",
              // doesn't perfectly work with our tricks, disable it
              selectedMode: false,
            },
            series: [
              {
                name: "CSS",
                type: "pie",
                radius: ["45%", "60%"],
                center: ["50%", "70%"],
                // adjust the start angle
                startAngle: 180,
                label: {
                  show: false,
                  formatter(param) {
                    // correct the percentage
                    return param.name + " (" + param.percent * 2 + "%)";
                  },
                },
                data: [
                  { value: 80, name: "Exp" },
                  { value: 20, name: "Avg Exp" },
                  {
                    // make an record to fill the bottom 50%
                    value: 100,
                    itemStyle: {
                      // stop the chart from rendering this piece
                      color: "none",
                      decal: {
                        symbol: "none",
                      },
                    },
                    label: {
                      show: false,
                    },
                  },
                ],
                color: ["#a21cfc", "#a21cfc50"],
              },
            ],
          },
          STRENGTH_OPTIONS: {
            tooltip: {
              show: false,
            },
            legend: {
              top: "25%",
              left: "center",
              // doesn't perfectly work with our tricks, disable it
              selectedMode: false,
            },
            series: [
              {
                name: "CSS",
                type: "pie",
                radius: ["45%", "60%"],
                center: ["50%", "70%"],
                // adjust the start angle
                startAngle: 180,
                label: {
                  show: false,
                  formatter(param) {
                    // correct the percentage
                    return param.name + " (" + param.percent * 2 + "%)";
                  },
                },
                data: [
                  { value: 75, name: "Strn" },
                  { value: 25, name: "Avg Strn" },
                  {
                    // make an record to fill the bottom 50%
                    value: 100,
                    itemStyle: {
                      // stop the chart from rendering this piece
                      color: "none",
                      decal: {
                        symbol: "none",
                      },
                    },
                    label: {
                      show: false,
                    },
                  },
                ],
                color: ["#2b1cfc", "#2b1cfc50"],
              },
            ],
          },
        },
        {
          LANGUAGE: "HTML",
          STAR_RATING: 3.5,
          EXPERIENCE: "experience",
          AVG_EXPERIENCE: "avg experience",
          EXPERIENCE_VALUE: "2.5 Yr",
          AVG_EXPERIENCE_VALUE: "2.5 Yr",
          STRENGTH: "strength",
          AVG_STRINGTH: "avg strength",
          STRENGTH_VALUE: "90 %",
          AVG_STRINGTH_VALUE: "85 %",
          EXPERIENCE_OPTIONS: {
            tooltip: {
              show: false,
            },
            legend: {
              top: "25%",
              left: "center",
              // doesn't perfectly work with our tricks, disable it
              selectedMode: false,
            },
            series: [
              {
                name: "HTML",
                type: "pie",
                radius: ["45%", "60%"],
                center: ["50%", "70%"],
                // adjust the start angle
                startAngle: 180,
                label: {
                  show: false,
                  formatter(param) {
                    // correct the percentage
                    return param.name + " (" + param.percent * 2 + "%)";
                  },
                },
                data: [
                  { value: 80, name: "Exp" },
                  { value: 20, name: "Avg Exp" },
                  {
                    // make an record to fill the bottom 50%
                    value: 100,
                    itemStyle: {
                      // stop the chart from rendering this piece
                      color: "none",
                      decal: {
                        symbol: "none",
                      },
                    },
                    label: {
                      show: false,
                    },
                  },
                ],
                color: ["#a21cfc", "#a21cfc50"],
              },
            ],
          },
          STRENGTH_OPTIONS: {
            tooltip: {
              show: false,
            },
            legend: {
              top: "25%",
              left: "center",
              // doesn't perfectly work with our tricks, disable it
              selectedMode: false,
            },
            series: [
              {
                name: "HTML",
                type: "pie",
                radius: ["45%", "60%"],
                center: ["50%", "70%"],
                // adjust the start angle
                startAngle: 180,
                label: {
                  show: false,
                  formatter(param) {
                    // correct the percentage
                    return param.name + " (" + param.percent * 2 + "%)";
                  },
                },
                data: [
                  { value: 75, name: "Strn" },
                  { value: 25, name: "Avg Strn" },
                  {
                    // make an record to fill the bottom 50%
                    value: 100,
                    itemStyle: {
                      // stop the chart from rendering this piece
                      color: "none",
                      decal: {
                        symbol: "none",
                      },
                    },
                    label: {
                      show: false,
                    },
                  },
                ],
                color: ["#2b1cfc", "#2b1cfc50"],
              },
            ],
          },
        },
        {
          LANGUAGE: "Redux And ReduxToolkit",
          STAR_RATING: 3.5,
          EXPERIENCE: "experience",
          AVG_EXPERIENCE: "avg experience",
          EXPERIENCE_VALUE: "2 Yr",
          AVG_EXPERIENCE_VALUE: "1.8 Yr",
          STRENGTH: "strength",
          AVG_STRINGTH: "avg strength",
          STRENGTH_VALUE: "87 %",
          AVG_STRINGTH_VALUE: "76 %",
          EXPERIENCE_OPTIONS: {
            tooltip: {
              show: false,
            },
            legend: {
              top: "25%",
              left: "center",
              // doesn't perfectly work with our tricks, disable it
              selectedMode: false,
            },
            series: [
              {
                name: "Redux And ReduxToolkit",
                type: "pie",
                radius: ["45%", "60%"],
                center: ["50%", "70%"],
                // adjust the start angle
                startAngle: 180,
                label: {
                  show: false,
                  formatter(param) {
                    // correct the percentage
                    return param.name + " (" + param.percent * 2 + "%)";
                  },
                },
                data: [
                  { value: 80, name: "Exp" },
                  { value: 20, name: "Avg Exp" },
                  {
                    // make an record to fill the bottom 50%
                    value: 100,
                    itemStyle: {
                      // stop the chart from rendering this piece
                      color: "none",
                      decal: {
                        symbol: "none",
                      },
                    },
                    label: {
                      show: false,
                    },
                  },
                ],
                color: ["#a21cfc", "#a21cfc50"],
              },
            ],
          },
          STRENGTH_OPTIONS: {
            tooltip: {
              show: false,
            },
            legend: {
              top: "25%",
              left: "center",
              // doesn't perfectly work with our tricks, disable it
              selectedMode: false,
            },
            series: [
              {
                name: "Redux And ReduxToolkit",
                type: "pie",
                radius: ["45%", "60%"],
                center: ["50%", "70%"],
                // adjust the start angle
                startAngle: 180,
                label: {
                  show: false,
                  formatter(param) {
                    // correct the percentage
                    return param.name + " (" + param.percent * 2 + "%)";
                  },
                },
                data: [
                  { value: 75, name: "Strn" },
                  { value: 25, name: "Avg Strn" },
                  {
                    // make an record to fill the bottom 50%
                    value: 100,
                    itemStyle: {
                      // stop the chart from rendering this piece
                      color: "none",
                      decal: {
                        symbol: "none",
                      },
                    },
                    label: {
                      show: false,
                    },
                  },
                ],
                color: ["#2b1cfc", "#2b1cfc50"],
              },
            ],
          },
        },
      ],
    };
  },
  WhyChoosingMeReasons: () => {
    return {
      REASONS: [
        "strong Knowledge in React and Javascript.",
        "Problem-Solving Skills.",
        "Continuous Learning.",
        "UI/UX Design Skills.",
        "Project Management",
      ],
    };
  },
  Description: () => {
    const { yearsAndMonthsCompleted } = React.Imports(({ utils }) => utils);
    return {
      DESCRIPTION: [
        `${yearsAndMonthsCompleted()} of work experience as a React JS (JavaScript library) Web Developer ,Developed reusable components using the React JS library for the user interface.	Exposed to working with the latest react hooks functional programming.	Strong hands-on experience with Forms, and data tables.Integrated Redux store management to drill down API response throughout all the reusable components.Experience with Formik, Yup, Material UI.	Worked with the promise-based HTTP client Axios and Fetch to interface the resources from API (Application Programming Interface).	Involved in requirement analysis, design and development.	Experience in using GIT for code repository and as version control mechanism.	Ability to be creative and take self-initiatives to manage multiple projects in parallel during critical situations.  Ability to work independently and with a team.`,
      ],
    };
  },
  RoleDescription: () => {
    return {
      ROLEDESCRIPTION: [
        "I'm looking for Experienced and results-driven professional seeking new opportunities to contribute skills and expertise in a dynamic work environment. With a solid background in Your Industry/Area of Expertise, I am eager to bring my talents to a forward-thinking organization where innovation and collaboration are valued.",
      ],
    };
  },
  RolesAndResposibilities: () => {
    return {
      ROLESANDRESPONSIBILITIES: [
        {
          responsiblities:
            "Developed a web application featuring modules such as Data Repository, Role Management, User Management, Core Windows, and Custom Windows.",
        },
        {
          responsiblities:
            "Integrated REST APIs based on business requirements, utilizing Redux Toolkit and context for maintaining the global state of the application. ",
        },
        {
          responsiblities:
            "Incorporated user-defined forms using reusable React components. • Implemented a dynamic form allowing users to specify form fields and validations, including data type, min and max length, and email validations. ",
        },
        {
          responsiblities:
            "Integrated a feature enabling users to select favorite windows for quick access upon logging in.",
        },
        {
          responsiblities:
            "Implemented role-based authentication and authorization, enabling users to View, Update, Add, and delete  windows (forms) based on granted permissions, and provided support for an existing website. ",
        },
        {
          responsiblities:
            "Introduced new payment flows and integrated reusable components to enhance functionality and enrich the user experience.",
        },
        {
          responsiblities:
            "Utilized Restful web service calls for POST, PUT, DELETE, and GET methods.",
        },
      ],
    };
  },
  WorkDescription: () => {
    return {
      WORK_DESCRIPTION: [
        {
          icon: "",
          role: "Senior UX UI Designer",
          currentlyWorking: true,
          jobType: "Fulltime",
          location: "Bytedance",
          jobDuration: "Jan 2021 - Present · 1 yr 7 mos",
          jobDescription:
            "Lorem ipsum dolor sit amet, consectetr  elit. Diam, pellenesque dignissim eu vivamus donec erat. Lorem ipsum dolor sit amet, consectetr  elit.",
        },
        {
          icon: "",
          role: "Junior UX UI Designer",
          currentlyWorking: false,
          jobType: "Fulltime",
          location: "ConocoPhillips",
          jobDuration: "Aug 2018 - Nov 2020 · 2 yrs 4 mos",
          jobDescription:
            "Lorem ipsum dolor sit amet, consectetr  elit. Diam, pellenesque dignissim eu vivamus donec erat. Lorem ipsum dolor sit amet, consectetr  elit.",
        },
        {
          icon: "",
          role: "UX UI Designer",
          currentlyWorking: false,
          jobType: "Fulltime",
          location: "Brex",
          jobDuration: "Jun 2017 - May 2018 · 1 yr",
          jobDescription:
            "Lorem ipsum dolor sit amet, consectetr  elit. Diam, pellenesque dignissim eu vivamus donec erat. Lorem ipsum dolor sit amet, consectetr  elit.",
        },
      ],
    };
  },
  ProjectsData: () => {
    return {
      PROJECT_DATA: [
        {
          label: "NDC",
          value: 25,
          color: "#00E396",
        },
        {
          label: "RDC",
          value: 65,
          color: "#FEB019",
        },
        {
          label: "STOCKIST",
          value: 100,
          color: "#FF4560",
        },
        {
          label: "HOSPITAL",
          value: 15,
          color: "#775DD0",
        },
      ],
    };
  },
  DonutOptions: () => {
    return {
      DONUT_OPTIONS: {
        tooltip: {
          trigger: "item",
        },
        // legend: {
        //   top: '5%',
        //   left: 'center'
        //   lab
        // },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "90%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 5,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },

            data: [
              {
                name: "JavaScript",
                value: 600,
              },
              {
                name: "HTML",
                value: 600,
              },
              {
                name: "ReactJS",
                value: 600,
              },
              {
                name: "CSS",
                value: 600,
              },
              {
                name: "Redux Toolkit",
                value: 600,
              },
              {
                name: "Git",
                value: 600,
              },
              {
                name: "GitHub",
                value: 600,
              },
              // {
              //   name: "TypeScript",
              //   value: 600,
              // },
              {
                name: "Formik",
                value: 600,
              },
              {
                name: "Yup",
                value: 600,
              },
              {
                name: "Axios",
                value: 600,
              },
              {
                name: "BitBucket",
                value: 600,
              },
              {
                name: "Material-UI",
                value: 600,
              },
              {
                name: "Node.JS",
                value: 400,
              },
            ],
          },
        ],
      },
    };
  },

  AboutExpCard: () => {
    const { vasavi, pragathi, bhashyam } = React.Imports(
      ({ assets }) => assets
    );
    return {
      ABOUT_DESCRIPTION_CARD: [
        {
          icon: vasavi,
          role: "Sri Vasavi Engineering College",
          place: "Tadepalligudem",
          jobDescription: "B-Tech,E.C.E",
          jobDuration: "2016 - 2020",
        },
        {
          icon: pragathi,
          role: "Pragathi Juniour Colleage.",
          place: "Tanuku.",
          jobDescription: "M.P.C",
          jobDuration: "2014 - 2016",
        },
        {
          icon: bhashyam,
          role: "Bhashyam Public School.",
          place: "Tanuku.",
          jobDescription: "-",
          jobDuration: "2013 - 2014",
        },
      ],
    };
  },

  AboutGetTouchData: () => {
    const {
      LanguageIcon,
      RoomOutlinedIcon,
      AccountCircleOutlinedIcon,
      BookmarkBorderIcon,
      CalendarMonthIcon,
      AccessTimeOutlinedIcon,
    } = React.Imports(({ icons }) => icons);
    return {
      ABOUT_GET_CARD: [
        {
          icon: (
            <LanguageIcon
              style={{ width: "20px", margin: "0px 4px", color: "#6F7787FF" }}
            />
          ),
          data: "akhi.com",
        },
        {
          icon: (
            <RoomOutlinedIcon
              style={{ width: "20px", margin: "0px 4px", color: "#6F7787FF" }}
            />
          ),
          data: "Location",
        },
        {
          icon: (
            <AccountCircleOutlinedIcon
              style={{ width: "20px", margin: "0px 4px", color: "#6F7787FF" }}
            />
          ),
          data: "Current Address",
        },
        {
          icon: (
            <BookmarkBorderIcon
              style={{ width: "20px", margin: "0px 4px", color: "#6F7787FF" }}
            />
          ),
          data: "Email Id",
        },
        {
          icon: (
            <CalendarMonthIcon
              style={{ width: "20px", margin: "0px 4px", color: "#6F7787FF" }}
            />
          ),
          data: "Date of Birth",
        },
        {
          icon: (
            <AccessTimeOutlinedIcon
              style={{ width: "20px", margin: "0px 4px", color: "#6F7787FF" }}
            />
          ),
          data: "Pin Number",
        },
      ],
      ABOUT_GET_TOUCH_CARD: [
        {
          icon: (
            <BookmarkBorderIcon
              style={{ width: "20px", margin: "0px 4px", color: "#6F7787FF" }}
            />
          ),
          data: "Email Id",
        },
        {
          icon: (
            <CalendarMonthIcon
              style={{ width: "20px", margin: "0px 4px", color: "#6F7787FF" }}
            />
          ),
          data: "Date of Birth",
        },
        {
          icon: (
            <AccessTimeOutlinedIcon
              style={{ width: "20px", margin: "0px 4px", color: "#6F7787FF" }}
            />
          ),
          data: "Pin Number",
        },
      ],
    };
  },

  AboutSkillCard: () => {
    const { CheckCircleOutlineIcon, BookmarkBorderIcon, GroupIcon } =
      React.Imports(({ icons }) => icons);
    return {
      ABOUT_Skill_CARD: [
        {
          icon1: <CheckCircleOutlineIcon style={{ color: "#7930D8FF" }} />,
          iconData1: "Design Software",
          icon2: <BookmarkBorderIcon style={{ color: "#D83192FF" }} />,
          iconData2: "5 Years of Exp",
          icon3: <GroupIcon style={{ color: "#31A0D8FF" }} />,
          iconData3: "20 Endorsements",
        },
        {
          icon1: <CheckCircleOutlineIcon style={{ color: "#7930D8FF" }} />,
          iconData1: "Research",
          icon2: <BookmarkBorderIcon style={{ color: "#D83192FF" }} />,
          iconData2: "5 Years of Exp",
          icon3: <GroupIcon style={{ color: "#31A0D8FF" }} />,
          iconData3: "10 Endorsements",
        },
        {
          icon1: <CheckCircleOutlineIcon style={{ color: "#7930D8FF" }} />,
          iconData1: "User Experience",
          icon2: <BookmarkBorderIcon style={{ color: "#D83192FF" }} />,
          iconData2: "5 Years of Exp",
        },
        {
          icon1: <CheckCircleOutlineIcon style={{ color: "#7930D8FF" }} />,
          iconData1: "User Design",
          icon2: <BookmarkBorderIcon style={{ color: "#D83192FF" }} />,
          iconData2: "5 Years of Exp",
        },
      ],
    };
  },
  AboutRolesCard: () => {
    const { BookmarkBorderIcon, HomeIcon, RoomOutlinedIcon } = React.Imports(
      ({ icons }) => icons
    );

    const { uiux, react, frontend, fullstack, javascript, nodejs } =
      React.Imports(({ assets }) => assets);
    return {
      ABOUT_ROLES_CARD: [
        {
          icon1: uiux,
          iconData: "UI / UX Designer",
          salary: "$95K - $120K",
          icon2: <HomeIcon style={{ color: "#9095A1FF", margin: "10px" }} />,
          iconData2: "Laborum",
          icon3: (
            <RoomOutlinedIcon style={{ color: "#9095A1FF", margin: "10px" }} />
          ),
          location: "AP",
          icon4: (
            <BookmarkBorderIcon
              style={{ color: "#9095A1FF", margin: "10px" }}
            />
          ),
          jobType: "Remote",
        },
        {
          icon1: react,
          iconData: "react Developer",
          salary: "$95K - $120K",
          icon2: <HomeIcon style={{ color: "#9095A1FF", margin: "10px" }} />,
          iconData2: "Laborum",
          icon3: (
            <RoomOutlinedIcon style={{ color: "#9095A1FF", margin: "10px" }} />
          ),
          location: "AP",
          icon4: (
            <BookmarkBorderIcon
              style={{ color: "#9095A1FF", margin: "10px" }}
            />
          ),
          jobType: "Remote",
        },
        {
          icon1: frontend,
          iconData: "Frontend Developer",
          salary: "$1l - $5l",
          icon2: <HomeIcon style={{ color: "#9095A1FF", margin: "10px" }} />,
          iconData2: "Laborum",
          icon3: (
            <RoomOutlinedIcon style={{ color: "#9095A1FF", margin: "10px" }} />
          ),
          location: "AP",
          icon4: (
            <BookmarkBorderIcon
              style={{ color: "#9095A1FF", margin: "10px" }}
            />
          ),
          jobType: "Remote",
        },
        {
          icon1: javascript,
          iconData: "javascript Developer",
          salary: "$1l - $5l",
          icon2: <HomeIcon style={{ color: "#9095A1FF", margin: "10px" }} />,
          iconData2: "Laborum",
          icon3: (
            <RoomOutlinedIcon style={{ color: "#9095A1FF", margin: "10px" }} />
          ),
          location: "AP",
          icon4: (
            <BookmarkBorderIcon
              style={{ color: "#9095A1FF", margin: "10px" }}
            />
          ),
          jobType: "Remote",
        },
        {
          icon1: fullstack,
          iconData: "Full Stack developer",
          salary: "$2K - $6K",
          icon2: <HomeIcon style={{ color: "#9095A1FF", margin: "10px" }} />,
          iconData2: "Laborum",
          icon3: (
            <RoomOutlinedIcon style={{ color: "#9095A1FF", margin: "10px" }} />
          ),
          location: "AP",
          icon4: (
            <BookmarkBorderIcon
              style={{ color: "#9095A1FF", margin: "10px" }}
            />
          ),
          jobType: "Remote",
        },
        {
          icon1: nodejs,
          iconData: "nodejs developer",
          salary: "$90K - $120K",
          icon2: <HomeIcon style={{ color: "#9095A1FF", margin: "10px" }} />,
          iconData2: "Laborum",
          icon3: (
            <RoomOutlinedIcon style={{ color: "#9095A1FF", margin: "10px" }} />
          ),
          location: "AP",
          icon4: (
            <BookmarkBorderIcon
              style={{ color: "#9095A1FF", margin: "10px" }}
            />
          ),
          jobType: "Remote",
        },
      ],
    };
  },
  ProjectsInfoData: () => {
    const { ghiImage, sicImage, wellFundImage, ncukImage, project } =
      React.Imports(({ assets }) => assets);
    return {
      PROJECT_INFO_DATA: [
        {
          ProjectName: "NCUK-The University Consortium",
          Role: "ReactJS Developer",
          About:
            "NCUK is unique in UK higher education. It is a consortium of leading UK universities dedicated to giving international students guaranteed access to universities worldwide and help them to succeed.Features allow the students and university to maintain the data and Files for the admission process. It also includes the faculty role and diﬀerent feedback form",
          Image: ncukImage,
          ImageStatus: "notOwned",
          RolesAndResponsiblities: {
            pointOne:
              "Design, develop and test HTML5, CSS3, Bootstrap, Java Script and React.JS that meets accessibility and web browser standards for website.",
            pointTwo:
              "Worked on Sharing Files through using Decode and Encode routing.",
            pointThree:
              "	Used React-Router to turn application into Single Page Application",
            pointFour:
              "Worked in using React JS components, Forms, Events, Keys, Router and Redux concept.",
            pointFive:
              "Used the Restful web service calls for POST, PUT, DELETE and GET methods.",
          },
        },
        {
          ProjectName: "PDS Galaxy",
          Role: "ReactJS Developer",
          About:
            "PDS Galaxy provides end-to-end services for the Health sector.Managing various services like Insurance Billing and follow-up, Early Out and patient Access, Bad Debt and collections, Accident Claims and workers' Compensation, and State and federal Health care Enrolment Assistance.",
          Image: ghiImage,
          ImageStatus: "notOwned",
          RolesAndResponsiblities: {
            pointOne:
              "Design, develop and test HTML5, CSS3, Bootstrap, Java Script and React.JS that meets accessibility and web browser standards for website.",
            pointTwo:
              "Worked on Sharing Files through using Decode and Encode routing.",
            pointThree:
              "	Used React-Router to turn application into Single Page Application",
            pointFour:
              "Worked in using React JS components, Forms, Events, Keys, Router and Redux concept.",
            pointFive:
              "Used the Restful web service calls for POST, PUT, DELETE and GET methods.",
          },
        },
        {
          ProjectName: "Campaign Manager",
          Role: "ReactJS Developer",
          About:
            "Campaign Manager is provides campaign services.●	Campaign Manager Managing various services like Creating the templates which is used to communicate with clients",
          Image: sicImage,
          ImageStatus: "notOwned",
          RolesAndResponsiblities: {
            pointOne:
              "Worked on Developing a web application to view the following modules: Campaign Maintenance, Template maintenance.",
            pointTwo:
              "Integrated REST APIs as per the requirement. Used Redux tool kit and context for maintaining global state of the application",
            pointThree:
              "Integrated User defined forms using reusable React components",
            pointFour:
              "Integrated dynamic form where user can provide the form fields and validations",
            pointFive:
              "Used the Restful web service calls for POST, PUT, DELETE and GET methods.",
          },
        },
        {
          ProjectName: "Wellfund",
          Role: "ReactJS Developer",
          About:
            "Clients serve for Health care domain in USA educating individuals on their healthcare options while Providing guidance in the enrolment process for both state and federally funded programs and assisting Individuals with all their medical coverage needs. The well fund is a web-based application where it has Been operated by authorized agent who has the permission to enter in to the application securely. The main Purpose of the application is having a thousands of patient’s records which are added by an agent and Checking the eligibility of a patient according to the details. Differentiate the patients who is having medical Benefits and insured funded.",
          Image: wellFundImage,
          ImageStatus: "notOwned",
          RolesAndResponsiblities: {
            pointOne:
              "Design, develop and test HTML5, CSS3, Bootstrap, Java Script and React.JS that meets accessibility and web browser standards for website.",
            pointTwo:
              "Worked on Sharing Files through using Decode and Encode routing.",
            pointThree:
              "	Used React-Router to turn application into Single Page Application",
            pointFour:
              "Worked in using React JS components, Forms, Events, Keys, Router and Redux concept.",
            pointFive:
              "Used the Restful web service calls for POST, PUT, DELETE and GET methods.",
          },
        },
        {
          ProjectName: "MY COVERAGE CARE",
          Role: "ReactJS Developer",
          About:
            "This Portal enables to provide the eligible insurance for the user based on the Income My coverage care provides end to end services for the Health Insurance sector.",
          Image: project,
          ImageStatus: "Owned",
          RolesAndResponsiblities: {
            pointOne:
              "Design, develop and test HTML5, CSS3, Bootstrap, Java Script and React.JS that meets accessibility and web browser standards for website.",
            pointTwo:
              "Worked on Sharing Files through using Decode and Encode routing.",
            pointThree:
              "	Used React-Router to turn application into Single Page Application",
            pointFour:
              "Worked in using React JS components, Forms, Events, Keys, Router and Redux concept.",
            pointFive:
              "Used the Restful web service calls for POST, PUT, DELETE and GET methods.",
          },
        },
      ],
      PLUGIN_STORE: {
        PluginNames: [
          {
            name: "Material UI",
            PluginDescs:
              " Material UI is an open-source React component library that implements Google's Material Design. It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box. Material UI is beautiful by design and features a suite of customization options that make it easy to implement your own custom design system on top of our components.",
          },
          {
            name: "Formik",
            PluginDescs:
              " forms are really verbose in React. To make matters worse, most form helpers do wayyyy too much magic and often have a significant performance cost associated with them. Formik is a small library that helps you with the 3 most annoying parts:Getting values in and out of form state,Validation and error messages,Handling form submission,By colocating all of the above in one place, Formik will keep things organized--making testing, refactoring, and reasoning about your forms a breeze",
          },
          {
            name: "Yup",
            PluginDescs:
              "Yup is a lightweight JavaScript library for object schema validation. With a declarative syntax, it enables developers to define validation rules for data objects. Key features include built-in and custom validation, asynchronous validation support, customizable error messages, and seamless integration with popular form libraries. Designed with an immutable API, Yup ensures data integrity during validation.",
          },
          {
            name: "Axios",
            PluginDescs:
              "Axios is a popular, promise-based HTTP client for the browser and Node.js. It simplifies the process of making HTTP requests and handling responses. Axios supports features like automatic transformation of JSON data, request and response interception, and the ability to cancel requests. Its straightforward API and support for promises make it a preferred choice for AJAX requests and communication with APIs.",
          },
          {
            name: "Redux And ReduxToolkit",
            PluginDescs:
              " Redux Toolkit is our official, opinionated, batteries-included toolset for efficient Redux development. It is intended to be the standard way to write Redux logic, and we strongly recommend that you use it.It includes several utility functions that simplify the most common Redux use cases, including store setup, defining reducers, immutable update logic, and even creating entire `slices` of state at once without writing any action creators or action types by hand. It also includes the most widely used Redux addons, like Redux Thunk for async logic and Reselect for writing selector functions, so that you can use them right away.",
          },
          {
            name: "EslintPlug in",
            PluginDescs:
              "ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.ESLint is completely pluggable. Every single rule is a plugin and you can add more at runtime. You can also add community plugins, configurations, and parsers to extend the functionality of ESLint.",
          },
          {
            name: "React Router ",
            PluginDescs:
              "React Router enables `client side routing`. In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.",
          },
        ],
      },
    };
  },
};
