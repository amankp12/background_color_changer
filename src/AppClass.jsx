import { Component } from "react";
import './App.css'

class AppClass extends Component{
    constructor(){
        super()
        this.state={
            background:'#FFFFFF',
            height: 100,
            width:100
        }
    }

    change = () =>{
        const random_color = "#" + Math.round(Math.random()*10000000).toString(16);
        this.setState({background : random_color});
    }

    render(){
        return(
            <div className = "button" style={{backgroundColor : this.state.background, height : this.state.height + 'vh' , width : this.state.width + 'vw'}}>
                <button onClick={this.change}>Change</button>
            </div>
        )
    }
}

export default AppClass