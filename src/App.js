import React, {Component} from "react"


class App extends Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: ["a", "b"] //empty the array and see the difference.
        }
    }
    // &&
    // false && false
    render() {
        return (
            <div>
                {
                    this.state.unreadMessages.length > 0 &&
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                }
            </div>
        )
    }
}

export default App
