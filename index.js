"use strict";
exports.__esModule = true;
// Require libraries
var axios = require("axios");
var readline = require("readline-sync");
var subMemory = require("./subMemory");
var project = require("./package.json");
var debug_mode = false;
if (process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "development" || process.env.NODE_ENV === "debug") {
    debug_mode = true;
}
// Debug mode
if (debug_mode) {
    var os = require("os");
    console.log("[Debug]: If you're filing a bug report, start copying from this line.");
    console.log("[Debug]: Launching in debug mode...");
    console.log("[Debug]: Node version:".concat(process.version));
    console.log("[Debug]: OS:".concat(os.platform, " v").concat(os.release()));
    console.log("[Debug]: CPU:".concat(os.cpus()[0].model, " Arch:").concat(os.arch, " Cores:").concat(os.cpus().length));
    console.log("[Debug]: RAM:".concat(os.totalmem));
}
// Main script
console.log("=".repeat(project.version.length + 16));
console.log("Reddit Notifier ".concat(project.version));
console.log("=".repeat(project.version.length + 16));
console.log("You can press alt(PC)/control(Mac) + c at any time to exit the program. ");
// Ask what sub to stalk on
var sub = readline.question("Enter a sub name. Ex: r/ralsei \n> ");
// Ask for update frequency
var interval = parseInt(readline.question("How often do you want me to check on this sub (in minutes) \n> ")) * 60000;
console.log("Okay, I'll keep an eye on this sub...");
// Check action
function check() {
    // Send a request
    if (debug_mode)
        console.log("[Debug]: Sending request to https://reddit.com/".concat(sub, "/new/.json"));
    axios["default"]
        .get("https://reddit.com/".concat(sub, "/new/.json"))
        .then(function (response) {
        if (debug_mode)
            console.log("[Debug]: Got response");
        var res = response.data;
        subMemory(res.data.children[0].data.id, sub, function (found) {
            if (!found) {
                console.log("I found a new post! Link: https://reddit.com".concat(res.data.children[0].data.permalink));
            }
        });
    })["catch"](function (error) {
        console.log(error);
    });
}
// Start the check timer
if (debug_mode)
    console.log("[Debug]: Starting a interval timer of ".concat(interval));
check();
setInterval(function () {
    check();
}, interval);
// Made with ~~❤️~~ a keyboard by Froxcey
