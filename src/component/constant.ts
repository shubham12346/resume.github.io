import indexnine_logo from "../assets/indexnine_technologies_logo.jpeg";
import TicTacImageUrl from "../assets/TictacImg.png";
import TicTacvideoUrl from "../assets/ticTacV.mp4";
import MaptyVideo from "../assets/MaptyVideo.mp4";
import MaptyImg from "../assets/MaptyImg.png";

export const ABOUTME =
  "Software Engineer with 1 year of experience specializing in front-end development using React and TypeScript. Proficient in state management with Redux Toolkit, unit testing with React Testing Library, and component testing with Storybook. Skilled in JavaScript and experienced in data visualization using ApexCharts. Passionate about creating efficient and maintainable code.";
export interface Role {
  position: string;
  employmentType: string;
  duration: string;
  skills: string[];
}

export interface CompanyDetails {
  logo: string;
  companyName: string;
  experience: string;
  workType: string;
  roles: Role[];
}
export const EXPERIENCE: CompanyDetails = {
  logo: indexnine_logo,
  companyName: "Indexnine Technologies",
  experience: "1yr 5mos",
  workType: "On-site",
  roles: [
    {
      position: "Software Engineer",
      employmentType: "Full-Time",
      duration: "Aug 2023 - 10months",
      skills: ["Cascading Style Sheets (CSS3)", "React js ", "javascript"],
    },
    {
      position: "Software Engineer Intern",
      employmentType: "Internship",
      duration: "Jan2023 - July15",
      skills: ["Cascading Style Sheets (CSS3)", "React js", "Unit Testing"],
    },
  ],
};

export const URl = {
  instagram: "https://www.instagram.com/shubhm_agrahari/",
  linkedIn: "https://www.linkedin.com/in/shubham-agrahari-9672b91a6/",
  twitter: "https://twitter.com/Shubham43223471",
  github: "https://github.com/shubham12346",
};

export const PROJECTS = [
  {
    projectName: "Tic Tac Toe",
    projectSummary: `
      The Tic Tac Toe Game project involves designing and developing a classic 
      two-player game where players take turns marking the spaces in a 3x3 grid.
      The objective is to place three respective marks in a horizontal,
      vertical, or diagonal row to win the game. This project will help
      you understand the basics of game development, user interface design,
      and implementing game logic`,
    websiteUrl: " https://shubham12346.github.io/tic-tac.github.io/",
    videoUrl: TicTacvideoUrl,
    imageUrl: TicTacImageUrl,
  },
  {
    projectName: "Mapty",
    projectSummary: `
    I developed an Interactive Workout Tracker using HTML, CSS, JavaScript,
     and Object-Oriented Programming (OOP) to provide users with a comprehensive 
     platform to log and visualize their workouts on an interactive map. 
     The application allows users to create and display their workouts, 
     categorized by type (Cycling in yellow and Running in green), with
    each workout displayed on the map. Users can easily navigate through a
     sidebar workout list, and selecting a workout zooms the map to the 
     corresponding location, offering a detailed view. The project 
    emphasizes modularity and reusability through OOP, ensuring 
    a maintainable and scalable codebase.
      `,
    websiteUrl: " https://shubham12346.github.io/Mapty.github.io/",
    videoUrl: MaptyVideo,
    imageUrl: MaptyImg,
  },
];
