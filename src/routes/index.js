import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { 
  ClassComponent,
  FunctionalComponent,
  StateComponent,
  PropsComponent,
  Events,
  ContditionalRendering,
  ListRendering,
  Lifecycle,
  ReverseProps,
  HTTP
} from '../components';


const Navigation = () => <nav>

  <ul>
    <li>
      <Link to="/ClassComponent" >Class Component</Link>
    </li>
    <li>
      <Link to="/FunctionalComponent" >Functional Component</Link>
    </li>
    <li>
      <Link to="/StateComponent" >State Component</Link>
    </li>
    <li>
      <Link to="/PropsComponent" >Props Component</Link>
    </li>
    <li>
      <Link to="/Events" >Events</Link>
    </li>
    <li>
      <Link to="/ReverseProps" >Reverse Props</Link>
    </li>
    <li>
      <Link to="/ContditionalRendering" >Contditional Rendering</Link>
    </li>
    <li>
      <Link to="/ListRendering" >Lists Rendering</Link>
    </li>
    <li>
      <Link to="/LifecycleHook" >Lifecycle Hooks</Link>
    </li>
    <li>
      <Link to="/Services" >Services</Link>
    </li>
  </ul>
</nav>;

function Routes() {
  return (
    <Router>
        <Switch style={{ paddingBottom: '100px'}}>
          <Route path="/ClassComponent" exact component={ClassComponent} />
          <Route path="/FunctionalComponent" exact component={FunctionalComponent} />
          <Route path="/StateComponent" exact component={StateComponent} />
          <Route path="/PropsComponent" exact render={() => <PropsComponent msg="Hello From Props 🌠, I'm Class Component ✌️ !" />} />
          <Route path="/Events" exact component={Events} />
          <Route path="/ReverseProps" exact component={ReverseProps} />        
          <Route path="/ContditionalRendering" exact component={ContditionalRendering} />
          <Route path="/ListRendering" exact component={ListRendering} />        
          <Route path="/LifecycleHook" exact component={Lifecycle} />
          <Route path="/Services" exact component={HTTP} /> 
        </Switch>
        <br/><br/>
        <Navigation />
    </Router>
  );
}

export default Routes;