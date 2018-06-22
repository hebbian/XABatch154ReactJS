import React from 'react'
import CompanyNavbar from './CompanyNavbar'
import CompanyJumbotron from './CompanyJumbotron'
import CompanyContainerAbout from './CompanyContainerAbout'


class Company extends React.Component {
    render() {
        return (
            <div>    
                <CompanyNavbar />
                <CompanyJumbotron />
                <CompanyContainerAbout />
            </div>
        )
    }
}

export default Company