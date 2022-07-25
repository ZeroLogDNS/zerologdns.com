$.ajax({
    url: "https://t.zerologdns.net/?id=" + Math.floor(Math.random() * 99999999),
    cache: false,
    success(response) {
        if (response.Response == "yes") {
             document.getElementById('dns-test').innerHTML = "You are using ZeroLogDNS! 🟢";
        } else if (response.Response == "no") {
             document.getElementById('dns-test').innerHTML = "You are not using ZeroLogDNS! 🔴";
        } else if (response.Response == "unavailable") {
             document.getElementById('dns-test').innerHTML = "ZeroLogDNS back-end is not available!⚠️";
        } else if (response.Response == "blocked") {
             document.getElementById('dns-test').innerHTML = "The request was blocked from your network.💀";
        }
    },
    error:function(){
        document.getElementById('dns-test').innerHTML = "Unable to connect!🔌";
    }
});
