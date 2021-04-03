import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class comp extends Component {
state={
  Films:[],
}
componentDidMount(){
  axios.get('./data.json').then(item=>{
    this.setState({Films:item.data.films});
  })
}
    render() {
      return (
          <Container className="Container">
          <Row>
          {this.state.Films.map(Film=>
            <Col className="Col" xs={5} s={12} lg={4} md={5}  xl={4}>
            <img src={Film.img} alt=""/>
            <h1>{Film.name}</h1>
            <p className="pragraph">{Film.year}</p>
            </Col>)}
          </Row>
        </Container>
    
       
      
        )
    }
}
