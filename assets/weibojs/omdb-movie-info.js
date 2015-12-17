var all_omdb_data = new Object();

    function load_movie_details(id, data){
        id.find(".omdb-title").text(data.Title);
        id.find(".omdb-year").text(data.Year);
        id.find(".omdb-poster").text(data.Poster);
    }

    function load_omdb_data(){
        $(".omdb-movie").each(function(index){
            // search for imdbid
            var omdbid = $(this);
            var imdbid = omdbid.find(".omdb-imdbid").text();
            // download data if needed
            if (!(imdbid in all_omdb_data)){
                $.ajax({
                    url: "http://www.omdbapi.com/?i=" + imdbid,
                }).done(function (data) {
                    var movieobj = JSON.parse(data);
                    if (movieobj.Response == 'False'){
                        // no data found
                        var notfoundstring = 'Data not available.'
                        //$("#cast-"+ movieid).text(notfoundstring);
                    }else{
                        all_omdb_data[imdbid] = movieobj
                        load_movie_details(omdbid, movieobj);
                    }
                });
            }else{
                load_movie_details($(this), all_omdb_data[imdbid]);
            }
        });
    }