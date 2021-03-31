import './App.css';
import axios from 'axios';
import React, { Component } from 'react';

export default class comp extends Component {
    state={
        persons:[],
    }
    componentDidMount(){
        axios.get('./data.json').then(res=>{
            console.log(res.data);
            this.setState({persons:res.data});
        })
    }
    render() {
        return (
            <div className="main">
                <table className="table">
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
             

                {this.state.persons.map(person=>
                    
                    <tr key="id">
                        <td>{person.name}</td>
                        <td>{person.age}</td>
                        <td>{person.city}</td>



                    </tr> )}
                       </table>
            </div>
        )
    }
}
