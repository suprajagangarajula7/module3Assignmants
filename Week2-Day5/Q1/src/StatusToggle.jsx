import React, { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function StatusToggle() {
  const [status, setStatus] = useState(false); // default: false

  return (
    <div>
      <button onClick={() => setStatus(!status)}>
        Toggle Status
      </button>

      {/* Conditional Rendering */}
      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
}

export default StatusToggle;
