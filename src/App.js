import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderBanner from './components/HeaderBanner'
import Navbar from 'react-bootstrap/Navbar'

function App() {
  return (
    <div className="App">
      
      <HeaderBanner />
      
      <div className = "profile-pic">
        <img src = "https://i.stack.imgur.com/ZhjNN.png" />
      </div>
      <div className = "intro-text">
        <h1 style={{fontSize: '100px'}}>{"Hi, my name is Jeremy Chow"}</h1>
      </div>
      
      <div className = "project-wrapper">
          <div className = "project">
            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero nunc consequat interdum varius sit amet mattis. At consectetur lorem donec massa sapien faucibus et. Augue neque gravida in fermentum et. Ut enim blandit volutpat maecenas volutpat blandit. At erat pellentesque adipiscing commodo. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Sed augue lacus viverra vitae congue eu consequat ac. Egestas purus viverra accumsan in nisl nisi. Sit amet facilisis magna etiam tempor orci eu. Nunc non blandit massa enim nec dui. Nunc sed blandit libero volutpat sed. At urna condimentum mattis pellentesque. Amet justo donec enim diam vulputate ut pharetra sit. Lacus luctus accumsan tortor posuere ac ut consequat. Tristique senectus et netus et malesuada fames. Vitae justo eget magna fermentum. Pulvinar pellentesque habitant morbi tristique. Ultricies integer quis auctor elit. Sit amet nulla facilisi morbi tempus. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Ipsum a arcu cursus vitae congue mauris. Sit amet facilisis magna etiam tempor orci. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Montes nascetur ridiculus mus mauris vitae ultricies leo. Sit amet consectetur adipiscing elit. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Eleifend donec pretium vulputate sapien nec sagittis. Ut tristique et egestas quis ipsum. Ac orci phasellus egestas tellus. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Convallis convallis tellus id interdum velit. Lectus nulla at volutpat diam ut venenatis tellus in. Sit amet porttitor eget dolor morbi non arcu risus. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Euismod in pellentesque massa placerat duis ultricies lacus. Auctor augue mauris augue neque gravida. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Justo donec enim diam vulputate ut pharetra sit. Porttitor leo a diam sollicitudin tempor id. Eget lorem dolor sed viverra ipsum nunc aliquet. Tellus in hac habitasse platea dictumst vestibulum. Lobortis elementum nibh tellus molestie nunc non blandit. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Interdum consectetur libero id faucibus nisl tincidunt. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Diam donec adipiscing tristique risus nec feugiat in fermentum. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Eu tincidunt tortor aliquam nulla facilisi. Lectus magna fringilla urna porttitor rhoncus dolor. Habitant morbi tristique senectus et netus. Aliquet sagittis id consectetur purus ut faucibus. Ultricies leo integer malesuada nunc vel risus commodo viverra. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Tellus at urna condimentum mattis pellentesque id nibh. Diam sit amet nisl suscipit. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Egestas tellus rutrum tellus pellentesque. Fames ac turpis egestas integer. Nulla facilisi etiam dignissim diam quis enim. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Quam elementum pulvinar etiam non quam. Convallis convallis tellus id interdum velit. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Congue quisque egestas diam in arcu cursus euismod."}
          </div>

          <div className = "project">
            Project 2
          </div>


      </div>

    </div>
  );
}

export default App;



// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <p>
//     Jeremy Chow
//   </p>
// </header>