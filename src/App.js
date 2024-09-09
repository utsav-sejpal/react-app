import logo from './logo.svg';
import './App.css';
import TestComponent from './components/TestComponent';
import ClassComponent from './components/class_components/ClassComponent';
import SchoolComponent from './components/practice/props/SchoolComponent';


let name = "Test User";
function App() {
  return (
    <>
      {/* <TestComponent /> */}
      {/* <ClassComponent /> */}
      <SchoolComponent />
    </>
  );
}

export default App;
