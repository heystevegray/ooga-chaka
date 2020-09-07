# `useMidiApi`

A React Hook that connects your app to the [Web MIDI API](https://webaudio.github.io/web-midi-api/). This allows you to connect a Piano that supports USB MIDI to your React app and get real time [MIDI Messages](https://developer.mozilla.org/en-US/docs/Web/API/MIDIMessageEvent), plus more.

## Usage

```tsx
import React, { useEffect } from "react";
import { useMidiAPi } from "ooga-chaka";

const App = () => {
  const data = useMidiApi();

  useEffect(() => {
    const {
      midiAccess,
      midiConnectionEvent,
      midiSupported,
      midiPort,
      midi,
    } = data;

    console.log({
      midiAccess,
      midiConnectionEvent,
      midiSupported,
      midiPort,
      midi,
    });
  }, [data]);

  return (
    <div
      style={{
        background: "#101010",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
      }}
    >
      <h2>useMidiDemo</h2>
      <p style={{ width: "50%" }}>{JSON.stringify(data, null, 2)}</p>
    </div>
  );
};

export default App;
```

## Resources

- [Getting Started With The Web MIDI API - Smashing Magazine](https://www.smashingmagazine.com/2018/03/web-midi-api/)

- [MIDIAccess](https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess)

- [Learning to Read Music with the Web MIDI API - Jan Kleinert & Ryan Jarvinen, Red Hat](https://www.youtube.com/watch?v=iamRkSsnIS0&ab_channel=node.js)

  - [Slides](http://gist-reveal.it/276ce9f4e0cd837a66f01b8992238342?theme=60e54843de11a545897e#/)

- [ng build error - Property 'requestMIDIAccess' does not exist](https://stackoverflow.com/a/52800235)

- [Playing with MIDI in JavaScript](https://medium.com/swinginc/playing-with-midi-in-javascript-b6999f2913c3)

- [MIDI Keyboard - Apps on Google Play](https://play.google.com/store/apps/details?id=com.dreamhoundstudios.keyboard&hl=en_US)

- [Convert Midi Note Numbers To Name and Octave](https://stackoverflow.com/q/712679)

- [Accessing React State in Event Listeners with useState and useRef hooks](https://medium.com/geographit/accessing-react-state-in-event-listeners-with-usestate-and-useref-hooks-8cceee73c559)
