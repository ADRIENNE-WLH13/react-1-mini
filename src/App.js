import React, {Component}  from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
    //this has to be put in the constructor
    this.addFriend = this.addFriend.bind(this)
  }
//created the updated picture method
updatePicture(value){
  this.setState({
    picture: value
  })
}

updateName(value){
  this.setState({
    name: value
  })
}

addFriend(){
  const {friends, picture, name} = this.state;

  let newFriends = friends.slice();
  //if the ket matches the value you dont need to enter to colon
  newFriends.push({picture, name})

  this.setState({
    friends: newFriends,
    picture: '',
    name: ''
  })
}


  render(){
    //console.log(this.state.picture)
    //console.log(this.state.name)
    const friends = this.state.friends.map((element, index) => {
      return(
        <div key={index}>
          <img width='100px' src={element.picture} alt='My Friends'/>
          <span>{element.name}</span>

        </div>
      )
    })
  return (
    <div className="App">
      <span>Picture:</span>
      <input
      value={this.state.picture}
      onChange={(event) => this.updatePicture(event.target.value)}/>
      <span>Name:</span>
      <input
      value={this.state.name}
      onChange={(event) => this.updateName(event.target.value)} 
      />
      <button onClick={this.addFriend}>Add Friend</button>
      {friends}
  
    </div>

    );
  }
}

export default App;