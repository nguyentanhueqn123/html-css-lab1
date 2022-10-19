import * as React from "react";

class MyComponent extends React.Component{
    // state = {
    //     first: false,
    //     second: true,
    // };

    
    // render(){
    //     const { first, second }= this.state;
    //     return(
    //         <main>
    //             <section>
    //                 <button disabled={first}>First</button>
    //             </section>
    //             <section>
    //                 <button disabled={second}>Second</button>
    //             </section>
    //         </main>

    //     );
    // }
    state = {
        heading: "React Awesomesauce (Busy)",
        content: "Loading...",
    }
    constructor() {
        super();
        setTimeout(() =>{
            this.setState({
                heading: "React Awesomesauce",
                content: "Done!",
            });
        }, 3000)
    }
    render(){
        const { heading, content}= this.state;
        return(
            <main>
                <h1>{heading}</h1>
                <p>{content}</p>
            </main>
        )
    }


   
}
export default MyComponent;