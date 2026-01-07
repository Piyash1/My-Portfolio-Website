export interface EducationItem {
  year: string;
  title: string;
  institution: string;
  score: string;
  logo: string;
}

export const educationData: EducationItem[] = [
  {
    year: "2020 - 2024",
    title: "B.Tech in Computer Science and Engineering",
    institution: "Lovely Professional University, Punjab",
    score: "CGPA: 7.74",
    logo: "/assets/images/education/lpu1.png",
  },
  {
    year: "2019",
    title: "Intermediate (Class 12th)",
    institution: "New Govt. Degree College, Rajshahi",
    score: "GPA: 5.00",
    logo: "/assets/images/education/college.png",
  },
  {
    year: "2017",
    title: "Matriculation (Class 10th)",
    institution: "Santhia Pilot Model High School, Pabna",
    score: "GPA: 5.00",
    logo: "/assets/images/education/school.png",
  },
];
