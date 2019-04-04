import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: null,
    }
  }

  onChange(e){
    // Assuming only image
    var file = e.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
  
     reader.onloadend = function (e) {
        this.setState({
            imgSrc: e.target.result,
            text: null,
        })
      }.bind(this);
    console.log(url) // Would see a path?
    // TODO: concat files
  }

  handleSubmit(e) {
    e.preventDefault();

    // TODO: サーバにデータを送信
  }

  render() {
    return (
      <div className="post">
        <img src={this.state.imgSrc} />
        <form>
          <input 
            className="image"
            ref="file" 
            type="file" 
            name="user[image]" 
            onChange={this.onChange.bind(this)}/>
            <textarea className="text" rows="10" cols="50" onChange={(e)=>this.changeText(e)} defaultValue={this.state.text}/>
            <div className="submit1">
              <input type="submit" name="button1" value="投稿"></input>
            </div>
        </form>
    </div>
    );
  }
}

export default App;
