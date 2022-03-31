// Require libraries
import axios = require("axios");
import readline = require("readline-sync");
import notifier = require("node-notifier");
import subMemory = require("./subMemory");
import boxen = require("boxen");
import { RedditSubResponse } from "./types";
var project = require("./package.json");

console.clear();

var debug_mode = false;
var canConnect = true;
var lines = 0;
var stats = {
  requests: {
    successes: 0,
    fails: 0,
  },
  posts: 0,
};
var paused = false;

if (process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "development" || process.env.NODE_ENV === "debug") {
  debug_mode = true;
}

// Debug mode
if (debug_mode) {
  const os = require("os");
  console.log(`[Debug]: If you're filing a bug report, start copying from this line. (Timestemp: ${Date.now()})`);
  console.log("[Debug]: Launching in debug mode...");
  console.log(`[Debug]: Node version:${process.version}`);
  console.log(`[Debug]: OS:${os.platform} v${os.release()}`);
  console.log(`[Debug]: CPU:${os.cpus()[0].model} Arch:${os.arch} Cores:${os.cpus().length}`);
  console.log(`[Debug]: RAM:${os.totalmem}`);
}

console.log(
  boxen(`Version ${project.version}\ngithub.com/froxcey/reddit-notifier\nPress [,] to see a list of shortcuts`, {
    title: "Reddit Notifier",
    titleAlignment: "center",
    padding: 1,
    borderColor: "cyan",
  })
);

// Ask what sub to stalk on
var subs: Array<string> = readline.question("Enter subs. Ex: r/ralsei \n> ").split(",");
// Ask for update frequency
var interval: number =
  parseInt(readline.question("How often do you want me to check on this sub (in minutes) \n> ")) * 60000;
if (interval < 120000) {
  console.log("Anything below 2 minute is not good for Reddit's potato server, automatically setting it to 2 minute");
  interval = 120000;
}
console.log("Okay, I'll keep an eye on this sub...");
// Check action
function check(): void {
  subs.forEach((element) => {
    var sub = element.trim();
    // Send a request
    if (debug_mode)
      console.log(`[Debug] (Timestemp: ${Date.now()}): Sending request to https://reddit.com/${sub}/new/.json`);
    axios.default
      .get(`https://reddit.com/${sub}/new/.json`)
      .then((response) => {
        stats.requests.successes++;
        if (debug_mode) console.log(`[Debug] (Timestemp: ${Date.now()}): Got response`);
        if (!canConnect) {
          canConnect = true;
          console.log("Got internet again :)");
          lines++;
        }
        var res: RedditSubResponse = response.data;
        memoryCheck(res, 0, sub);
      })
      .catch((error) => {
        stats.requests.fails++;
        if (debug_mode) {
          console.log(`[Debug] (Timestemp: ${Date.now()}): ${error}`);
        } else if (canConnect) {
          canConnect = false;
          console.log("Failed to fetch from Reddit. Run in debug mode to see what went wrong.");
          lines++;
        }
      });
  });
}
// Start the check timer
if (debug_mode) console.log(`[Debug] (Timestemp: ${Date.now()}): Starting a interval timer of ${interval}`);
check();
var checkTimer = setInterval(() => {
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
      if (debug_mode) console.log(`[Debug] (Timestemp: ${Date.now()}): refresh key detected`);
      check();
      break;
    case ",":
      console.log(
        boxen(
          `\x1b[37m[,]: Show shortcuts\n\x1b[37m[x]: Exit the program\n\x1b[37m[r]: Refresh immediately\n\x1b[37m[c]: Reset outputs\n\x1b[37m[s]: show statistics\n\x1b[37m[p]: toggle autocheck\n\x1b[37m[up/down arrow]: change check interval`,
          {
            title: "Shortcuts",
            titleAlignment: "center",
            borderColor: "blackBright",
          }
        )
      );
      lines += 9;
      break;
    case "c":
      if (debug_mode) {
        console.log(`[Debug] (Timestemp: ${Date.now()}): Clearing is not available in debug mode`);
        break;
      }
      process.stdout.moveCursor(0, -lines);
      process.stdout.clearScreenDown();
      lines = 0;
      break;
    case "x":
      if (debug_mode) console.log(`[Debug] (Timestemp: ${Date.now()}): Exit key detected, shutting down`);
      process.exit(0);
    case "s":
      console.log(
        boxen(
          `Successiful requests: ${stats.requests.successes}\nFailed requests: ${stats.requests.fails}\nPosts found: ${stats.posts}`,
          {
            title: "Session Stats",
            titleAlignment: "center",
          }
        )
      );
      lines += 5;
      break;
    case "\u001B\u005B\u0041":
      //up
      interval += 60000;
      if (!paused) {
        clearInterval(checkTimer);
        checkTimer = setInterval(() => {
          check();
        }, interval);
      }
      console.log(`The check interval is increased to ${interval / 60000} minute`);
      lines++;
      break;
    case "\u001B\u005B\u0042":
      if (interval < 180000) {
        console.log("Can't go any faster than 2 minutes, Reddit's potato server will explode.");
        lines++;
        break;
      }
      //down
      interval -= 60000;
      if (!paused) {
        clearInterval(checkTimer);
        checkTimer = setInterval(() => {
          check();
        }, interval);
      }
      console.log(`The check interval is decreased to ${interval / 60000} minute`);
      lines++;
      break;
    case "p":
      paused = !paused;
      if (paused) {
        clearInterval(checkTimer);
        console.log("Autocheck paused");
        lines++;
      } else {
        checkTimer = setInterval(() => {
          check();
        }, interval);
        check();
        console.log("Autocheck is back");
        lines++;
      }
      //toggle pause
      break;
    default:
      break;
  }
});

function memoryCheck(res: RedditSubResponse, index: number, sub: string) {
  if (!res.data.children[index]) {
    if (debug_mode) console.log(`[Debug] (Timestemp: ${Date.now()}): Array indexing exceeded`);
    return;
  }
  if (debug_mode) console.log(`[Debug] (Timestemp: ${Date.now()}): Indexing array ${index}`);
  subMemory(res.data.children[index].data.id, sub, (found) => {
    if (!found) {
      console.log(`I found a new post! Link: https://reddit.com${res.data.children[index].data.permalink}`);
      lines++;
      stats.posts++;
      notifier.notify({
        title: `New ${sub} post`,
        message: res.data.children[index].data.title,
        sound: true,
        wait: true,
        icon: ``,
        open: `https://reddit.com${res.data.children[index].data.permalink}`,
      });
      memoryCheck(res, index + 1, sub);
    }
  });
}

// Made with ~~❤️~~ a keyboard by Froxcey
