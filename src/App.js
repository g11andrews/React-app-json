import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: [],
    users: []
  }
  componentDidMount() {
    {/*
    Retrieves JSON data from a resource.
    In this case I am fetching from a URL.
    Stores it in JSON format with a catch statement.
    Catch statement simply exists because fetch is a fail-less method.
    Even if the resource does not exist, fetch will 'succeed'.
    */}
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ users: data })
      console.log(this.state.users)
    })
    .catch(console.log)
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
  }
  render() {
    return (
        
       <div className="row">
        {/*Row is used for a table-like appearance.*/}
        <div className="col-sm-6">
        <h1 id="todo">Todo List</h1>
        {/*itemizes json data to put into bootstrap cards*/}
        {this.state.todos.map((todo) => (
        
          <div className="card">
            <div className="card-body">
              <h5 className="card-title" id="todoTitle">{todo.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                  <span>
                    UserID: {todo.userId}
                  </span>
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <span>
                    ID: {todo.id}
                    </span>
                  </h6>
                  <h6 className="card-footer " id="cardTitle">
                  { todo.completed &&
                    <span className="text-success">
                    Completed
                    </span>
                  }
                  { !todo.completed &&
                    <span className="text-danger">
                      Pending
                    </span>
                  }   
                  </h6>
            </div>
          </div>
        ))}
        </div>

        {/*Next we will display the json user data next to our json todo-list*/}
        
    <div className="col-sm-6">
        <h1 id="userTitle">User List</h1>
        {/*This acts as the table head*/}
          <div className="container-fluid" id= "userContainer">
            <div className="row" id= "userUser">
              <h5 className="col-sm-12">User ID</h5>
                  <h6 className="card col-sm-2 border-dark" id="name">
                    Name 
                  </h6>
                  <h6 className="card col-sm-2 border-dark" id="username">
                    Username 
                  </h6>
                  <h6 className="card col-sm-2 border-dark" id="email">
                    Email
                  </h6>
                  <h6 className="card col-sm-6 border-dark" id="address">
                    Address
                  </h6>
                  <h6 className="card col-sm-2 border-dark" id="street">
                    Street 
                  </h6>
                  <h6 className="card col-sm-2 border-dark" id="suite">
                    Suite
                  </h6>
                  <h6 className="card col-sm-2 border-dark" id="city">
                    City
                  </h6>
                  <h6 className="card col-sm-2 border-dark" id="zip">
                    Zip Code 
                  </h6>
                  <h6 className="card col-sm-4 border-dark" id="geo">
                    Geo Coordinates 
                  </h6>
                  <h6 className="card col-sm-2 border-dark" id="lat">
                    Latitude
                  </h6>
                  <h6 className="card col-sm-2 border-dark" id="lon">
                    Longitude
                  </h6>
                  <h6 className="card col-sm-4 border-dark" id="phone">
                    Phone 
                  </h6>
                  <h6 className="card col-sm-4 border-dark" id="website">
                    Website
                  </h6>
                  <h6 className="card col-sm-6 border-dark" id="company">
                    Company
                  </h6>
                  <h6 className="card col-sm-2 border-dark" id="companyname">
                    Company Name 
                  </h6>
                  <h6 className="card col-sm-4 border-dark" id="catch">
                    Company Catch Phrase
                  </h6>
                  <h6 className="card col-sm-6 border-dark" id="bs">
                    Company BS
                  </h6>
            </div>
        </div>
       
        {/*itemizes json data to put into bootstrap cards*/}
        {this.state.users.map((user) => (
          <div className="container-fluid" id= "userContainer">
            <div className="row" id= "userUser">
              <h5 className="col-sm-12">{user.id}</h5>
                  <h6 className="card col-sm-2 border-dark" id="name">
                    {user.name} 
                  </h6>
                  <h6 className="card col-sm-2 border-dark" id="username">
                    {user.username} 
                  </h6>
                  <h6 className="card col-sm-2 border-dark" id="email">
                    {user.email}
                  </h6>
                  <h6 className="card col-sm-6 border-dark" id="address">
                    {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                  </h6>
                  <h6 className="card col-sm-2 border-dark" id="street">
                    {user.address.street} 
                  </h6>
                  <h6 className="card col-sm-2 border-dark" id="suite">
                    {user.address.suite}
                  </h6>
                  <h6 className="card col-sm-2 border-dark" id="city">
                    {user.address.city}
                  </h6>
                  <h6 className="card col-sm-2 border-dark" id="zip">
                    {user.address.zipcode} 
                  </h6>
                  <h6 className="card col-sm-4 border-dark" id="geo">
                    {user.address.geo.lat},{user.address.geo.lng}
                  </h6>
                  <h6 className="card col-sm-2 border-dark" id="lat">
                    {user.address.geo.lat}
                  </h6>
                  <h6 className="card col-sm-2 border-dark" id="lon">
                    {user.address.geo.lng}
                  </h6>
                  <h6 className="card col-sm-4 border-dark" id="phone">
                    {user.phone} 
                  </h6>
                  <h6 className="card col-sm-4 border-dark" id="website">
                    {user.website}
                  </h6>
                  <h6 className="card col-sm-6 border-dark" id="company">
                    {user.company.name}: {user.company.catchPhrase}
                  </h6>
                  <h6 className="card col-sm-2 border-dark" id="companyname">
                    {user.company.name} 
                  </h6>
                  <h6 className="card col-sm-4 border-dark" id="catch">
                    {user.company.catchPhrase}
                  </h6>
                  <h6 className="card col-sm-6 border-dark" id="bs">
                    {user.company.bs}
                  </h6>
            </div>
          </div>
        ))}
        </div>
       </div>
    );
  }
}
export default App;