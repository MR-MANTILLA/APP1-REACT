import React from "react";

const students=['Pepito','Jose','Ivan','Luis']
const course ={
      profesor:'pepito',
      name:'Mobile'
}
const Section = (props) => {
  return (
    <div className="card-body">
      <h1 className="card-title">{course.profesor}</h1>
      <p className="card-text">{course.name}</p>
    </div>
  );
}

export default class Body extends React.Component{
  constructor() {
    super();
    this.state={ show: false };
  }
  toggle() {
    this.setState({show:!this.state.show});
  }
  render() {
    return(
    <div className="container">
      <div className="row">
        <div className="col 1">
          <h1>*ngIf</h1>
          <button className="btn btn-secondary" onClick={this.toggle.bind(this)}>
            ver mas
          </button>
          {this.state.show ? <Section /> : null}
        </div>
        <div className="col 2">
                <h1>*ngFor</h1>
                <div className="list-group ">
                    {students.map(student=>{
                      return <li>{student}</li>
                      })
                      }
                </div>
            </div>
      </div> 
    </div>);
  }
} 

