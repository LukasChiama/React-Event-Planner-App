import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default () => (
  <Carousel autoPlay infiniteLoop width='1200px' centerMode transitionTime='500'>
  <div>
      <img src='/img/wedding.jpg' alt='wedding'/>
      <p className='legend'>A unique I do event?</p>
    </div>
    <div>
      <img src='/img/nathaniel.jpg' alt='man drumming'/>
      <p className='legend'>We agree the world should hear your voice!</p>
    </div>
    <div>
      <img src='/img/biggy.jpeg' alt=''/>
      <p className='legend'>Even if you'd rather go veggie</p>
    </div>
    <div>
      <img src= '/img/martin.jpg' alt=''/>
      <p className='legend'>We will always cover you!</p>
    </div>
    <div>
      <img src='/img/food1.jpeg' alt='food'/>
      <p className='legend'>Whether you're at this</p>
    </div>
    <div>
      <img src='/img/dance1.jpg' alt=''/>
      <p className='legend'>Or at this!</p>
    </div>
    <div>
      <img src='/img/tractor.jpg' alt=''/>
      <p className='legend'>We see you and we will make your day MEMORY-able!</p>
    </div>
  </Carousel>
)