import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <NavBar />
                <Banner />
            </div>
        )
    }
}

export default HomePage
