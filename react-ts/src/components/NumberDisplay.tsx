import * as React from 'react';


interface numberDisplayProps {
    buttonNumber : number;
}

interface numberDisplayState {

}

export class NumberDisplay extends React.Component<numberDisplayProps, numberDisplayState> {
    
    
    public render(){
        return(
            <div>
                Current number: {this.props.buttonNumber};
            </div>
        )
    }
}