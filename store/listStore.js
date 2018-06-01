import { observable, action, computed } from 'mobx';

class NotesStore {
  @observable notes = [];

  @action
  addNote(note) {
    this.notes.push(note);
  }

  @computed
  get getNotes(){
    return observable(this.notes)
  }

  @action
  getNoteByKey(key){
    return this.notes[key]
  }

  deleteNote() {
    this.counter--;
    console.log("decrement", this.counter);
  }
}

export default new NotesStore();