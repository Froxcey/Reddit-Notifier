# :warning: Deprecation Notice

In response to Reddit killing third party apps, this project will no longer receive any update. For more information please visit <https://www.reddit.com/r/ModCoord/comments/1476fkn>

\- Frox, Maintainer

# Reddit Notifier

A NodeJS console application that helps you stalk on a subreddit.

Project started on Feb 2, 2022

## How to use

**Method 1: Run script**

First you need to install it

1. Install [Node Runtime](https://nodejs.org)

2. Go to releases and download .zip file

3. Unzip

4. Open command line(Windows)/terminal(Unix) in the redditnotifier directory.

5. Run the following to install dependencies:

   ```shell
   npm install
   ```

Then you need to run it

1. Open console(Win)/terminal(Unix) in this project directory.

2. Start the program by running:

   ```shell
   node .
   ```

The first time you use it, it will bomb you with a bunch of results (10 probably). It should act normally afterward.

**Method 2: Executable builds**

I'm having trouble with building the executable. It is coming soon.

## Help, I found a bug!!!

Oh, bug? Is it a cockroach? No jk... If you want to send me a bug report, here's what to do. Btw this is only possible with running with script.

1. Open console(Windows)/terminal(Unix) on this project directory

2. Start the program in debug mode by running the following

   ```shell
   NODE_ENV=debug node .
   ```

   (Don't run this for normal use case. The output will become an absolutely mess.)

3. Use the program normally until the abnormal

4. Copy everything past `[Debug]: If you're filing a bug report, start copying from this line.`

5. Click on the issue tab of this Github repository

6. Create a new issue

7. Paste

8. Provide any information you think might be useful

9. Send the issue

10. Wait until I respond, which should be within a day

## Contributing

Oh you wanna help? You can check the project out, and fix/add anything with a pull request. Even just grammer fix is great. The project is made using Typescript and NodeJS. Can't code? File bug reports or suggestions, and that's pretty much what I need. Don't want to? You can consider donating to Mozilla, Linux Foundation, and/or Open-Source Initiative.

## Credits

Made by Froxcey

Thanks to these dependencies: nedb, axios, readline-sync, and Typescript.

## License

GNU GPL

For details, please check out the LICENSE file.

I choose this license because I spend a lot of time on this project, and I want everyone to be able access my hard work. Making this project propriatary means my effort is meaningless, so I choose GNU GPL to make sure it stays open source.

## Contact

[Click here](https://froxcey.tumblr.com/links)

## Change log

Upcoming?

- Notification with icon?
- GUI using ElectronJS?

**v0.4.0** (Latest)

- You can now use "," to track multiple subs at a time

Spread awareness: newer version of node-ip is malicious, so downgrade and lock version using `npm i node-ipc@10.1.0 --save-exact`. It's okay to support Ukraine, but don't do it in the harmful way.

**v0.3.0**

- Improve aesthetic by adding a box
- Clear console when the process starts
- Shortcut c for clearing outputs (clean the console)
- Clean up packages that are not used
- Remove credit (cuz there's already a link)
- Shortcut s to show session statistics
- Automatically looks for new post when wake from sleep
- Short p to toggle auto check (r shortcut still works)
- Fix debug mode timestamps
- Arrow keys shortcuts for changing check interval quickly

**v0.2.0**

- Add shortcuts. x: exit. r: refresh.

**v0.1.1**

- Internet errors no longer spams the console

**v0.1.0**

- Add notification feature
- Debug mode now includes timestamps
- Support update detection for more than one post

**v0.1.0a2**

This is an alpha release

- Include a better README
- Remove DS_Store
- Better bug report instruction
- Remove unused dependencies
- Use .d.ts for typing

**v0.1.0a1**

This is an alpha release

- Initial release

Made with ~~❤️~~ ⌨️ by Froxcey
