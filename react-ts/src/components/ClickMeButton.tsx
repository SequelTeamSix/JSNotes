import * as React from 'react';

interface ClickMeButtonProps {
    numClicks : number;
    increment: any;
    buttonColor?: any;
}
interface ClickMeButtonState {
    incrementNumber : number;
    buttonColor : any;
}

export class ClickMeButton extends React.Component <ClickMeButtonProps, ClickMeButtonState>{
    constructor(props:any){
        super(props);
        let buttonColor :any  = this.props.buttonColor;
        if(typeof this.props.buttonColor == "undefined"){
            buttonColor = "red";
        }
        this.state = {
            incrementNumber : 2,
            buttonColor : buttonColor
        }
    }
    render(){
        
        return(
        <>
            <button onClick = {() => this.props.increment(this.state.incrementNumber)}>Click me!</button>
            {
                //let's make a button that appears only if we have a certain amount of clicks
                this.props.numClicks >=10 &&
                <button onClick = {() => this.props.increment(this.state.incrementNumber*2)}>Big Click!</button>
            }
        </>
        )
    }
}