import React from "react";

const HeavyComponent = () => {
  console.log("HeavyComponent rendered");

  //simulate heavy computation
  let total = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    total += i;
  }

  return (
    <div style={{ background: "#f0f0f0", padding: "20px" }}>
      <h3>Heavy Component</h3>
      <p>This component is expensive to render.</p>
    </div>
  );
};

export default React.memo(HeavyComponent);
