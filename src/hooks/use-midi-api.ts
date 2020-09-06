import { useState, useEffect, Dispatch, SetStateAction } from "react";

// 🙃😝 haha
interface MIDInterface {
  midiAccess: WebMidi.MIDIAccess;
  isMidiSupported: boolean;
}

const useMidiApi = (): MIDInterface | undefined => {
  const [midi, setMidi] = useState<MIDInterface>();

  const getMidiAccess = async (): Promise<WebMidi.MIDIAccess> => {
    return await navigator.requestMIDIAccess();
  };

  useEffect(() => {
    console.log("Internal", { midi });
  }, [midi]);

  useEffect(() => {
    console.log("use-midi-api!");
    async function init() {
      const access = await getMidiAccess();
      const supported = access ? true : false;

      console.log({ access, supported });
      setMidi({ isMidiSupported: supported, midiAccess: access });
    }
    init();
  }, []);

  return midi;
};

export default useMidiApi;
