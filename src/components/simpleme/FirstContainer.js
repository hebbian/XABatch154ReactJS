import React from 'react'
import axios from 'axios'

class FirstContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userdata: {
                fullname: '',
                picture: 'http://placehold.it/1000x1000?text=no picture',
                email: ''
            }
        }
    }

    componentDidMount() {
        this.doRequestUserdata()
    }

    doRequestUserdata() {
        axios.get('https://randomuser.me/api/')
        .then((userdata) => {
            let data = userdata.data.results[0]
            this.setState({
                userdata: {
                    fullname: data.name.first.toUpperCase()+' '+data.name.last.toUpperCase(),
                    email: data.email,
                    picture: data.picture.large
                }
            })
            console.log(this.state)
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="container-fluid bg-1 text-center">
                <h3 className="margin">Who Am I?</h3>
                <img src={this.state.userdata.picture} className="img-responsive img-circle margin" style={{display: 'inline'}} alt="Bird" width="350" height="350" />
                <h3>{this.state.userdata.fullname}</h3>
                <p>{this.state.userdata.email}</p>
                <button className="btn btn-default" onClick={this.doRequestUserdata.bind(this)}>reload</button>
            </div>
        )
    }
}

export default FirstContainer