import Header from "./component/Header";
import Profile from "./component/Profile";
import Project from "./component/Project";
import TechStack from "./component/TechStack";
import Timeline from "./component/Timeline";
import { EXPERIENCE } from "./component/constant";
import "./sass/CommonCss.scss";

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
    <div className={`backgroundApp`}>
      <div className="xl:mx-52 shadow-2xl p-2">
        <Header handleThemeChange={toggleTheme} />
        <Profile />
        <Timeline
          companyName={EXPERIENCE.companyName}
          experience={EXPERIENCE.experience}
          logo={EXPERIENCE.logo}
          roles={EXPERIENCE.roles}
          workType={EXPERIENCE.workType}
        />
        <TechStack />
        <Project />
      </div>
    </div>
  );
}

export default App;
