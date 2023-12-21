

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ye5Y0kOtj/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
    console.log("Model ready!")
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_r = Math.floor(Math.random() * 255) + 1;
        random_g = Math.floor(Math.random() * 255) + 1;
        random_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear " + results[0].label;
        document.getElementById("result_label").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ")";

        image = document.getElementById("image");        

        if (results[0].label == "cat") {
            image.src = "cat.png";
        }
    }
}

// window.location = "https://youtu.be/dQw4w9WgXcQ";
//   https://teachablemachine.withgoogle.com/models/ye5Y0kOtj/