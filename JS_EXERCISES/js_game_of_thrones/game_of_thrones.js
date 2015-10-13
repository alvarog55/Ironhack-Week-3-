var fs = require('fs');

fs.readFile("./episodes.json", 'utf8', fileActions);

function fileActions(err, file){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file);

    episodes = filterGoodEpisodes(episodes, 5);
    episodes = filterEpisodesByCharacter(episodes, "Jon");

    episodes.sort(function(a, b){
    return parseFloat(a.episode_number) - parseFloat(b.episode_number);
    });



    for(var i=0; i<episodes.length; i++) {
    	
    	console.log("Title: " + episodes[i].title + " Episode #: " + episodes[i].episode_number + "\n"
    		+ episodes[i].description + "\n"
    		+ "Rating: " + episodes[i].rating + " " + print_stars(episodes[i].rating));
	};
};

function print_stars(rating) {
	rating = Math.floor(rating)
	var starString = "";
	for(var i = 0; i <rating; i++) {
		 starString += "*"
	};
	return starString;
};

function filterEpisodesByCharacter(episodes, character) {
    
    var episodesWithCharacter = []
    episodes.forEach(function (episode){
        var index = episode.description.indexOf(character)

        if(index >= 0) {
            episodesWithCharacter.push(episode)
        }

    });
        return episodesWithCharacter
}

function filterGoodEpisodes(episodes, minrating) {
    var goodEpisodes = episodes.filter(function(episode) {
        return episode.rating >= 7
    });
    return goodEpisodes
}



