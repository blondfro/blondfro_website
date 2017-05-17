$(document).ready(function() {

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        defaultDate: '2017-05-12',
        navLinks: true, // can click day/week names to navigate views
        editable: false,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'Basement Dreams',
                start: '2017-05-01T20:00:00',
                end: '2017-05-01'
            },
            {
                title: 'Not Your Mom"s Socks',
                start: '2017-05-02T20:00:00',
                end: '2017-05-02'
            },
            {
                id: 999,
                title: 'The Dead Beats',
                start: '2017-05-03T16:00:00'
            },
            {
                id: 999,
                title: 'East High Toppers',
                start: '2017-05-04T16:00:00'
            },
            {
                title: 'Karaoke Night!',
                start: '2017-05-05T21:00:00',
                end: '2017-05-05'
            },
            {
                title: 'Johnny and the Meerkats',
                start: '2017-05-06T22:30:00',
                end: '2017-05-06T12:30:00'
            },
            {
                title: 'Karaoke Night!',
                start: '2017-05-05T21:00:00',
                end: '2017-05-05'
            },
            {
                title: 'Karaoke Night!',
                start: '2017-05-12T21:00:00',
                end: '2017-05-12'
            },
            {
                title: 'Karaoke Night!',
                start: '2017-05-19T21:00:00',
                end: '2017-05-19'
            },
            {
                title: 'Karaoke Night!',
                start: '2017-05-26T21:00:00',
                end: '2017-05-26'
            },
            {
                title: 'Celtic Wind',
                start: '2017-05-07T22:00:00'
            },
            {
                title: 'Dances with Eels',
                start: '2017-05-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2017-05-12T17:30:00'
            },
            {
                title: 'Open Mic Night',
                start: '2017-05-12T20:00:00'
            },
            {
                title: 'Come Up Dreams',
                start: '2017-05-13T07:00:00'
            },
            {
                title: 'Beef and Barely',
                url: 'http://google.com/',
                start: '2017-05-28'
            }
        ]
    });

});