import React from 'react';
import Section from './section'
import './App.css';

class Page extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            text:undefined
        }
    }

    onclick=(text)=> {
        if(text) {
            this.setState({
                text : text
            })
        }
    }
    clearSelection = ()=> {
        this.setState({
            text : undefined
        })
    }
    render() {
       return (
           <>
            <div>
                {this.state.text}
            </div>
            <div>
                <Section text="X" onclick={this.onclick}/>
                <Section text="Y" onclick={this.onclick}/>
                <Section text="Z" onclick={this.onclick}/>
            </div>
            <div className="clear-text">
                <button onClick={this.clearSelection}>Clear Selection</button>
            </div>
          </>
       );
    }
 }


export default Page;