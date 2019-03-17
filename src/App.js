import React, { Component } from 'react';
import Note from './components/Note';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      noteText:"",
      notes: [],
    }
  }  

  updateNoteText(noteText){
    this.setState({noteText: noteText.target.value})
  }

  addNote() {
    if (this.state.noteText === '') {return}
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({noteText: ''});
    this.textInput.focus();


  }

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      let notesArr = this.state.notes;
      notesArr.push(this.state.noteText);
      this.setState({noteText: ''});
    }
  }

  deleteNote(index) {
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({notes: notesArr})

  }

  render() {

    let notes = this.state.notes.map((val, key) => {
       return <Note key={key} text={val}
       deleteMethod={()=> this.deleteNote(key) } />
    })

    return (
      <div className="App">
       <div className="header App">
        <h1>-Todo App-</h1>
        </div>
      
        <div className="appBody App">
          <input type="text" placeholder="Enter a task.."
          ref={((input) => {this.textInput = input})}
          className="textInput"
          value={this.state.noteText}
          onChange={noteText => this.updateNoteText(noteText)}
          onKeyPress={this.handleKeyPress.bind(this)}
          />
          <button className="btn" onClick={this.addNote.bind(this)}>+</button>
          <div className="App">
           {notes}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
