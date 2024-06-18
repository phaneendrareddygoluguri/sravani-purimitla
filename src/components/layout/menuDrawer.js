function MenuDrawer({ handleClose, open, children }) {
  const React = document.React;
  const { Drawer } = React.Imports(({ materialUI }) => materialUI);
  return (
    <span className="sideDrawerContainer">
      <Drawer anchor={"left"} open={open} onClose={handleClose}>
        {children}
      </Drawer>
    </span>
  );
}

export default MenuDrawer;
