var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {   name: "North Lake Tahoe", 
        image: "https://img.grouponcdn.com/deal/kVdLRFzcCsWC1eLRe9hLuk/2715083-960x582/v1/c620x376.jpg", 
        description: "Lorem ipsum dolor sit amet, minim laoreet at mel, eum ne simul suscipiantur. Te eam suscipit principes, est te illud albucius senserit. In possit aeterno splendide sit, discere contentiones per eu, id vel eros veniam facilisis. Et vis cibo scripserit, esse ullum sed te. Elitr perpetua nec ei, aeque mollis eum ea, eum et novum sonet voluptaria."},
    {
        name: "Kenneth L. Wilson Campground", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8qPs6Hdv0Lw_y0kd5NlufHh1YvCN5_PhlvOgoglKoD4rwFuge",
        description: "Lorem ipsum dolor sit amet, minim laoreet at mel, eum ne simul suscipiantur. Te eam suscipit principes, est te illud albucius senserit. In possit aeterno splendide sit, discere contentiones per eu, id vel eros veniam facilisis. Et vis cibo scripserit, esse ullum sed te. Elitr perpetua nec ei, aeque mollis eum ea, eum et novum sonet voluptaria."
    },
    {
        name: "Upper Pines Yosemite", 
        image:"https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1497975874/campground-photos/spnlzs4ffritbypartit.jpg",
        description: "Lorem ipsum dolor sit amet, minim laoreet at mel, eum ne simul suscipiantur. Te eam suscipit principes, est te illud albucius senserit. In possit aeterno splendide sit, discere contentiones per eu, id vel eros veniam facilisis. Et vis cibo scripserit, esse ullum sed te. Elitr perpetua nec ei, aeque mollis eum ea, eum et novum sonet voluptaria."
    }

];
function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
    if (err) {
        console.log(err);
    }
        console.log("removed campgrounds!");
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if (err) {
                    console.log(err);
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create({
                        text: "This place is great, but I wish there was internet",
                        author: "Homer"
                    }, function(err, comment){
                        if (err) {
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Create a new comment")
                        }
                    });
                }
            });
        });
    });
    //add a few campgrounds

}

module.exports = seedDB;
