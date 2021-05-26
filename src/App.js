import React from 'react';
import './index.css';


class App extends React.Component{
  constructor(props) {
        super(props);
        this.state = {
          title: 'Hello React 2',
          isShowing: false
        }
  }
  // states are immutable

  render() {
    return (
      <div style={{textAlign: 'center'}}>
         <div style={{marginTop: '1rem'}}>{this.state.title}</div>
         <div>
           <button onClick={() => this.setState({isShowing: !this.state.isShowing})} className="button" style={{padding: '10px', backgroundColor: 'lightblue', color: 'white'}}>Toggle Image</button>
           {this.state.isShowing ? (
           <img src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmljeWNsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60" />
           ) : null}
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