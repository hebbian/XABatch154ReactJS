import React from 'react'

const SingleImage = (props) => {
    return (
        <div className="col-sm-3">
            <p>{props.text}</p>
            <img src="https://placehold.it/150x80?text=IMAGE"  style={{width: '100%'}} class="img-responsive" alt="Image" />
        </div>
    )
}

class Gallery extends React.Component {
    state = {
        gallery: [
            {text: 'work1'},
            {text: 'work2'},
            {text: 'work3'},
            {text: 'work4'},
            {text: 'work5'},
            {text: 'work6'},
            {text: 'work7'},
            {text: 'work8'},
        ]
    }
    render() {
        return (
            <div className="container-fluid bg-3 text-center">    
                <h3>Some of my Work</h3>
                <br />
                <div className="row">{
                    this.state.gallery.map((ele, index) => {
                        return <SingleImage key={index} text={ele.text} />
                    })}
                </div>
            </div>
        )
    }
}

export default Gallery