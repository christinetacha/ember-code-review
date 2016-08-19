import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    save1() {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        answer: this.get('answer'),
        additional: this.get('additional'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('save2', params);
    }
  }
});
