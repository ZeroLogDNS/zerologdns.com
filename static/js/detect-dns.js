$.ajax({
    url: "https://t.zerologdns.net",
    cache: false,
    success(response) {
        if (response.Response == "yes") {
             document.getElementById('dns-test').innerHTML = "You are using ZeroLogDNS! 🟢";
        } else if (response.Response == "no") {
             document.getElementById('dns-test').innerHTML = "You are not using ZeroLogDNS! 🔴";
        } else if (response.Response == "unavailable") {
             document.getElementById('dns-test').innerHTML = "Service is not available!⚠️";
        } else if (response.Response == "blocked") {
             document.getElementById('dns-test').innerHTML = "Your request is blocked💀";
        }
    },
    error:function(){
        document.getElementById('dns-test').innerHTML = "Unable to connect!🔌";
    }
});

// Code: Dason#3967
