const rectangle = { width: 20, height: 10 };
const calculateArea = (width, height) => width * height;

console.log(`Rectangle Width: ${rectangle.width}`);
console.log(`Rectangle Height: ${rectangle.height}`);

const calculatePerimeter = ({ width, height }) => 2 * (width + height);

const perimeter = calculatePerimeter(rectangle);

console.log(`Calculated Perimeter: ${perimeter}`);
