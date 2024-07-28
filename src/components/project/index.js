function ProjectIndex() {
  const React = document.React;
  const { ProjectMetaInfo } = React.Imports(({ utils }) => utils);

  return (
    <>
      <div>
        <ProjectMetaInfo />
      </div>
    </>
  );
}

export default ProjectIndex;
