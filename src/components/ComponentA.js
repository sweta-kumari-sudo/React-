import React from 'react'
import ComponentB from './ComponentB'
import { UserProvider } from './Context';


class ComponentA extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            
        }
    }

    
    
    render() {
        return (
            <div>
                <h1>Sweta</h1>
            <UserProvider value={{
                state: this.state.count,
                clickHandler: () => {
                  this.setState( prevState => {
                      return { count: prevState.count + 1}
                  })
              }
              }}
              >
                  
                  {this.props.children}
            </UserProvider>
            {/* <ComponentB /> */}
            </div>


        )
    }
}

export default ComponentA