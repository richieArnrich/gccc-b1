import Layout from "./components/Layout";
import FuncState from "./concepts/FuncState";
import FunctComp from "./concepts/FunctComp";
import ToggleState from "./concepts/ToggleState";
function App() {
  let obj = {
    name: "Amith",
    age: 23,
  };
  return (
    <>
      {/* <h1>Hello World</h1> */}
      {/* <Layout /> */}
      {/* <FunctComp data={obj} /> */}
      {/* sending the obj as a prop */}
      {/* <FuncState /> */}
      <ToggleState />
    </>
  );
}

export default App;
// the component/function which calls another function is called as parent component
// the function/component which is being called is called as the child component
// when data is passed from parent component to the child component it is called as props (properties)
// props is an object of data passed from parent to child component
// props originates in the parent component but accessed in the child component
