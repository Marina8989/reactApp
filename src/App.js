import React, { useState } from 'react';

function App() {
   return (
       <div>
           <Folder name={'Desktop'}>
               <Folder name={'Images'}>
                   <File name={'image.png'}/>
                   <File name={'pic.png'}/>
               </Folder>

            <File name={'index.html'}/>
           </Folder>
           <Folder name={'Application'}/>
       </div>
   )
}

const Folder = (props) => {
    console.log(props);
    const {name, children} = props;
    console.log(useState(false))
    return (
        <div style={{marginLeft: '15px'}}>
          <h3>{name}</h3>
          <h3 style={{marginLeft: '22px'}}>{children}</h3>
        </div>
    )
}

const File = (props) => {
    return (
      <h5>{props.name}</h5>
    )
}


export default App