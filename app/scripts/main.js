/* global Handlebars */

(function(){

  'use strict';

  // Spit HTML coming from contents.json
  Handlebars.registerHelper('strip-scripts', function(context) {
    return new Handlebars.SafeString(context);
  });

  // Countdown
  function timeLeft(target_date) {
    var current_date = new Date().getTime(),
        seconds_left = (target_date - current_date) / 1000,
        result = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };

    result.days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
    result.hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
    result.minutes = parseInt(seconds_left / 60);
    result.seconds = parseInt(seconds_left % 60);

    return result;
  }

  // Get JSON
  function _loadJSON(url, callback) {
    var xobj = new XMLHttpRequest();

    xobj.overrideMimeType('application/json');
    xobj.open('GET', url, true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState === 4 && xobj.status === 200) {
        callback(JSON.parse(xobj.responseText));
      }
    };
    xobj.send(null);
  }

  // Main
  _loadJSON('content.json', function (sections) {
    Object.keys(sections).forEach(function(section){
      var tmpl = MyApp.templates[section + '-tmpl'];
      if (tmpl) {
        document.getElementById(section).innerHTML = tmpl(sections[section]);
      }

      // Timer
      var startDate = sections.agenda.day1.date;
      var target_date = new Date(startDate.month + ', ' + startDate.day + ', ' + startDate.year).getTime();
      var countdownTimer = document.getElementById('countdown-clock');
      var countdownCounter = document.getElementById('countdown');

      if (countdownCounter && countdownTimer) {
        setInterval(function () {
          var tl = timeLeft(target_date);
          countdownCounter.innerHTML = tl.days +  ' days ' +
          tl.hours + ' hours ' +
          tl.minutes + ' minutes and ' +
          tl.seconds + ' seconds';
          countdownTimer.innerHTML = '<span>' + tl.days +  ' days</span>' +
          '<span>' + tl.hours + ' hours</span>' +
          '<span>' + tl.minutes + ' minutes</span>' +
          '<span>' + tl.seconds + ' seconds</span>';
        }, 500);
      };
    });
  });

})();
