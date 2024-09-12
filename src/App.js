import logo from './logo.svg';
import './App.css';
import TestComponent from './components/TestComponent';
import ClassComponent from './components/class_components/ClassComponent';
import SchoolComponent from './components/practice/props/SchoolComponent';
import ParentComponent from './components/practice/props/props_validation/ParentComponent';
import EventComponent from './components/practice/Events/EventComponent';
import StateHookComponent from './components/practice/hooks/StateHookComponent';

let name = "Test User";
function App() {
  return (
    <>
      {/* <TestComponent /> */}
      {/* <ClassComponent /> */}
      {/* <SchoolComponent /> */}
      {/* <ParentComponent /> */}
      {/* <EventComponent /> */}
      <StateHookComponent />
    </>
  );
}

export default App;