import { App } from "./component/App.js";

let loactionData = [
  {
    title: "French",
    subtitle: "35 lessons",
    image: "images/towerParis.svg",
    color: "#369FFF",
    cornerColor: "#006ED3",
    cornerOpacity: 0.2,
  },
  {
    title: "Portugese",
    subtitle: "30 lessons",
    image: "images/train.svg",
    color: "#FF993A",
    cornerColor: "#FF7E07",
    cornerOpacity: 0.4,
  },
  {
    title: "Italian",
    subtitle: "20 lessons",
    image: "images/towerPisa.svg",
    color: "#8AC53E",
    cornerColor: "#006838",
    cornerOpacity: 0.1,
  },
  {
    title: "German",
    subtitle: "40 lessons",
    image: "images/temple.svg",
    color: "#FDD456",
    cornerColor: "#EFB913",
    cornerOpacity: 0.5,
  },
];

let planningData = [
  {
    title: "Reading - Beginner Topic 1",
    hours: "8:00 AM - 10:00 AM",
    image: "images/imgPlanning/planning1.svg",
  },
  {
    title: "Reading - Beginner Topic 1",
    hours: "01:00 PM - 02:00 PM",
    image: "images/imgPlanning/planning2.svg",
  },
  {
    title: "Listening - Intermediate Topic 1",
    hours: "03:00 PM - 04:00 PM",
    image: "images/imgPlanning/planning3.svg",
  },
  {
    title: "Speaking - Advanced Topic 1",
    hours: "07:00 PM - 08:00 PM",
    image: "images/imgPlanning/planning4.svg",
  },
  {
    title: "Speaking - Beginner Topic 1",
    hours: "8:00 AM - 12:00 PM",
    image: "images/imgPlanning/planning5.svg",
  },
  {
    title: "Listening - Beginner Topic 1",
    hours: "8:00 AM - 12:00 PM",
    image: "images/imgPlanning/planning6.svg",
  },
  {
    title: "Grammar - Intermediate Topic 2",
    hours: "8:00 AM - 12:00 PM",
    image: "images/imgPlanning/planning7.svg",
  },
  {
    title: "Reading - Advanced Topic 1",
    hours: "8:00 AM - 12:00 PM",
    image: "images/imgPlanning/planning8.svg",
  },
];

let statsData = [
  { title: "Courses Completed", count: "02" },
  { title: "Total Points Gained", count: "250" },
  { title: "Courses In Progress", count: "03" },
  { title: "Tasks Finished", count: "05" },
];

let weeklyData = [80, 60, 50, 100, 55, 85, 80];

let app = document.querySelector("#app");
app.innerHTML = App({ loactionData, planningData, statsData, weeklyData });
