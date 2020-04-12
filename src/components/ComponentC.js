import React from 'react'
import { UserConsumer } from './Context'


class ComponentC extends React.Component {
    render() {
        return (
            <UserConsumer>
               { (username) => (
                   <div>
                   <h3>Hello {username.state.count}</h3> 
                   <button onClick={username.clickhandler}>Count</button>
                   </div>
               )
               }
            </UserConsumer>
        )
    }
}

export default ComponentC