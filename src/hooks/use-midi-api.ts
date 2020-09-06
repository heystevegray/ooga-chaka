import { useState, useEffect } from "react";

// 🙃😝 haha
interface MIDInterface {
  midiAccess: WebMidi.MIDIAccess | undefined;
  midiSupported: boolean | undefined;
}

const getMidiAccess = async (): Promise<WebMidi.MIDIAccess> => {
  return await navigator.requestMIDIAccess();
};

const getMidiSupport = async (): Promise<boolean> => {
  const access = await getMidiAccess();
  return access ? true : false;
};

const useMidiApi = (): MIDInterface => {
  const [midi, setMidi] = useState<MIDInterface>({
    midiSupported: undefined,
    midiAccess: undefined,
  });

  //   useEffect(() => {
  //     // console.log("Internal", { midi });
  //   }, [midi]);

  useEffect(() => {
    console.log("use-midi-api!");
    const initialize = async (): Promise<any> => {
      setMidi({
        midiSupported: await getMidiSupport(),
        midiAccess: await getMidiAccess(),
      });
    };

    initialize();
  }, []);

  return midi;
};

export default useMidiApi;
