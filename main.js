//for in loop

const data={
    firstName: "Zen",
    lastName: "Sama",
    age: 22,
    country: "Nepal",
    skills: ['HTML','CSS','JS','django','SQLite','Python']
};

for(const d in data)
{
    console.log(d,data[d]);
}