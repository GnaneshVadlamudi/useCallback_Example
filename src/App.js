import React from "react";
import { useState, useCallback } from "react";
import "./styles.css";
import Age  from "./Age.js";
import Instructions from "./Instructions.js";

const App = () => {
  const [age, setAge] = useState(99)
  const handleClick = () => setAge(age + 1)
  const someValue = "someValue";

  const doSomething = useCallback(() => {
    return someValue
  }, [someValue])

  return (
    <div>
      <Age age={age} handleClick={handleClick} />
      <Instructions doSomething={doSomething} />
      {/* inline useCallback like below
      <Instructions doSomething={useCallback(() => {
        return someValue
      }, [someValue])} />
      */}
    </div>
  )
}

export default App;



