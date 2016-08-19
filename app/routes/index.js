import Ember from 'ember';

var questions = [{
  id: 1,
  question: "How many types of primates are there?",
  author: "Joe Shmoe",
  answer: "260",
  additional: "http://www.alltheworldsprimates.org/Home.aspx"
}, {
  id: 2,
  question: "How do you boil an egg?",
  author: "Susie",
  answer: "In hot water",
  additional: "http://www.incredibleegg.org/cooking-school/egg-cookery/hard-boil-eggs/"
}, {
  id: 3,
  question: "How do lightbulbs work?",
  author: "Real Person",
  answer: "Google it",
  additional: "http://lmgtfy.com/"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
