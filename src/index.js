import React from 'react';
import ReactDOM from 'react-dom';
import OpenForm from './openForm.js';
import NaviGate from './navbar.js';
//import EventList from './eventlist.js';
import Carousel from './body.js';
import './index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.css';

class Welcome extends React.Component {
  
}

class App extends React.Component {
  render() {
    return (
        // <Welcome/>
        <div className='page'>
         <div className ='form'><OpenForm/></div>
         <div className='navbar'><NaviGate/></div>
          <div className='Carousel'><Carousel/></div>
        </div>
       
        // <div className='events'>
        //   <EventList/>
        // </div>
    );
  }
}

ReactDOM.render (
  <App/>,
  document.getElementById('root')
)