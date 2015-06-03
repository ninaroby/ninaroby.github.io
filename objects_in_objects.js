var info = {
  name : "Ray Villalobos",
  links: {
    blog: "http://raybo.org",
    facebook: "http://facebook.com/viewsource"
  }
};

console.log(info.links.blog);
console.log(info.links.facebook);

for (var index in info.links) {
 console.log('Index: ' + index + 'Value' + '\n' + info.links[index] + '\n');
}
