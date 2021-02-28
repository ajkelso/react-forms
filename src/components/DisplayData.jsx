import React, { Component } from 'react'

export default class DisplayData extends Component {
    
    listOfSubmissions = () => {
        return this.props.formData.map(data => {
            console.log(data);
          return <div><span>{data.firstName}</span><span>{data.lastName}</span></div>
        })
      }

    render() {
        return(
            <div>{this.listOfSubmissions()}</div>
        )
    }
}