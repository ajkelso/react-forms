import React from 'react';

class Form extends React.Component {
  // state = {
  //   firstName: "John",
  //   lastName: "Henry",
  //   submittedData: []
  // }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addName()
  }

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map(data => {
  //     return <div><span>{data.firstName}</span><span>{data.lastName}</span></div>
  //   })
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.props.handleFirstNameChange} value={this.props.formData.firstName} />
          <input type="text" onChange={this.props.handleLastNameChange} value={this.props.formData.lastName} />
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default Form;