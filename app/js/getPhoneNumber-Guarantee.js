$(document).ready(function() {
   $.ajax({
       url: "https://www.algaecal.com/wp-json/acf/v3/options/options",
        contentType: 'application/json; charset=utf-8'
   }).then(function(data) {
      $('.phoneNumber').append("<a class='phone-number' href='tel:+" + data.acf.default_phone_number + "'>" + data.acf.default_phone_number + "</a>");
       $('.modal-tile').append(data.acf["7yr_tile"]);
       $('.modal-body').append(data.acf["7yr_full_copy"]);
   });
});
