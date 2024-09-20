import logo from './logo.svg';
import './App.css';
import TestComponent from './components/TestComponent';
import ClassComponent from './components/class_components/ClassComponent';
import SchoolComponent from './components/practice/props/SchoolComponent';
import ParentComponent from './components/practice/props/props_validation/ParentComponent';
import EventComponent from './components/practice/Events/EventComponent';
import StateHookComponent from './components/practice/hooks/StateHookComponent';
import UseEffectHookComponent from './components/practice/hooks/UseEffectHookComponent';
import Todo from './components/practice/list_and_keys/Todo';

let name = "Test User";
function App() {
  return (
    <>
      {/* <TestComponent /> */}
      {/* <ClassComponent /> */}
      {/* <SchoolComponent /> */}
      {/* <ParentComponent /> */}
      {/* <EventComponent /> */}
      {/* <StateHookComponent /> */}
      <UseEffectHookComponent />
      {/* <Todo /> */}
    </>
  );
}

export default App;