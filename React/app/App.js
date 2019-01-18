import React from 'react';
import Card from './components/Card';

class App extends React.Component{
    render(){
        return (
           <div>
               App
               <Card/>{/* Card当成标签使用 */} 
            </div> 
        )
    }
}

export default App;