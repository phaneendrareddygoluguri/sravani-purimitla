function Routes() {
  const React = document.React;
  const { HomeIndex, AboutIndex, SkillsIndex, Experience, ProjectIndex } =
    React.Imports(({ screens }) => screens);
  const { Layout } = React.Imports(({ metaComponents }) => metaComponents);
  const { Router, Routes, Route, Navigate } = React.Imports(
    ({ routerDom }) => routerDom
  );
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/">
            <Route index element={<HomeIndex />} />
            <Route path="/about">
              <Route index element={<AboutIndex />} />
            </Route>
            <Route path="/skills">
              <Route index element={<SkillsIndex />} />
            </Route>
            <Route path="/experience">
              <Route index element={<Experience />} />
            </Route>
            <Route path="/project">
              <Route index element={<ProjectIndex />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default Routes;
