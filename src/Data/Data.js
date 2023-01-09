// common image
import vector from "../assets/Vector.png";
import smallVector from "../assets/smallVector.png";
import settings from "../assets/settings.png";
import electricity from "../assets/electricity.png";
// car image
import minicooper from "../assets//car.png";
import maruti from "../assets/maruti-suzuki-suzuki-swift-car-suzuki-9c5818c39cb279f9dc7f844d7769288f.png";
import porsche from "../assets/mini-countryman-car-bmw-mini-cooper-mini-406b2a24c59d99a8096f336f22982573.png";
// fav icon
import { MdFavoriteBorder } from "react-icons/md";
// booking image
import audi from "../assets/car-audi-a3-audi-a4-car-3822c2bc08e2c2bce1d8ead0e70c7ddb (1).png";
import mercedes from "../assets/2014-mercedes-benz-m-class-2012-mercedes-benz-m-class-2008-mercedes-benz-m-class-sport-utility-vehicle-mercedes-car-png-image-8230b0372dd015bcf5312eb17e2751ee (1).png";
import toyota from "../assets/toyota-innova-toyota-avanza-car-rush-toyota-seven-cars-a3650fca54041ac1aaae4fe013ac79ca 1.png";
import suzuki from "../assets/maruti-suzuki-dzire-car-suzuki-ertiga-swift-dzire-f8a7d4ae19bd1c349dc080d9081ffd31.png";
import whiteCar from "../assets/white car.png";
import bookingUser from "../assets/bookingUser.png";
import bookingVector from "../assets/bookingVector.png";
// elipse image
import energy from "../assets/energy.png";
import range from "../assets/range.png";
import fluid from "../assets/fluid.png";
import tire from "../assets/tire.png";
export const recommendedCarsApi = [
  {
    text: "64% recommended",
    title: "mini cooper",
    img: minicooper,
    price: "$32/h",
    vector: vector,
    subText: "132k",
    backGround: "bg-[#E1DFA4]",
    icons: [{ icon: smallVector }, { icon: settings }, { icon: electricity }],
  },
  {
    text: "74% recommended",
    title: "porsche 911 carrera",
    img: maruti,
    price: "$28/h",
    subText: "132k",
    vector: vector,
    backGround: "bg-[#E3ECF1]",
    icons: [{ icon: smallVector }, { icon: settings }, { icon: electricity }],
  },
  {
    text: "74% recommended",
    title: "porsche 911 carrera",
    img: porsche,
    price: "$28/h",
    vector: vector,

    backGround: "bg-[#F4E3E5]",
    icons: [{ icon: smallVector }, { icon: settings }, { icon: electricity }],
  },
];
export const bookingCars = [
  {
    title: "porshe 718 cayman s",
    icon: <MdFavoriteBorder size={20} />,
    text: "coupe",
    img: audi,
    userIcon: bookingUser,
    userText: "4",
    vectorIcon: bookingVector,
    vectorText: "Manual",
    subText: "$400",
    category: "audi",
  },
  {
    title: "porshe 718 cayman s",
    icon: <MdFavoriteBorder size={20} />,
    text: "coupe",
    img: mercedes,
    userIcon: bookingUser,
    userText: "4",
    vectorIcon: bookingVector,
    vectorText: "Manual",
    subText: "$400",
    category: "mercedes",
  },
  {
    title: "porshe 718 cayman s",
    icon: <MdFavoriteBorder size={20} />,
    text: "coupe",
    img: toyota,
    userIcon: bookingUser,
    userText: "4",
    vectorIcon: bookingVector,
    vectorText: "Manual",
    subText: "$400",
    category: "toyota",
  },
  {
    title: "porshe 718 cayman s",
    icon: <MdFavoriteBorder size={20} />,
    text: "coupe",
    img: suzuki,
    userIcon: bookingUser,
    userText: "4",
    vectorIcon: bookingVector,
    vectorText: "Manual",
    subText: "$400",
    category: "suzuki",
  },
  {
    title: "porshe 718 cayman s",
    icon: <MdFavoriteBorder size={20} />,
    text: "coupe",
    userIcon: bookingUser,
    userText: "4",
    vectorIcon: bookingVector,
    vectorText: "Manual",
    img: minicooper,
    subText: "$400",
    category: "minicooper",
  },
  {
    title: "porshe 718 cayman s",
    icon: <MdFavoriteBorder size={20} />,
    text: "coupe",
    userIcon: bookingUser,
    userText: "4",
    vectorIcon: bookingVector,
    vectorText: "Manual",
    subText: "$400",
    img: maruti,
    category: "suzuki",
  },
  {
    title: "porshe 718 cayman s",
    icon: <MdFavoriteBorder size={20} />,
    text: "coupe",
    userIcon: bookingUser,
    userText: "4",
    vectorIcon: bookingVector,
    vectorText: "Manual",
    subText: "$400",
    img: porsche,
    category: "porsche",
  },
  {
    title: "porshe 718 cayman s",
    icon: <MdFavoriteBorder size={20} />,
    text: "coupe",
    userIcon: bookingUser,
    userText: "4",
    vectorIcon: bookingVector,
    vectorText: "Manual",
    subText: "$400",
    img: whiteCar,
    category: "toyota",
  },
  {
    title: "porshe 718 cayman s",
    icon: <MdFavoriteBorder size={20} />,
    text: "coupe",
    userIcon: bookingUser,
    userText: "4",
    vectorIcon: bookingVector,
    vectorText: "Manual",
    subText: "$400",
    img: audi,
    category: "audi",
  },
];
export const elipseApi = [
  {
    title: "energy",
    background: "bg-[#A162F7]",
    img: energy,
    imgBackground: "bg-[#A66FF0]",
    percentage: 45,
    color: "#FFFFFF",
    text: "45%",
    titleColor: "text-[#FFFFFF]",
    textColor: "#FFFFFF",
  },
  {
    title: "range",
    titleColor: "text-black",
    background: "bg-white",
    img: range,
    imgBackground: "bg-[#ff7e861a]",
    percentage: 50,
    text: "157k%",
    color: "#FF7E86",
    textColor: "black",
  },
  {
    title: "break fluid",
    titleColor: "text-black",
    background: "bg-white",
    img: fluid,
    imgBackground: "bg-[#a162f71a]",
    percentage: 9,
    color: "#A162F7",
    text: "9%",
    textColor: "black",
  },
  {
    title: "tire wear",
    titleColor: "text-black",
    background: "bg-white",
    img: tire,
    imgBackground: "bg-[#f6cc0d1a]",
    percentage: 25,
    color: "#F6CC0D",
    text: "25%",
    textColor: "black",
  },
];
export const statistics = [
  {
    x: "1 PM",
    y: 136,
  },
  {
    x: "2 PM",
    y: 124,
  },
  {
    x: "3 PM",
    y: 185,
  },
  {
    x: "4 PM",
    y: 107,
  },
  {
    x: "5 PM",
    y: 136,
  },
  {
    x: "6 PM",
    y: 78,
  },

  {
    x: "7 PM",
    y: 134,
  },
];

let keys = ["y"];
export const commonProperties = {
  margin: { top: 60, bottom: 60 },
  data: statistics,
  indexBy: "x",
  keys,
  padding: 0.5,
  enableGridX: false,
  enableGridY: false,
  axisLeft: null,
  enableLabel: false,
};
export const lineData = [
  {
    id: "days",

    data: [
      {
        x: "1 PM",
        y:56,
      },
      {
        x: "2 PM",
        y: 24,
      },
      {
        x: "3 PM",
        y: 185,
      },
      {
        x: "4 PM",
        y: 107,
      },
      {
        x: "5 PM",
        y: 136,
      },
      {
        x: "6 PM",
        y: 78,
      },
    
      {
        x: "7 PM",
        y: 134,
      },
    ],
  },
];
export const commonLineProp = {
  curve: "monotoneX",
  data: lineData,
  margin: { top: 60, bottom: 60, right: 20, left: 20 },
  colors: ["#FF764C"],
  defs: [
    {
      id: "gradientC",
      type: "linearGradient",
      colors: [
        { offset: 0, color: "#ff764c3d" },
        { offset: 100, color: "#ff7e0700" },
      ],
    },
  ],
  fill: [{ match: "*", id: "gradientC" }],
  enableLabel: false,
  startLabel: "id",
  axisLeft: null,
  enableGridY: false,
  enableGridX: false,
  enableArea: true,
  areaOpacity: 1,
  enablePoints: false,
};
