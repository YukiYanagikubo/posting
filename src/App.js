import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: null,
      userId: 1,
      text: null,
    }
    // this.onChange = this.onChange.bind(this);
    this.changeText = this.changeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e){
    // Assuming only image
    var file = e.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
  
     reader.onloadend = function (e) {
        this.setState({
            imgSrc: e.target.result
        })
      }.bind(this);

  }

  changeText(e){
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("params");
    console.log(this.state.text);
    console.log(this.state.imgSrc);
    console.log(this.state.userId);

    // TODO: サーバにデータを送信
  }

  render() {
    return (
      <div className="post">
        <img src={this.state.imgSrc} />
        <form >
          <input 
            className="image"
            ref="file" 
            type="file" 
            name="user[image]" 
            onChange={this.onChange.bind(this)}/>
            <textarea className="text" rows="10" cols="50" onChange={this.changeText} defaultValue={this.state.text}/>
            <div className="submit1">
              <input type="submit" name="button1" value="投稿" onClick={this.handleSubmit}></input>
            </div>
        </form>
    </div>
    );
  }
}

export default App;
