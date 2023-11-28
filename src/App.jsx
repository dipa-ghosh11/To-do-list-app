import './App.css';

// function Mybutton(){
//   return(
//     <button>I'm a button</button>
//   );
// }

// const user={
//   name:'dipa',
//   imageurl:'.src/assets/6305536934772062146_121.jpg',
//   imagesize:90 
// };


function App(){
  return (
    <center>
    {/* <button type="button" className="btn btn-primary">Primary</button>
    <button type="button" className="btn btn-secondary">Secondary</button>
    <button type="button" className="btn btn-success">Success</button>
    <button type="button" className="btn btn-danger">Danger</button>
    <button type="button" className="btn btn-warning">Warning</button>
    <button type="button" className="btn btn-info">Info</button>
    <button type="button" className="btn btn-light">Light</button>
    <button type="button" className="btn btn-dark">Dark</button> */}

    <h1>To Do List</h1>
    <div className="txt-box">
      <div class="row">
    <div class="col">
        <input className="txt-box" type="text" placeholder="Enter task" />
    </div>
    <div class="col-md-auto">
      <input className="date-inp" type="date" />
    </div>
    <div class="col col-lg-2">
     <button type="button" className="btn btn-success">Create</button>
    </div>
  </div>
    </div>
     


</center>
  )
  
}

export default App;

