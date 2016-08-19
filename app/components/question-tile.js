import Ember from 'ember';

export default Ember.Component.extend({
  isInfoShowing: false,
  actions: {
    infoShow: function() {
      this.set('isInfoShowing', true);
    },
    infoHide: function() {
      this.set('isInfoShowing', false);
    }
  }
});
