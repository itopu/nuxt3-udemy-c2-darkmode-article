export default () => {
  const isDarkMode = useState("darkMode", () => true);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode;
  };

  return {
    isDarkMode,
    toggleDarkMode,
  };
};

// export default useDarkMode;
