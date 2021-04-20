import React from "react";

const students=['Pepito','Jose','Ivan','Luis']
const coourse ={
      profesor= 'pepito',
      name='Mobile'
}
const Section = (props) => {
  return (
    <div className="card-body">
      <h1 className="card-title">{profesor}</h1>
      <p className="card-text">{name}</p>
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
          <h1>*ngIf en React</h1>
          <button className="btn btn-danger" onClick={this.toggle.bind(this)}>
            Clic
          </button>
          {this.state.show ? <Section /> : null}
        </div>
        <div className="col 2">
                <h1>Lista de estudiantes *ngFor en React</h1>
                <ul className="list-group ">
                    {students.map(student=>{
                      return <li>{student}</li>
                      })
                      };
                </ul>
            </div>
      </div> 
    </div>);
  }
} 

