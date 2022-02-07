// Require libraries
import axios = require("axios");
import readline = require("readline-sync");
import notifier = require("node-notifier");
import child_process = require("child_process");
import subMemory = require("./subMemory");
import { RedditSubResponse } from "./types";
var project = require("./package.json");

var debug_mode = false;
var canConnect = true;

if (process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "development" || process.env.NODE_ENV === "debug") {
  debug_mode = true;
}

// Debug mode
if (debug_mode) {
  const os = require("os");
  console.log(
    `[Debug]: If you're filing a bug report, start copying from this line. (Timestemp: ${new Date().getMilliseconds})`
  );
  console.log("[Debug]: Launching in debug mode...");
  console.log(`[Debug]: Node version:${process.version}`);
  console.log(`[Debug]: OS:${os.platform} v${os.release()}`);
  console.log(`[Debug]: CPU:${os.cpus()[0].model} Arch:${os.arch} Cores:${os.cpus().length}`);
  console.log(`[Debug]: RAM:${os.totalmem}`);
}

// Main script
console.log("=".repeat(`Github.com/froxcey/reddit-notifier`.length));
console.log(`Reddit Notifier ${project.version} from`);
console.log(`Github.com/froxcey/reddit-notifier`);
console.log(`Made by r/froxcey`);
// More credits below
console.log("=".repeat(`Github.com/froxcey/reddit-notifier`.length));
console.log("Press [,] to see a list of shortcuts.");

// Ask what sub to stalk on
var sub: string = readline.question("Enter a sub name. Ex: r/ralsei \n> ");
// Ask for update frequency
var interval: number =
  parseInt(readline.question("How often do you want me to check on this sub (in minutes) \n> ")) * 60000;
console.log("Okay, I'll keep an eye on this sub...");
// Check action
function check(): void {
  // Send a request
  if (debug_mode)
    console.log(
      `[Debug] (Timestemp: ${new Date().getMilliseconds}): Sending request to https://reddit.com/${sub}/new/.json`
    );
  axios.default
    .get(`https://reddit.com/${sub}/new/.json`)
    .then((response) => {
      if (debug_mode) console.log(`[Debug] (Timestemp: ${new Date().getMilliseconds}): Got response`);
      if (!canConnect) {
        canConnect = true;
        console.log("Got internet again :)");
      }
      var res: RedditSubResponse = response.data;
      memoryCheck(res, 0);
    })
    .catch((error) => {
      if (debug_mode) {
        console.log(`[Debug] (Timestemp: ${new Date().getMilliseconds}): ${error}`);
      } else if (canConnect) {
        canConnect = false;
        console.log("Failed to fetch from Reddit. Run in debug mode to see what went wrong.");
      }
    });
}
// Start the check timer
if (debug_mode)
  console.log(`[Debug] (Timestemp: ${new Date().getMilliseconds}): Starting a interval timer of ${interval}`);
check();
setInterval(() => {
  check();
}, interval);

// Shortcut
var stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding("utf8");
stdin.on("data", function (key) {
  switch (key.toString()) {
    case "r":
      if (debug_mode) console.log(`[Debug] (Timestemp: ${new Date().getMilliseconds}): refresh key detected`);
      check();
      break;
    case ",":
      console.log(`Shortcuts:`);
      console.log(`[x]: Exit the program`);
      console.log(`[r]: Check for new post immediately`);
      check();
      break;
    case "x":
      if (debug_mode)
        console.log(`[Debug] (Timestemp: ${new Date().getMilliseconds}): Exit key detected, shutting down`);
      process.exit(0);
      break;
    default:
      break;
  }
});

function memoryCheck(res: RedditSubResponse, index: number) {
  if (!res.data.children[index]) {
    if (debug_mode) console.log(`[Debug] (Timestemp: ${new Date().getMilliseconds}): Array indexing exceeded`);
    return;
  }
  if (debug_mode) console.log(`[Debug] (Timestemp: ${new Date().getMilliseconds}): Indexing array ${index}`);
  subMemory(res.data.children[index].data.id, sub, (found) => {
    if (!found) {
      console.log(`I found a new post! Link: https://reddit.com${res.data.children[index].data.permalink}`);
      notifier.notify({
        title: `New ${sub} post`,
        message: res.data.children[index].data.title,
        sound: true,
        wait: true,
        icon: ``,
        open: `https://reddit.com${res.data.children[index].data.permalink}`,
      });
      memoryCheck(res, index + 1);
    }
  });
}

// Made with ~~❤️~~ a keyboard by Froxcey
