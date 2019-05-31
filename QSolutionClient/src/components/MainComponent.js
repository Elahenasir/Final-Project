import React, { Component } from 'react';

class MainComponent extends Component {
render(){
    return(
      <div className='main'>
        <br/>
        <h3>YOU CAN ASK QUESTIONS ABOUT:</h3>
        <hr/>
        <br/>
        <div class="row">
  <div class="col-sm" className='column'>
  <span class="e96-10 x-image">
  <img alt="Image" src="http://codeyourfuture.io/wp-content/uploads/2019/03/tablet.d8d83b38.png" width="70" height="70"/>
</span>
<div class="e96-11 x-bar-content-area" >
  <p><strong>HTML &amp; CSS</strong></p>
<p>Fundamentals of the web. Structure and style static web pages using best front-end practices.</p></div>
  </div>
  <div class="col-sm" className='column'><div class="e96-12 x-column x-sm x-1-5">
    
    <span class="e96-13 x-image">
      <img alt="Coding brackets image for Javascript" src="http://codeyourfuture.io/wp-content/uploads/2019/03/code.f4e20b73.png" width="70" height="70"/>
    </span>
    
    <div class="e96-14 x-bar-content-area">
      <p><strong>JavaScript</strong></p>
    <p>A powerful modern scripting language to build web applications.</p></div>
    </div></div>
  <div class="col-sm" className='column'><div class="e96-15 x-column x-sm x-1-5">
    
    <span class="e96-16 x-image">
      <img alt="Node .js logo for node.js paragraph" src="http://codeyourfuture.io/wp-content/uploads/2019/03/nodejs.949ce556.png" width="70" height="70"/>
    </span>
    
    <div class="e96-17 x-bar-content-area">
      <p><strong>Node.js</strong></p>
    <p>Web application back-end development powered by modern and fast Node.js.</p></div>
    </div></div>
  <div class="col-sm" className='column'><div class="e96-18 x-column x-sm x-1-5">
    
    <span class="e96-19 x-image">
      <img alt="Image" src="http://codeyourfuture.io/wp-content/uploads/2019/03/react.a0a9cca5.png" width="70" height="70"/>
    </span>
    
    <div class="e96-20 x-bar-content-area">
      <p><strong>React</strong></p>
    <p>A Javascript library for building user interfaces.</p></div>
    </div></div>

</div>
     </div>

    ) 
  
}
}

export default MainComponent;