var info = {
 name: "Nina Roby",
 movies: ['Pulp Fiction', 'http://www.pulpfiction.com/', 'Lock Stock and Two Smoking Barrels', 'http://www.imdb.com/title/tt0120735/']
};

var output = '<ul>';

for(var i = 0; i<info.movies.length; i+=2) {
    output+= ('<a href="' + info.movies[i+1] + '">' + info.movies[i] +  '</a>');
}

output+= '</ul>';

console.log(output);

//////////////////////////////////


var links = {
    favorites: ['A List Apart', 'http://alistapart.com/', 'Smashing Magazine', 'http://www.smashingmagazine.com/', 'Code School', 'https://www.codeschool.com/courses/javascript-road-trip-part-1']
};

var output = '<ul>';

for (var i = 0; i<links.favorites.length; i+=2) {
    output+=('<a href="' + links.favorites[i+1] + '">' + links.favorites[i] + '</a>');
}

output+= '</ul>';

console.log(output);















