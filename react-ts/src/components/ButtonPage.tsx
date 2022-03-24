import * as React from 'react';
import { ClickMeButton } from './ClickMeButton';
import { NumberDisplay } from './NumberDisplay';


export class ButtonPage extends React.Component<{}, {num: number}>{
    constructor(props:{}) {
        super(props);
        this.state={
            num:0
        }
    }
    public increment(num : number){
        let newNum : number = this.state.num + num;
        this.setState({num : newNum})
    }
    render(): React.ReactNode {
        return (
            <div>
                {/* bind?
                bind makes it so that increment belongs to *this* class 
                because passing a this.{something} makes 'this' ambiguous*/}
                <ClickMeButton numClicks = {this.state.num} increment={this.increment.bind(this)}/>
                <NumberDisplay buttonNumber = {this.state.num}/>
            </div>
        )
    }
}