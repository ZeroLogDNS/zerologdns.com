$.ajax({
    url: "https://32lk4tazjrpul4gw2fot.zerologdns.net/status?ch=" + Math.floor(Math.random() * 99999999),
    cache: false,
    statusCode: {
        200: function() {
            document.getElementById('dns-test').innerHTML = "You are using ZeroLogDNS!🟢";

        }
    },
    error:function(){
        document.getElementById('dns-test').innerHTML = "You are not using ZeroLogDNS!🔴";
    }   
});





//
//  https://github.com/SIDN/client_dnssec_check/
//

var sidn_dnssec = {};
sidn_dnssec.timer = null;
sidn_dnssec.timeout = 800;
sidn_dnssec.img_test = "https://servfail.sidnlabs.nl/1x1.png"
sidn_dnssec.img_checking = "static/images/dnssec/dnssec_checking.png"
sidn_dnssec.img_success = "static/images/dnssec/dnssec_secure.png"
sidn_dnssec.img_failed = "static/images/dnssec/dnssec_insecure.png"
sidn_dnssec.txt_checking = "Checking DNSSEC Validation"
sidn_dnssec.txt_success = "DNSSEC Validation is enabled"
sidn_dnssec.txt_failed = "DNSSEC Validation is not enabled"

function sidn_dnssec_set_timeout(timeout) {
	sidn_dnssec.timeout = timeout;
}

function sidn_dnssec_set_test_image(image_url) {
	sidn_dnssec.img_test = image_url;
}

function sidn_dnssec_set_success_image(image_url) {
	sidn_dnssec.img_success = image_url;
}

function sidn_dnssec_set_success_text(text) {
	sidn_dnssec.txt_success = text;
}

function sidn_dnssec_set_failure_image(image_url) {
	sidn_dnssec.img_failed = image_url;
}

function sidn_dnssec_set_failure_text(text) {
	sidn_dnssec.txt_failed = text;
}

function sidn_dnssec_set_checking_image(image_url) {
	sidn_dnssec.img_checking = image_url;
}

function sidn_dnssec_set_checking_text(text) {
	sidn_dnssec.txt_checking = text;
}

function sidn_dnssec_set_status(image_url, image_text) {
	html = '<img src="' + image_url + '" alt="' + image_text + '" />';
	jQuery("#sidn_dnssec_check").html(html);
}

function sidn_dnssec_pixel_loaded() {
	jQuery('#sidn_dnssec_check_pixel').remove();
	clearTimeout(sidn_dnssec.timer);
	sidn_dnssec_set_status(sidn_dnssec.img_failed,
	                       sidn_dnssec.txt_failed)
}

function sidn_dnssec_pixel_not_loaded() {
	sidn_dnssec_set_status(sidn_dnssec.img_success,
	                       sidn_dnssec.txt_success)
}

function sidn_dnssec_validation_check() {

	sidn_dnssec_set_status(sidn_dnssec.img_checking,
	                       sidn_dnssec.txt_checking);

	jQuery('body').append('<img src="' + sidn_dnssec.img_test + '"' +
	                      'width="1" height="1" ' +
	                      'id="sidn_dnssec_check_pixel" ' +
	                      'alt="" ' +
	                      'onload="sidn_dnssec_pixel_loaded();" />')
	sidn_dnssec.timer = setTimeout(sidn_dnssec_pixel_not_loaded,
	                               sidn_dnssec.timeout);
}

jQuery(document).ready(sidn_dnssec_validation_check);
