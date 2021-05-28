import React, {useState, useEffect} from 'react';
import './index.css';
import Images from './components/Images';


function App() {
   
  const [title, setTitle] = useState('Hello React');
  const [isShowing, setIsShowing] = useState(null);

  // component Did Mount ONLY
  useEffect(() => {
    console.log('App Mounted');
  }, []);


  useEffect(() => {
    if(isShowing !== null) {
      console.log('App Updated');
    }
  }, [isShowing]);


  function handleClick() {
  setIsShowing(!isShowing);
 }


  return (
    <div style={{textAlign: 'center'}}>
    {console.log('rerendered')}
         <div style={{marginTop: '1rem'}}>{title}</div>
         <div>
           <button onClick={handleClick} className="button" style={{padding: '10px', backgroundColor: 'lightblue', color: 'white'}}>Toggle Image</button>
            {isShowing ? <Images /> : null}
         </div>
      </div>
  )
}







//class App extends React.Component{
  // constructor(props) {
  //   console.log('App Contructor');
  //       super(props);
  //       this.state = {
  //         title: 'Hello React 2',
  //         isShowing: false
  //       }
  //       this.handleClick = this.handleClick.bind(this);
  // }

//    componentDidMount() {
//      console.log('App Mounted');
//      this.setState({title: 'Hello Lifecycle State'});
//    }

//    componentDidUpdate() {
//      console.log('App Updated');
//    }


//   // states are immutable
//  handleClick() {
//    this.setState((prevState) => {
//      return {
//        isShowing: !prevState.isShowing
//      }
//    })
//  }

//   render() {
//     console.log('App Render');
//     return (
//       <div style={{textAlign: 'center'}}>
//          <div style={{marginTop: '1rem'}}>{this.state.title}</div>
//          <div>
//            <button onClick={this.handleClick} className="button" style={{padding: '10px', backgroundColor: 'lightblue', color: 'white'}}>Toggle Image</button>
//             {this.state.isShowing ? <Images /> : null}
//          </div>
//       </div>
//     )
//   }
// }




// function App() {
//   return (
//     <div>
//       <div className="box">Hello React</div>
//     </div>
//   )
// }

export default App;