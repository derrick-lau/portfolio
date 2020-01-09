import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Project extends Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
        <div className='project'>
            <h1>{this.props.title}</h1>
            <h4>{this.props.service}</h4>
        <a href={this.props.url}>
            <img src={this.props.imageSrc} alt={this.props.title}></img>
        </a>

        </div> 
            </Fade>);
    }
}
 
export default Project;