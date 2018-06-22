import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import SimpleMe from './components/simpleme/SimpleMe'
//import Company from './components/company/Company'

class App extends React.Component {
    state = {
        example: {
            text: 'State sample'
        }
    }

    clickHandler() {
        this.setState({
            example: {
                text: 'State changed!'
            }
        })
    }

    render() {
        return(
            <div>
                <SimpleMe />
            </div>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <SimpleMe />
    </BrowserRouter>,
    document.getElementById("root")
)