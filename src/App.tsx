import Header from "./component/Header";
import Profile from "./component/Profile";
import Timeline from "./component/Timeline";
import { EXPERIENCE } from "./component/constant";
function App() {
  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
  };

  const toggleTheme = () => {
    const theme = document.querySelector("body")?.getAttribute("data-theme");
    console.log("theme", theme);
    if (theme === "dark") {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  setDarkMode();
  return (
    <div className="backgroundApp">
      <Header handleThemeChange={toggleTheme} />
      <Profile />
      <Timeline
        companyName={EXPERIENCE.companyName}
        experience={EXPERIENCE.experience}
        logo={EXPERIENCE.logo}
        roles={EXPERIENCE.roles}
        workType={EXPERIENCE.workType}
      />
    </div>
  );
}

export default App;
