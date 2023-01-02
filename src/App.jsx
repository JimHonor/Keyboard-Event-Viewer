import { useRef, useState } from "react";
import ViewerTable from "./ViewerTable";

const App = () => {
  const keyboardEventProps = [
    "code",
    "key",
    "altKey",
    "ctrlKey",
    "metaKey",
    "shiftKey",
  ];

  const [keyboardEventValues, setKeyboardEventValues] = useState([]);
  const [eventType, setEventType] = useState("");
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  const onInputKeydown = (e) => {
    setEventType(e.type);
    const values = keyboardEventProps.map((prop) => e[prop]);
    setKeyboardEventValues([values, ...keyboardEventValues]);
  };

  const onResetButtonClick = () => {
    setKeyboardEventValues([]);
    setInput("");
    inputRef.current.focus();
  };

  return (
    <div className="App m-8 relative">
      <header className="mb-8">
        <h1 className="font-bold text-2xl">Keyboard Event Viewer</h1>
      </header>
      <main>
        <div className="flex justify-between mb-4">
          <div className="flex-1 mr-24">
            <input
              type="text"
              autoFocus
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border-gray-300 border border-solid outline-none w-full focus:border-stone-600 px-2 py-1 rounded-md text-stone-800"
              placeholder="press a key..."
              onKeyDown={onInputKeydown}
            />
          </div>
          <button
            className="border-gray-300 border border-solid rounded-md hover:bg-[#f0f0f0] active:bg-[#d9d9d9] px-2 py-1"
            onClick={onResetButtonClick}
          >
            Reset
          </button>
        </div>
        <ViewerTable
          keyboardEventProps={keyboardEventProps}
          keyboardEventValues={keyboardEventValues}
          eventType={eventType}
        />
      </main>
      <footer className="fixed bottom-0 left-0 bg-white w-full text-center py-2 text-slate-600">
        <span>
          made by <em>Jim Honor</em>
        </span>
      </footer>
    </div>
  );
};

export default App;
