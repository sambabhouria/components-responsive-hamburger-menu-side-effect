
import React from 'react'
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Navbar from './navigation/Navbar';

const Container = styled.div`
 padding: 1rem;
 text-align: center;
`

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Teams = () => <h1>Teams</h1>
const Potfolio = () => <h1>Potfolio</h1>
const Contact = () => <h1>Contact</h1>
const Discuss = () => <h1>Discuss</h1>
const Services = () => <h1>Services</h1>
const SignIn = () => <h1>SignIn</h1>
const SignUp = () => <h1>SignUp</h1>

const  App = () => {

  return (
    <Router>
      <Navbar />
      <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/teams" component={Teams} />
            <Route exact path="/potfolio" component={Potfolio} />
            <Route exact path="/contacts" component={Contact} />
            <Route exact path="/discuss" component={Discuss} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/signUp" component={SignUp} />
            <Redirect to="/" />
          </Switch>
        </Container>
    </Router>
  );
}

export default App;
