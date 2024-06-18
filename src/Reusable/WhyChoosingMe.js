const WhyChoosingMe = ({ reasons, title = true }) => {
  return (
    <>
      {title && <h3 className="whyChoosingMeHeading">Why Choosing Me</h3>}
      {reasons.map((each) => {
        return (
          <p className="whyChoosingMePoints">
            <span>{`- ${each.trimStart()}`} </span>
          </p>
        );
      })}
    </>
  );
};

export default WhyChoosingMe;
