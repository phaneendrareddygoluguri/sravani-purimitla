function IconLogo({ type, name, tagName }) {
  const React = document.React;
  const { LogoB, LogoG } = React.Imports(({ assets }) => assets);
  return (
    <div className="logoContainer">
      <img
        src={type === "LogoB" ? LogoB : type === "LogoG" ? LogoG : ""}
        alt={""}
        width={"25px"}
      />
      <div>
        <div className="nameText">{name}</div>
        <div className="portfolioText">{tagName}</div>
      </div>
    </div>
  );
}

export default IconLogo;
