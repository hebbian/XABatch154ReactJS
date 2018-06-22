import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import FirstContainer from './FirstContainer'
import SecondContainer from './SecondContainer'
import ThirdContainer from './ThirdContainer'
import SMFooter from './SMFooter'


class SimpleMe extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <main>
                    <Switch>
                        <Route exact path='/' component={FirstContainer} />
                        <Route path='/what' component={SecondContainer} />
                        <Route path='/where' component={ThirdContainer} />
                    </Switch>
                </main>
            </div>
        )
    }
}

export default SimpleMe