import { useState, useEffect, useRef } from "react";
import "web-midi-api";

// 🙃😝 haha
export interface MIDInterface {
  midiAccess: WebMidi.MIDIAccess | undefined;
  midiConnectionEvent: WebMidi.MIDIConnectionEvent | undefined;
  midiSupported: boolean | undefined;
  midiPort?: WebMidi.MIDIPort | undefined;
  midi: MidiNote;
}

interface Key {
  value: number;
  name: string;
  octave: number;
}

interface MidiNote extends Key {
  velocity: number;
  on: boolean;
}

const noteName: string[] = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

const initialNote: MidiNote = {
  value: 0,
  octave: 0,
  name: "N/a",
  velocity: 0,
  on: false,
};

const useMidiApi = (): MIDInterface => {
  const [midiConfig, setMidiConfig] = useState<MIDInterface>({
    midiSupported: undefined,
    midiAccess: undefined,
    midiConnectionEvent: undefined,
    midi: initialNote,
  });
  const midiConfigRef = useRef(midiConfig);

  const update = (data: Partial<MIDInterface>): void => {
    const merged = { ...midiConfigRef.current, ...data };
    midiConfigRef.current = merged;
    setMidiConfig(merged);
  };

  const getNoteName = (midiNote: number): Key => {
    const octave: number = Math.floor(midiNote / 12 - 1);
    const noteIndex: number = midiNote % 12;
    const name = noteName[noteIndex];
    return { value: midiNote, octave, name };
  };

  const onMIDISuccess = (midiAccess: any): void => {
    // Subscribe to Midi messages
    for (var input of midiAccess.inputs.values()) {
      input.onmidimessage = getMIDIMessage;
    }
    // Subscribe to Midi state changes
    midiAccess.onstatechange = getStateChange;
    update({ midiSupported: true, midiAccess });
  };

  const onMIDIFailure = (): void => {
    console.log("Could not access your MIDI devices.");
    update({ midiSupported: false });
  };

  const getStateChange = (message: WebMidi.MIDIConnectionEvent): void => {
    update({ midiConnectionEvent: message, midiPort: message.port });
  };

  const getMIDIMessage = (message: WebMidi.MIDIMessageEvent): void => {
    var command = message.data[0];
    var note = message.data[1];
    // a velocity value might not be included with a noteOff command
    var velocity = message.data.length > 2 ? message.data[2] : 0;

    switch (command) {
      case 144: // note on
        if (velocity > 0) {
          update({ midi: { ...getNoteName(note), velocity, on: true } });
        } else {
          update({ midi: { ...getNoteName(note), velocity, on: false } });
        }
        break;
      case 128: // note off
        update({ midi: { ...getNoteName(note), velocity, on: false } });
        break;
    }
  };

  useEffect(() => {
    const initialize = async (): Promise<any> => {
      try {
        navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
      } catch (error) {
        console.log({ error });
        update({ midiSupported: false });
      }
    };

    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return midiConfig;
};

export default useMidiApi;
