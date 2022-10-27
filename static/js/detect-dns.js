$.ajax({
    url: "https://t.zerologdns.net",
    cache: false,
    success(response) {
        if (response.Response == "yes") {
             document.getElementById('dns-test').innerHTML = "You are using ZeroLogDNS! 🟢";
             document.querySelector('title').textContent = "ZeroLogDNS - 🟢";
        } else if (response.Response == "no") {
             document.getElementById('dns-test').innerHTML = "You are not using ZeroLogDNS! 🔴";
             document.querySelector('title').textContent = "ZeroLogDNS - 🔴";
        } else if (response.Response == "unavailable") {
             document.getElementById('dns-test').innerHTML = "ZeroLogDNS back-end is not available!⚠️";
             document.querySelector('title').textContent = "ZeroLogDNS - ⚠️";
        } else if (response.Response == "blocked") {
             document.getElementById('dns-test').innerHTML = "The request was blocked from your network.💀";
             document.querySelector('title').textContent = "ZeroLogDNS - 💀";
        }
    },
    error:function(){
        document.getElementById('dns-test').innerHTML = "Unable to connect!🔌";
    }
});
