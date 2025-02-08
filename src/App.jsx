import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleFontFinder = () => {
    chrome.runtime.sendMessage({ action: "activateFontFinder" });
    setIsActive(!isActive);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-xl shadow-xl w-64 text-center">
      <h1 className="text-xl font-extrabold text-gray-900 mb-4">Font Finder</h1>
      <button
        className="mt-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition font-semibold"
        onClick={toggleFontFinder}
      >
        {isActive ? "Disable" : "Activate"} Font Finder
      </button>
    </div>
  );
}

export default App;