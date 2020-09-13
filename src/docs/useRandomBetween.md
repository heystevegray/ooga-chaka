# `useRandomBetween`

A React Hook that returns a [random number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) between the specified `min` and `max` values. If the `min` and `max` are specified, the resulting number will be between that range. Otherwise, it will be between **0** and **1**. You must also specify if you want the returned value to be a float or an integer with the `floor` boolean. Using the hook with no arguments returns a random integer of either **0** or **1**.

## Usage

```tsx
import React, { useState, useEffect } from "react";
import { useRandomBetween } from "ooga-chaka";

const App = () => {
  const min = 10;
  const max = 20;
  const [status, setStatus] = useState("");
  const randomInteger = useRandomBetween(true, min, max);
  const randomFloat = useRandomBetween(false, min, max);
  const randomIntegerBetween0and1 = useRandomBetween(true);
  const randomFloatBetween0and1 = useRandomBetween(false);
  const defaultIntegerBetween0and1 = useRandomBetween();

  useEffect(() => {
    const result = {
      defaultIntegerBetween0and1,
      randomIntegerBetween0and1,
      randomFloatBetween0and1,
      randomInteger,
      randomFloat,
    };

    setStatus(JSON.stringify(result, null, 2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        background: "#101010",
        height: "100vh",
        width: "100vw",
        display: "flex",
        textAlign: "left",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          padding: "2rem",
        }}
      >
        <h1>
          <code>useRandomBetween</code>
        </h1>
        <p>
          There are a few ways to configure the <code>useRandomBetween</code>{" "}
          hook. The following variables represent the different ways customize
          the result.
        </p>
        <p>{`If the min (${min}) and max (${max}) are specified, the resulting number will be between that range. Otherwise, between 0 and 1. The first boolean parameter determines whether to floor the result to an integer or not.`}</p>
        <pre
          style={{
            textAlign: "left",
            background: "#202020",
            padding: 10,
            fontSize: "1.5em",
          }}
        >
          {`
const min = ${min};
const max = ${max};


const defaultIntegerBetween0and1 = useRandomBetween();
const randomIntegerBetween0and1 = useRandomBetween(true);
const randomFloatBetween0and1 = useRandomBetween(false);
const randomInteger = useRandomBetween(true, min, max);
const randomFloat = useRandomBetween(false, min, max);

		`}
        </pre>
        <h3>Results</h3>
        <code>{status}</code>
        <br />
        <br />
      </div>
      {/* eslint-disable-next-line no-restricted-globals */}
      <button
        style={{
          fontSize: "1.5em",
          borderRadius: 50,
          cursor: "pointer",
          background: "lightblue",
          color: "black",
          height: 75,
          width: 250,
          border: "none",
        }}
        onClick={() => location.reload()}
      >
        Randomize
      </button>
    </div>
  );
};

export default App;
```

## Resources

- [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Generate random number between two numbers in JavaScript
  ](https://stackoverflow.com/a/7228322)
