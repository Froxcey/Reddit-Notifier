// Require libraries
import axios = require("axios");
import readline = require("readline-sync");
import notifier = require("node-notifier");
import child_process = require("child_process");
import subMemory = require("./subMemory");
import { RedditSubResponse } from "./types";
var project = require("./package.json");

var debug_mode = false;

if (process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "development" || process.env.NODE_ENV === "debug") {
  debug_mode = true;
}

// Debug mode
if (debug_mode) {
  const os = require("os");
  console.log("[Debug]: If you're filing a bug report, start copying from this line.");
  console.log("[Debug]: Launching in debug mode...");
  console.log(`[Debug]: Node version:${process.version}`);
  console.log(`[Debug]: OS:${os.platform} v${os.release()}`);
  console.log(`[Debug]: CPU:${os.cpus()[0].model} Arch:${os.arch} Cores:${os.cpus().length}`);
  console.log(`[Debug]: RAM:${os.totalmem}`);
}

// Main script
console.log("=".repeat(project.version.length + 16));
console.log(`Reddit Notifier ${project.version}`);
console.log("=".repeat(project.version.length + 16));
console.log("You can press alt(PC)/control(Mac) + c at any time to exit the program. ");

// Ask what sub to stalk on
var sub: string = readline.question("Enter a sub name. Ex: r/ralsei \n> ");
// Ask for update frequency
var interval: number =
  parseInt(readline.question("How often do you want me to check on this sub (in minutes) \n> ")) * 60000;
console.log("Okay, I'll keep an eye on this sub...");
// Check action
function check(): void {
  // Send a request
  if (debug_mode) console.log(`[Debug]: Sending request to https://reddit.com/${sub}/new/.json`);
  axios.default
    .get(`https://reddit.com/${sub}/new/.json`)
    .then((response) => {
      if (debug_mode) console.log(`[Debug]: Got response`);
      var res: RedditSubResponse = response.data;
      subMemory(res.data.children[0].data.id, sub, (found) => {
        if (!found) {
          console.log(`I found a new post! Link: https://reddit.com${res.data.children[0].data.permalink}`);
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
// Start the check timer
if (debug_mode) console.log(`[Debug]: Starting a interval timer of ${interval}`);
check();
setInterval(() => {
  check();
}, interval);

// Made with ~~❤️~~ a keyboard by Froxcey