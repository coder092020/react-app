//section.js
import React from 'react';

class Section extends React.Component {
    constructor(props){
        super(props)
    }
    onclick=()=>{
        const {text} = this.props;
        this.props.onclick(`You selected ${text}`);
    }
    render() {
        return (
            <div>
                <p>{this.props.text}</p>
                <button onClick={this.onclick}>  I agree</button>
            </div>
        );
    }
    
 }


export default Section;