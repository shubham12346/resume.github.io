import indexnine_logo from "../assets/indexnine_technologies_logo.jpeg";
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
};
