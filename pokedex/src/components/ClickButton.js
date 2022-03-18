import * as React from 'react';

export class ClickButton extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <button onClick={()=>this.props.buyPokeBall()}>Buy Pokeball!</button>
            </div>
        )
    }
}