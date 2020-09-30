import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      titulo: '',
      responsible: '',
      descripción: '',
      Prioridad: 'Baja'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      titulo: '',
      responsible: '',
      descripción: '',
      Prioridad: 'Baja'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="titulo"
              className="form-control"
              value={this.state.titulo}
              onChange={this.handleInputChange}
              placeholder="titulo"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="descripción"
              className="form-control"
              value={this.state.descripción}
              onChange={this.handleInputChange}
              placeholder="descripción"
              />
          </div>
          <div className="form-group">
            <select
                name="Prioridad"
                className="form-control"
                value={this.state.Prioridad}
                onChange={this.handleInputChange}
              >
              <option>Baja</option>
              <option>Mediana</option>
              <option>Alta</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;