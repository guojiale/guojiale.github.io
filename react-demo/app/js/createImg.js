/**
 * Created by h on 2017/1/4.
 */
function getImg(){
    var img = document.createElement("img");
    img.src = require("../images/car-logo.jpg");
    return img;
}

module.exports = getImg;