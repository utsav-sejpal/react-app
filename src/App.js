import logo from "./logo.svg";
import "./App.css";
import TestComponent from "./components/TestComponent";
import ClassComponent from "./components/class_components/ClassComponent";
import SchoolComponent from "./components/practice/props/SchoolComponent";
import ParentComponent from "./components/practice/props/props_validation/ParentComponent";
import EventComponent from "./components/practice/Events/EventComponent";
import StateHookComponent from "./components/practice/hooks/StateHookComponent";
import UseEffectHookComponent from "./components/practice/hooks/UseEffectHookComponent";
import Todo from "./components/practice/list_and_keys/Todo";
import ListAndKeysComponent from "./components/practice/list_and_keys/ListAndKeysComponent";
import Form from "./components/practice/form/Form";
import SimpleFormValidation from "./components/practice/form/SimpleFormValidation";
import UseRefHookComponent from "./components/practice/hooks/UseRefHookComponent";
import LiftingStateParent from './components/practice/props/lifting_stateup/ParentComponent';
import StyleComponent from "./components/practice/style/StyleComponent";
import ForwardRefParent from "./components/practice/hooks/forwarding_ref/ParentComponent";
import FragmentComponent from "./components/practice/fragment/FragmentComponent";
import Component1 from "./components/practice/hooks/props_driling/Component1";
import ContexParentComponent from "./components/practice/hooks/contex/ParentComponent";

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
      {/* <UseEffectHookComponent /> */}
      {/* <ListAndKeysComponent /> */}
      {/* <Todo /> */}
      {/* <Form /> */}
      {/* <SimpleFormValidation /> */}
      {/* <Form/> */}
      {/* <UseRefHookComponent /> */}
      {/* <LiftingStateParent /> */}
      {/* <ForwardRefParent /> */}
      {/* <FragmentComponent /> */}
      {/* <Component1 /> */}
      <ContexParentComponent />
    </>
  );
}

export default App;
