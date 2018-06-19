$(document).ready(function () {
    $('#bundle').hide();
  window._wq = window._wq || [];
  _wq.push({ id: "cecdwaq3dz", onReady: function(video) {
    video.bind('secondchange', function(s) {
      $('#overlay').hide();
      if (s > 132) {
        $('#bundle').show();
      }
    });
  }});
});
