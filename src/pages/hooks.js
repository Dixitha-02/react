import React, { useState } from "react";

export default function Button() {
  const [firstName, setfirstName] = useState("Dixitha");

  return (
    <button onClick={() => setfirstName("Dixitha T")}>
      {firstName}
    </button>
  );
}