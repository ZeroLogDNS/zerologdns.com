$.ajax({
    url: "https://32lk4tazjrpul4gw2fot.zerologdns.net/status?ch=" + Math.floor(Math.random() * 99999999),
    cache: false,
    statusCode: {
        200: function() {
            document.getElementById('dns-test').innerHTML = "You are using ZeroLogDNS! 🟢";

        }
    },
    error:function(){
        document.getElementById('dns-test').innerHTML = "You are not using ZeroLogDNS! 🔴";
    }   
});
