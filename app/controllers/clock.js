import Ember from 'ember';

export default Ember.Controller.extend({ // Default Controller start
    init: function() { // Setup Code"Initialize"
        // Update the time.
        this.updateTime();
    },
 
    updateTime: function() {
        var _this = this;
 
        // Update the time every second.
        Ember.run.later(function() {
            _this.set('localTime', new Date().toLocaleTimeString());
            _this.updateTime();
        }, 1000);
    },
 
    localTime: new Date().toLocaleTimeString()
});