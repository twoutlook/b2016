
// https://buses.firebaseio.com
var SECRET="TTdYZBjRMArROwCe8izw9XdgWGwV4aKEHbKYbNqY";
var uid="mark";

// No need to change following
var FirebaseTokenGenerator = require("firebase-token-generator");
var tokenGenerator = new FirebaseTokenGenerator(SECRET);
var token = tokenGenerator.createToken({ uid:uid, some: "arbitrary", data: "here" });
console.log("\n\n"+token);
