import useLocalStorage from "../hooks/useLocalStorage";

function Settings() {
  // ✅ useLocalStorage manages theme state and syncs with localStorage
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [fontSize, setFontSize] = useLocalStorage("fontSize", "16");

  return (
    <div>
      <h2>Settings</h2>

      {/* Theme Selection */}
      <label>
        Theme:
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>

      {/* Font Size Selection */}
      <label>
        Font Size: {fontSize}px
        <input
          type="range"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          min="12"
          max="24"
        />
      </label>
    </div>
  );
}

export default Settings;
