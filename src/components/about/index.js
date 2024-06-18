function AboutIndex() {
  const React = document.React;
  const {
    AboutHeader,
    // AboutGetTouch,
    AboutCard,
    AboutExperienceCard,
    AboutSkill,
    AboutRoles,
  } = React.Imports(({ utils }) => utils);
  return (
    <div
      style={{
        padding: "10px 20px",
      }}
    >
      <AboutHeader />
      <AboutCard />
      <AboutExperienceCard />
      <AboutSkill />
      <AboutRoles />
    </div>
  );
}

export default AboutIndex;
