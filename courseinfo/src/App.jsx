import Header from "./component/Header/Header";
import Contact from "./component/Contact/Contact";
import Total from "./component/Total/Total";

function App() {
  const Data = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercise: 10,
      },
      {
        name: "Using props to pass data",
        exercise: 7,
      },
      {
        name: "State of a component",
        exercise: 14,
      },
    ],
  };

  // Calculate total exercises
  const totalExercises = Data.parts.reduce((sum, part) => sum + part.exercise, 0);

  console.log(Data.parts);

  return (
    <>
      <Header name={Data.name} />
      <Contact contactdata={Data} />
      <Total total={totalExercises} />
    </>
  );
}

export default App;
