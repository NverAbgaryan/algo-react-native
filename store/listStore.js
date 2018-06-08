import { observable, action, computed } from 'mobx';
import { AsyncStorage } from 'react-native';

class NotesStore {
  @observable notes = [];

  @action
  addNote(note) {
    this.notes.push(note);
    AsyncStorage.setItem('AlgoNotes', JSON.stringify(this.notes));
  }

  @action
  editNote(note) {
    this.notes = this.notes.map((item) => {
      if (item.id !== note.id) return item;
      return note;
    });
    AsyncStorage.setItem('AlgoNotes', JSON.stringify(this.notes));
  }

  @action
  setNotes(notes) {
    if (notes) {
      notes = JSON.parse(notes);
      notes = notes.filter((item) => {
        item.right.map((right) => {
          right.onPress = () => {
            this.deleteNote(item.id);
          };
          return right;
        });
        return item;
      });
      this.notes = notes;
    }
  }

  @computed
  get getNotes() {
    return this.notes;
  }

  @action
  getNoteById(key) {
    return this.notes[key];
  }

  deleteNote(id) {
    this.notes = this.notes.filter(item => item.id !== id);
    AsyncStorage.setItem('AlgoNotes', JSON.stringify(this.notes));
  }
}

export default new NotesStore();