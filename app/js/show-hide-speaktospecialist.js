
$(document).ready(function () {

    var d = new Date();
    var dayOfWeek = d.getDay();
    var hour = d.getHours();

    // open hours Monday - Friday 7m - 4:pm, Saturday 8a-4p, Sunday 8a-2p
     if (dayOfWeek === 6 || dayOfWeek === 0 || hour <= 7 || hour >= 16) {
         $('.speakToSpecialist').hide();
     }

     else if (dayOfWeek === 6 || hour <= 8 || hour >= 16) {
         $('.speakToSpecialist').hide();
     }

     else if (dayOfWeek === 0 || hour <= 8 || hour >= 14) {
         $('.speakToSpecialist').hide();
     }

});
