var cow = document.getElementById('cow');
var config = q2o(window.location.search);
if (window.location.search) {
  var url = config.url;
  var country = config.country;
  var tel = config.tel;
  var text = config.text;
  var cowresult = '<a aria-label="Chat on WhatsApp" href="https://wa.me/' + country + tel + '&text=' + text + '&type=phone_number&app_absent=0">' + '<img alt="Chat on WhatsApp" src="cow.svg" />' + '</a>';
  cow.innerHTML = cowresult;
}