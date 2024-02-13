import React from "react";
import ReactDOM from "react-dom/client";

class App extends React.Component {
    render() {
        let number = 3;

        const text = {
            fontSize : "20px",
            fontWeight : "bold"
        }

        const luwi = {
            height : "200px",
            width : "300px",
            border : "2px solid",
            borderRadius : "4px"
        }

        const kenti = {
            height : "200px",
            width : "300px",
            backgroundColor : "red",
            color : "white"
        }

        if(number % 2 === 0) {
            return(
                <React.Fragment>
                    <div style={luwi}>
                        <p style={text}>ლუწი</p>
                    </div>
                </React.Fragment>
            )
        }else {
            return(
                <React.Fragment>
                    <div style={kenti}>
                        <p style={text}>კენტი</p>
                    </div>
                </React.Fragment> 
            )
        }
    }
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>);