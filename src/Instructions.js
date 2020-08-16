import React from "react";
import { memo } from "react";

const Instructions = memo((props) => {
  return (
    <div style={{ background: 'black', color: 'yellow', padding: "1rem" }}>
      <p>Follow the instructions above as closely as possible</p>    
    </div>
  )
})

export default Instructions;