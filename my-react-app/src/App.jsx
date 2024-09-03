// import React, { useState } from 'react'

// const App = () => { 
//   // let count=0
//   let [count,SetCount]=   useState(0)
//   function fun1(){
//     // console.log('hello');
//     SetCount(count+1)
 
//   }
//   return (
//     <div>
//   <p>{count}</p>
//        <button onClick={fun1}>click me</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App



import React from 'react'
import './App.css'
import Navbar from './Navbar'
const App = () => {
  return (
    <div>
      <Navbar/>
      <div id='parent'>
        <div id='child-a'>
          <img src='https://images.unsplash.com/photo-1724781571721-4dd8efdc1486?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        </div>
        <div id='child-b'>
          <img src='https://plus.unsplash.com/premium_photo-1724071104748-e880dc9e80a1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        </div>

      </div>
    </div>
  )
}

export default App