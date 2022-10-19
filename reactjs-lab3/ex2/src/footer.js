import * as React from "react";

class Footer extends React.Component{
    render() {  
    return (
    
    <footer alt="tests">
    
    <button className={transform} onClick={this.handleClick}>
    </button>
    
    </footer>
    
    );
    
    }
    
    }
    
    
         class transform extends React.Component {
    
          constructor(transform) {
    
          super(transform);
    
          this.handleClick = this.handleClick.bind(this);
    
        }
    
          handleClick() {
          alert (test);
      }
     }
    
     
    
    export default Footer;