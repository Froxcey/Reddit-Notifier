# Reddit Notifier

Help you stalk on a subreddit.

This project is still in the very early state.

Project started on Feb 2, 2021

## How to use

**Method 1: Run script**

First you need to install it

1. Install [Node Runtime](https://nodejs.org)

2. Go to releases and download redditnotifier-compiled.zip

3. Unzip

3. Open command line(win)/terminal(other) in the redditnotifier directory.

4. Run the following to install dependencies:

   ```shell
   npm install
   ```

Then you need to run it

1. Open console(Win)/terminal(Unix) in this project directory.

2. Start the program by running:

   ```shell
   node .
   ```

The first time you use it, it will bomb you with a bunch of results (10 probably). It should act normally the second time.

**Method 2: Executable builds**

I'm having trouble with building the executable. It is coming soon.

## Help, I found a bug!!!

Oh, bug? Is it a cockroach? No jk... If you want to send me a bug report, here's what to do. Btw this is only possible with running with script.

1. Open console(Win)/terminal(Unix) on this project directory

2. Start the program in debug mode by running the following

   ```shell
   NODE_ENV=debug node .
   ```

   (Don't run this for normal use case. The output will become absolutely messy.)

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

Thanks to several FOSS dependencies: nedb, axios, readline-sync, and Typescript.

## License

GNU GPL

For details, please check out the LICENSE file.

I choose this license because I spend a lot of time on this project, and I want everyone to be able access my hard work. Making this project propriatary means my effort is meaningless, so I choose GNU GPL to make sure it stays open source.

## Contact

[Click here](https://froxcey.tumblr.com/links)

## Change log

Upcoming?

- Notification with icon?
- GUI?

**v0.1.0** (Current)

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
