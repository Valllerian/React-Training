import Header from './components/Header'

function App() {
  const appName = 'Task Tracker';
  // const x = true;
  return (
    // can only have one parent element;
    <div className="container">
     <h1> {appName}!</h1>
     {/* <h2> So, {x ? 'Yes' : 'No'}. It`s is me. </h2>
     <Header title='How are you?'/> */}
     <Header/> 
    </div>
  );
}

export default App;


// return (
//   // can only have one parent element;
//   <div className="container">
//    <h1> Hey there! My hane is {name}!</h1>
//    <h2> So, {x ? 'Yes' : 'No'}. It`s is me. </h2>
//    <Header title='How are you?'/>
//   </div>
// );