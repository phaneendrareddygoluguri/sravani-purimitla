import standardImports from "./standardImports";
import commonImports from "./commonImports";
import utilFunctions from "./functionalImports";
const Imports = (Redix) => {
  const allData = {
    ...standardImports,
    ...commonImports,
    ...utilFunctions,
  };
  return Redix(allData);
};
export default Imports;
