import React, { Component } from 'react'

class CardList extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default CardList;