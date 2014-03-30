// Responsive Calendar
$( document ).ready( function() {
  $('.responsive-calendar').responsiveCalendar({
  	// onDayClick: function(events) { alert('You have made a meeting') },
    events: {
      "2014-03-29": {"number": 5, "badgeClass": "badge-warning", "url": "#"},
      "2014-03-30": {"number": 1, "badgeClass": "badge-warning", "url": "#"}, 
      "2014-03-31": {"number": 1, "badgeClass": "badge-error"}}
  });
});
