import Component2 from "./Component2";
import { AppContext } from "./Context/AppContext";

function Component1() {
  const contextValues = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50,
    f: 60
  };

  return (
    <AppContext.Provider value={contextValues}>
      <Component2 />
    </AppContext.Provider>
  );
}

export default Component1;
