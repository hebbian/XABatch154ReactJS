import React from 'react'

class ThirdContainer extends React.Component {
    render() {
        return (
            <div className="container-fluid bg-3 text-center">    
                <h3 className="margin">Where To Find Me?</h3><br />
                <div className="row">
                    <div className="col-sm-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src="https://www.w3schools.com/bootstrap/birds1.jpg" className="img-responsive margin" style={{width:'100%'}} alt="birds" />
                    </div>
                    <div className="col-sm-4"> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src="https://www.w3schools.com/bootstrap/birds2.jpg" className="img-responsive margin" style={{width:'100%'}} alt="birds" />
                    </div>
                    <div className="col-sm-4"> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src="https://www.w3schools.com/bootstrap/birds3.jpg" className="img-responsive margin" style={{width:'100%'}} alt="birds" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ThirdContainer