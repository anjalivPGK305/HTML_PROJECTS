
$(document).ready(function() {
    $("#btn").click(weather);

    function weather() {
        var text = $("#txt").val();
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + text + "&units=metric" + "&APPID=4a46e146e9f309dffad77471e3dd00ee", //weather api
            type: "GET",
            datatype: "jsonp",
            success: function(data) {
                console.log(data);
                // document.getElementById("show").innerHTML = data.main.temp + "&#8451";
                var country = data.sys.country;
                var cloud = data.weather[0].description;

                document.getElementById("show").innerHTML = data.name + " ," + country;
                document.getElementById("show2").innerHTML = cloud;
                var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

                document.getElementById("icon").src = icon;

                var d = new Date();
                var n = d.getDay();
                var day;
                if (n == 1) {
                    day = "Monday ,";
                }
                if (n == 2) {
                    day = "Tuesday,";
                }
                if (n == 3) {
                    day = "Wednesday ,";
                }
                if (n == 4) {
                    day = "Thursday  ,";
                }
                if (n == 5) {
                    day = "Friday ,";
                }
                if (n == 6) {
                    day = "Saturday ,"
                }
                if (n == 7) {
                    day = "Sunday,";
                }
                var n1 = d.getHours();
                var n2 = d.getMinutes();

                var meridiem = n1 >= 12 ? "PM" : "AM";
                // currentTime = ((hour + 11) % 12 + 1) + ":" + currentDate.getMinutes() + meridiem;
                document.getElementById("show1").innerHTML = day + " " + n1 + " :" + n2 + " " + meridiem;
                // document.getElementById("show1").innerHTML = data.main.pressure;
                document.getElementById("show3").innerHTML = data.main.temp + "<sup>&#8451 |</sup><sup>&#8457</sup>";
                // document.getElementById("show3").innerHTML = data.name;
            }

        });
    }
});
