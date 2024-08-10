var sow = document.getElementById('sow');
var config = q2o(window.location.search);
if (window.location.search) {
  var url = config.url;
  var country = config.country;
  var tel = config.tel;
  var text = config.text;
  var sowresult = '<a href="https://web.whatsapp.com/send/?phone=' + country + tel + '&text=' + text + '&type=phone_number&app_absent=0">' + 'Chat on WhatsApp' + '</a>';
  sow.innerHTML = sowresult;
}