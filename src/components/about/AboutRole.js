const AboutRoles = () => {
  const React = document.React;
  const { AboutRolesCard } = React.Imports(({ constants }) => constants);
  const { ABOUT_ROLES_CARD } = AboutRolesCard();
  const { Grid } = React.Imports(({ materialUI }) => materialUI);
  return (
    <div>
      <div className="interest-heading">
        <h5 className="interestedHeading">Interested Roles</h5>
      </div>

      <Grid container>
        {ABOUT_ROLES_CARD?.map((item) => {
          return (
            <Grid item lg={3} md={4} sm={6} xl={4} className="roles-header">
              <div className="interest-container">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <img src={item.icon1} alt="" width={"40px"} />
                  </div>
                  <div style={{ margin: "5px 5px 5px 17px" }}>
                    <h5 className="rolesRole">{item.iconData}</h5>
                    <p className="roleSalary">{item.salary}</p>
                  </div>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
export default AboutRoles;
