import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import wedding from './jeremy.jpg';
import mountain_wedding from './jeremy.jpg';
import drummer from './nathaniel.jpg';
import biggy from './biggy.jpeg';
import children from './martin.jpg';
import food from './food1.jpeg';
import dance from './dance1.jpg';
import tractor from './tractor.jpg';

export default () => (
  <Carousel autoPlay infiniteLoop width='800px' centerMode transitionTime={500}>
    <div>
      <img src={wedding} alt='wedding'/>
      <p className='legend'>A unique I do event?</p>
    </div>
    <div>
      <img src={mountain_wedding} alt='mountain wedding'/>
      <p className='legend'>Yeah, scream it from the rooftops?</p>
    </div>
    <div>
      <img src={drummer} alt='man drumming'/>
      <p className='legend'>We agree the world should hear your voice!</p>
    </div>
    <div>
      <img src={biggy} alt="tape around a man's stomach"/>
      <p className='legend'>Even if you'd rather go veggie</p>
    </div>
    <div>
      <img src={children} alt='children with a camera'/>
      <p className='legend'>We will always cover you!</p>
    </div>
    <div>
      <img src={food} alt='roasted plantains'/>
      <p className='legend'>Whether you're at this</p>
    </div>
    <div>
      <img src={dance} alt='dancers'/>
      <p className='legend'>Or at this!</p>
    </div>
    <div>
      <img src={tractor} alt='drone watching tractor pulling people'/>
      <p className='legend'>We see you and we will make your day MEMORY-able!</p>
    </div>
  </Carousel>
)