const props = {
  user: {
    firstName: "Zen",
    lastName: "Sama",
    age: 22,
  },
  post: {
    title: "Destructuring and Spread",
    subtitles: "ES6",
    year: 2023,
  },
  skills: ["JS", "React", "Redux", "Node", "Python"],
};

const {
  user: { firstName, lastName, age },
  post: { title, subtitle, year },
  skills: [skillOne, skillTwo, skillThree, skillFour, skillFive],
} = props;

console.log(props.user.firstName);