import * as React from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends React.Component {
    render(){
        return(
            <div>
                <Link to="/pokemon">Pokemon</Link>
                <Link to="/tedsPage">Teds Page</Link>
            </div>
        )
    }
}