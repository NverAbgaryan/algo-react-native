import { observable, action, computed } from 'mobx';

class NotesStore {
  @observable notes = [];

  @action
  addNote(note) {
    this.notes.push(note);
  }

  @action
  setNotes(notes) {

  }

  @computed
  get getNotes(){
    return observable(this.notes)
  }

  @action
  getNoteByKey(key){
    return this.notes[key]
  }

  deleteNote(id) {
    this.notes = this.notes.filter( item => item.id !== id)
  }
}

export default new NotesStore();