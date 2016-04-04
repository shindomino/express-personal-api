// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');
//
// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }
var new_profile = {
  name: "Kirby Tate",
  github_link: "https://github.com/shindomino",
  github_profile_image: "https://avatars3.githubusercontent.com/u/17808214?v=3&s=460",
  current_city: "Milpitas",
  pets: [{
    name: "Scarlett",
    type: "Dog",
    breed: "Dashaund Mix ",
  }]
};

var musicAlbums = [
  {
    albumTitle: "Hybrid Theory",
    albumArtist: "Linkin Park",
  }
];

var musicAlbums = [
  {
    artistName: "Calvin Harris",
    artistStillPlaying: false,
  }
];
//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
+db.Profile.create(new_profile, function(err, profile) {
  if (err){
    return console.log("It's not Working, Chewie!", err);
  }

  console.log("New Profile is Ready", profile.id);
  process.exit();
});
