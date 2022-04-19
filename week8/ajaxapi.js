$(document).ready(function() {
    $("movies").load("movies.html");
    $("movies").change(function() {
        let movie = $(this).val();
        let apiUrl = "https:api.themoviedb.org/3/movie"
        + movie
        +"?api_key=fe9b2191c7d9911dbb7c85c521cd94c7&language=en-US";
        $.ajax( {
            url:apiUrl,
            type: "GET",
            dataType: "json",
            success: function(response) {
                $.each(response, function() {
                    $("#movieinfo").html("");
                    $("#movieinfo").append(response.overview);
                    if ($("#movieinfo").attr("hidden")){
                        $("#movieinfo").show();
                    }
                     $("#movieinfo").css(
                         {
                             "border-color": "#C1E0FF",
                             "border-weight": "1px",
                             "border-style": "solid",
                             "margin-top": "1rem",
                             "width": "50%",
                             "padding": "0.5rem"
                         });
                });
            },
            error: function(xhr, error){
                $("#info").append(error.toUpperCase() + ". HTTP status: " + xhr.status);
            }
        });
    });
});