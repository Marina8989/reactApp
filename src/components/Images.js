import React, { Component } from 'react'

export default class Images extends Component {
    constructor(props) {
        super(props)
         this.state = {
             interval: null
         }
    }


    componentDidMount() {
         console.log('Images Comp Mounted');

         this.setState({
             interval: setInterval(() => {
             console.log('Hello');
         }, 1000)
         })

    }
   
   componentWillUnmount() {
      console.log('Images Component Unmounted');

      clearInterval(this.state.interval);
   }

    render() {
        return (
            <div>
                <img src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmljeWNsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60" />
            </div>
        )
    }
}
