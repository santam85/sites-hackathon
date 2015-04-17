/**
 * TODO
 * - GA via gulpfile
 * - implement Mark's responsive images
 * - reduce bootstrap junk
 *
 */

(function(){

  Handlebars.registerHelper('strip-scripts', function(context) {
    var html = context;
    return new Handlebars.SafeString(html);
  });

  var hero = {
    h1      : 'Hack the system & win awesome prizes!',
    p       : 'A 2-day chance in Amsterdam to network, learn and share knowledge with your peers next <b>19th and 20th of June 2015.</b>',
    imgSrc  : 'images/bg-blurred-code.png',
    imgAlt  : 'BBsers hacking a bank'
  };

  var templateHero = Handlebars.compile($("#hero-tmpl").html());
  $('#hero').append(templateHero(hero));

  // -------------------------------------------------------------------------------------------------------------------

  var description = {
    h2      : 'Mission: Disrupt the banking industry!',
    p       : 'The Backbase Hackathon is hosting developers from all around the world, providing an opportunity to create new application concepts to shake up the banking industry. This is achieved by combining technologies and making small, yet significant dents in some of the most difficult problems, in whatever language, in whatever framework, in whatever development stack, and time is your only enemy. It’s a unique opportunity to delve into open APIs and technologies to create new applications for banking customers (and other businesses). <br /><br /> The game is on! Are you in?',
    imgSrc  : 'images/description.png',
    imgAlt  : 'BBsers hacking a bank'
  };

  var templateDescription = Handlebars.compile($("#description-tmpl").html());
  $('#description').append(templateDescription(description));

  // -------------------------------------------------------------------------------------------------------------------

  var attendance = {
    h2      : 'Who can attend?',
    p       : 'We’re looking for a creative mix of people for the two-day Backbase Hackathon – coders, designers and entrepreneurs! The aim is to compete, so we can innovate together and move digital banking forwards.',
    imgSrc  : 'images/hackathon-team.png',
    imgAlt  : 'BBsers hacking a bank'
  };

  var templateAttendance = Handlebars.compile($("#attendance-tmpl").html());
  $('#attendance').append(templateAttendance(attendance));

  // -------------------------------------------------------------------------------------------------------------------

  var prizes = {
    h2      : 'The Prizes',
    p       : 'At the end of the Hackathon, each team leader will present a 15-minute prototype demo to a jury of Backbase managers, as well as representatives of the Hackathon sponsor company.',
    imgSrc  : 'images/medal.png',
    imgAlt  : 'prize!'
  };

  var templatePrizes = Handlebars.compile($("#prizes-tmpl").html());
  $('#prizes').append(templatePrizes(prizes));

  // -------------------------------------------------------------------------------------------------------------------

  var agendaTitle = 'Backbase Hackathon Agenda';

  var templateAgendaTitle = Handlebars.compile($("#agenda-title-tmpl").html());
  $('#agenda-title').append(templateAgendaTitle(agendaTitle));

  // -------------------------------------------------------------------------------------------------------------------

  var agenda = {
    day1: {
      date : {
        title: 'Day 1',
        day: 19,
        month: 'June',
        sup: 'th'
      },
      events : [
        {
          time : '09:00',
          name : 'Opening'
        },
        {
          time : '10:00',
          name : 'Registration'
        },
        {
          time : '11:00',
          name : 'Welcome Kick-off'
        },
        {
          time : '12:00',
          name : 'START'
        },
        {
          time : '14:00',
          name : 'Lunch'
        },
        {
          time : '17:00',
          name : 'Drinks'
        },
        {
          time : '18:00',
          name : 'Dinner'
        },
        {
          time : '19:00',
          name : 'Pitch Training'
        },
        {
          time : '20:00',
          name : 'Open Sleeping Area (optional)'
        }
      ]
    },
    day2 : {
      date : {
        title: 'Day 2',
        day: 20,
        month: 'June',
        sup: 'th'
      },
      events : [
        {
          time : '09:00',
          name : 'Breakfast'
        },
        {
          time : '12:00',
          name : 'Lunch'
        },
        {
          time : '13:00',
          name : 'Jury'
        },
        {
          time : '15:00',
          name : 'Finals'
        },
        {
          time : '16:00',
          name : 'Awards'
        },
        {
          time : '17:00',
          name : 'Drinks'
        },
        {
          time : '20:00',
          name : 'Closing'
        }
      ]
    }
  };

  var templateAgenda = Handlebars.compile($("#agenda-tmpl").html());
  $('#agenda').append(templateAgenda(agenda));

  // -------------------------------------------------------------------------------------------------------------------

  var applyNow = {
    h3  : 'Join us on this 2-day hackathon in Amsterdam!',
    p   : 'The inaugural Backbase Hackathon invites you to apply today. ' +
          'Don’t waste time! Get this form filled in as soon as possible!'
  };

  var templateApplyNow = Handlebars.compile($("#apply-now-tmpl").html());
  $('#apply-now').append(templateApplyNow(applyNow));

  // -------------------------------------------------------------------------------------------------------------------
  var credit = '© 2015 Backbase. All rights reserved.';

  var templateCredit = Handlebars.compile($("#credit-tmpl").html());
  $('#credit').append(templateCredit(credit));

  // -------------------------------------------------------------------------------------------------------------------

  var socialLinks = [
    {
      href      : 'http://www.facebook.com/pages/Backbase/352288013495',
      title     : 'Facebook',
      faClass   : "fa fa-facebook"
    },
    {
      href      : 'http://twitter.com/backbase',
      title     : 'Twitter',
      faClass   : 'fa fa-twitter'
    },
    {
      href      : 'http://www.linkedin.com/company/backbase',
      title     : 'LinkedIn',
      faClass   : 'fa fa-linkedin'
    },
    {
      href      : 'http://www.youtube.com/backbase',
      title     : 'Youtube',
      faClass   : 'fa fa-youtube'
    }
  ];

  var templateSocialLinks = Handlebars.compile($("#footer-social-tmpl").html());
  $('#footer-social').append(templateSocialLinks(socialLinks));

})();
