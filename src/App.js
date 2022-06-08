import "./App.css";
import HooksAutoCounter from "./components/Hooks/HooksAutoCounter";
// import ClassAutoCounter from "./components/ClassAutoCounter";
// import HooksMouseHandler from "./components/Hooks/HooksMouseHandler";
// import MouseContainer from "./components/Hooks/MouseContainer";
// import ClassMouseListener from "./components/ClassMouseListener";
// import ClassTitleUpdater from "./components/ClassTitleUpdater";
// import HooksTitleUpdater from "./components/Hooks/HooksTitleUpdater";
// import HookCounterFour from "./components/Hooks/HookCounterFour";
// import HooksName from "./components/Hooks/HooksName";
// import HooksCounterTwo from "./components/Hooks/HooksCounterTwo";
// import HooksDemo from "./components/Hooks/HooksDemo";
// import HttpPost from "./components/HTTP/HttpPost";
// import ComponentA from "./components/ContextAPI/ComponentA";
// import { UserProvider } from "./components/ContextAPI/userContext";
// import HttpGet from "./components/HTTP/HttpGet";
// import ClickCounterTwo from "./components/RenderProps/ClickCounterTwo";
// import Counter from "./components/RenderProps/Counter";
// import HoverCounterTwo from "./components/RenderProps/HoverCounterTwo";
// import ErrorBoundary from "./components/ErrorBoundary";
// import Hero from "./components/Hero";
// import ClickCounter from "./components/HigherOrderComponent/ClickCounter";
// import HoverCounter from "./components/HigherOrderComponent/HoverCounter";
// simport PortalDemo from "./components/PortalDemo";
// import ForwRefParentInput from "./components/Refs/ForwRefParentInput";
//import ParentRefComp from "./components/Refs/ParentRefComp";
//import NewRefDemo from "./components/Refs/NewRefDemo";
//import OldRefDemo from "./components/Refs/OldRefDemo";
// import ParentComp from "./components/TestFolder/ParentComp";
// import Table from "./components/Fragment/Table";
// import ParentComp from "./components/PureComponents/ParentComp";
// import LifecycleA from "./components/Lifecycle_methods/LifecycleA";
//import Form from "./components/Form";
// import InlineStylesheet from "./components/InlineStylesheet";
//import Stylesheets from "./components/Stylesheets";
//import ConditionalRendereing from "./components/ConditionalRendereing";
//import PersonList from "./components/PersonList";
//import Greet from "./components/Greet";
//import Welcome from './components/Welcome'
// import Hello  from './components/Hello'
//import StateExample from './components/StateExample'
//import Counter from './components/Counter'
//import ParentComponent from './components/ParentComponent'
// import './appStyle.css'
// import style from './appStyle.module.css'

function App() {
  return (
    <div className="App">
      <HooksAutoCounter/>
      {/* <ClassAutoCounter/> */}
      {/* <MouseContainer/> */}
      {/* <HooksMouseHandler/> */}
      {/* <ClassMouseListener/> */}
      {/* <ClassTitleUpdater/> */}
      {/* <HooksTitleUpdater/> */}
      {/* <HookCounterFour/> */}
      {/* <HooksName/> */}
      {/* <HooksCounterTwo /> */}
      {/* <HttpPost/> */}
      {/* <HttpGet /> */}

      {/* <UserProvider value = 'Shreyash'>
        <ComponentA />
      </UserProvider> */}
      {/* <Counter
        render={(count, incrementCounter) => {
          return (<ClickCounterTwo count={count} incrementCounter={incrementCounter} />);
        }}
      />
      <Counter
        render={(count, incrementCounter) => {
          return(<HoverCounterTwo count={count} incrementCounter={incrementCounter} />);
        }}
      /> */}

      {/* <ClickCounter name='shreyash'/>
      <HoverCounter/> */}

      {/*  <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}

      {/* <PortalDemo/>s */}
      {/* <ForwRefParentInput /> */}
      {/* <ParentRefComp/> */}
      {/* <ParentComp/> */}
      {/* <Table/> */}
      {/* <LifecycleA/> */}
      {/* <Form/> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={style.success}>Success</h1>
      <InlineStylesheet /> */}
      {/* < Stylesheets primary= {true}/> */}

      {/*<br></br>
      <Greet name="Tony" aka="Iron Man">
        This is Children Props
      </Greet>

      <Greet name="Bruce" aka="Hulk" />

      <Greet name="Thor" aka="God of Thunder">
        <button>Click Here</button>
      </Greet> */}

      {/* <Welcome name='Steve' aka='Captain America' /> */}
      <br></br>
      {/*<Hello />*/}

      {/* <StateExample /> */}

      {/* <Counter/> */}

      {/* <ParentComponent/> */}

      {/* <ConditionalRendereing/> */}

      {/* <PersonList/> */}
    </div>
  );
}

export default App;
