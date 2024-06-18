function ProjectIndex() {
  const React = document.React;
  // const {} = React.Imports(({ utils }) => utils);
  const { Grid } = React.Imports(({ materialUI }) => materialUI);
  const { ProjectsInfoData } = React.Imports(({ constants }) => constants);
  const { PLUGIN_STORE } = ProjectsInfoData();
  // const { CloudDownloadIcon, CloseIcon } = React.Imports(({ icons }) => icons);

  // const { Chat, Chat2, Msg, Peoplegrp, Mic, Person, Dance } = React.Imports(
  //   ({ assets }) => assets
  // );
  const { ProjectMetaInfo } = React.Imports(({ utils }) => utils);

  return (
    <>
      <div>
        <ProjectMetaInfo />
      </div>
      <div className="plugInstore">
        <h2>Popular Dependencies</h2>
        <Grid container spacing={2} justifyContent="space-around">
          {/* Card 1 */}
          <Grid item xs={12} sm={6} md={4}>
            {PLUGIN_STORE?.PluginNames?.map((item, index) => {
              return (
                <div className="plugIncardContainer" key={index}>
                  {/* <img src={Chat} alt="EXPERIENCE" className="images" /> */}
                  <div>
                    <h3 className="text">{item?.name}</h3>
                    <p>{item?.PluginDescs}</p>
                    {/* <Button
                    id="btn1"
                    variant="outlined"
                    className="pluginButtonVerified"
                    startIcon={<CloudDownloadIcon />}
                  >
                    Install
                  </Button> */}
                  </div>
                </div>
              );
            })}
          </Grid>
          {/* Card 2 */}
          {/* <Grid item xs={12} sm={6} md={4}>
            <div
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                position: "relative",
              }}
            >
              <img src={Chat2} alt="EXPERIENCE" className="images" />
              <div style={{ marginLeft: "60px" }}>
                <h3 className="text">Payment Gateway</h3>
                <p>
                  Securely process payments directly within the chatbot for a
                  smooth user experience
                </p>
              </div>
              <Button id="btn2" variant="outlined" startIcon={<CloseIcon />}>
                Uninstall
              </Button>
            </div>
          </Grid> */}
          {/* Card 3 */}
          {/* <Grid item xs={12} sm={6} md={4}>
            <div
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                position: "relative",
              }}
            >
              <img src={Mic} alt="EXPERIENCE" className="images" />
              <div style={{ marginLeft: "60px" }}>
                <h3 className="text">Speech-to-Text (STT)</h3>
                <p>
                  Allow users to interact with the chatbot using voice commands.
                </p>
              </div>
              <Button
                id="btn1"
                variant="outlined"
                startIcon={<CloudDownloadIcon />}
              >
                Install
              </Button>
            </div>
          </Grid> */}
          {/* Card 1 */}
          {/* <Grid item xs={12} sm={6} md={4}>
            <div
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                position: "relative",
              }}
            >
              <img src={Peoplegrp} alt="EXPERIENCE" className="images" />
              <div style={{ marginLeft: "60px" }}>
                <h3 className="text">User Behavior Tracking</h3>
                <p>
                  Monitor user interactions and analyze chatbot performance to
                  optimize responses.
                </p>
              </div>
              <Button id="btn2" variant="outlined" startIcon={<CloseIcon />}>
                Uninstall
              </Button>
            </div>
          </Grid> */}
          {/* Card 2 */}
          {/* <Grid item xs={12} sm={6} md={4}>
            <div
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                position: "relative",
              }}
            >
              <img src={Msg} alt="EXPERIENCE" className="images" />
              <div style={{ marginLeft: "60px" }}>
                <h3 className="text">User Behavior Tracking</h3>
                <p>
                  Respond to tweets and direct messages with your AI chatbot.
                </p>
              </div>
              <Button
                id="btn1"
                variant="outlined"
                startIcon={<CloudDownloadIcon />}
              >
                Install
              </Button>
            </div>
          </Grid> */}
          {/* Card 3 */}
          {/* <Grid item xs={12} sm={6} md={4}>
            <div
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                position: "relative",
              }}
            >
              <img src={Person} alt="EXPERIENCE" className="images" />
              <div style={{ marginLeft: "60px" }}>
                <h3 className="text">Avatar Customization</h3>
                <p>
                  Give your chatbot a unique personality with various avatars
                  and animations.
                </p>
              </div>
              <Button
                id="btn1"
                variant="outlined"
                startIcon={<CloudDownloadIcon />}
              >
                Install
              </Button>
            </div>
          </Grid> */}
        </Grid>
      </div>
    </>
  );
}

export default ProjectIndex;
