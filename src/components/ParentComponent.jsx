import React from 'react'
import Form from './Form'
import DisplayData from './DisplayData'

class ParentComponent extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        submittedData: []
    }

    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    addName = () => {
        let formData = { 
            firstName: this.state.firstName, 
            lastName: this.state.lastName 
        }
        let dataArray = this.state.submittedData.concat(formData)
        this.setState({
            firstName: "",
            lastName: "",
            submittedData: dataArray
        })

    }

    render() {
        return(
            <div>
                <Form formData={this.state} handleFirstNameChange={this.handleFirstNameChange} handleLastNameChange={this.handleLastNameChange} addName={this.addName}/>
                <DisplayData  formData={this.state.submittedData} />
            </div>
        )
    }
}

export default ParentComponent