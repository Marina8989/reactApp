import React from 'react';
import './index.css';
import Images from './components/Images';


class App extends React.Component{
  constructor(props) {
    console.log('App Contructor');
        super(props);
        this.state = {
          title: 'Hello React 2',
          isShowing: false
        }
        this.handleClick = this.handleClick.bind(this);
  }

   componentDidMount() {
     console.log('App Mounted');
     this.setState({title: 'Hello Lifecycle State'});
   }

   componentWillUnmount() {
     console.log('App Unmounted');
   }



  // states are immutable
 handleClick() {
   this.setState((prevState) => {
     return {
       isShowing: !prevState.isShowing
     }
   })
 }

  render() {
    console.log('App Render');
    return (
      <div style={{textAlign: 'center'}}>
         <div style={{marginTop: '1rem'}}>{this.state.title}</div>
         <div>
           <button onClick={this.handleClick} className="button" style={{padding: '10px', backgroundColor: 'lightblue', color: 'white'}}>Toggle Image</button>
            {this.state.isShowing ? <Images /> : null}
         </div>
      </div>
    )
  }
}




// function App() {
//   return (
//     <div>
//       <div className="box">Hello React</div>
//     </div>
//   )
// }

export default App;