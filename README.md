# Reddit Notifier
Help you stalk on a subreddit.

Project started on Feb 2, 2021

## Installation

1. Install [Node Runtime](https://nodejs.org)

2. Download this project by either doing one of the following.

   1. Click `Code` ⇒ `Download Zip` and unzip.

   2. Run this command:

      ```
      git clone https://github.com/froxcey/reddit-notifier.git
      ```

      

3. Open command line(win)/terminal(other) in this project directory. 

4. Run the following to install dependencies:

   ```shell
   npm install
   ```

   

## How to use

Although the project is written in Typescript, my lovely assistant had already transpiled it into Javascript for me. You can node it automatically.

1. Open console(Win)/terminal(Unix) in this project directory.

2. Start the program by running:

   ```shell
   node .
   ```

   

3. Enter the sub name and hit enter. Ex: r/ralsei, r/memes, r/undertale, r/deltarune, and r/rickroll.

4. Enter how often you want this tool to check for subreddit update. Unit is in minutes, and only enter a number. Recommended: 5.

5. Wait until the tool tells you that there's an update in the console/terminal

The first time you run the tool, it will tell you there's an update. This is not really the case all the time. Just start the program again and it should work fine.

## Help, I found a bug!!!

Oh, bug? Is it a cockroach? No jk... If you want to send me a bug report, here's what to do.

1. Open console(Win)/terminal(Unix) on this project directory

2. Start the program in debug mode by running the following

   ```shell
   NODE_ENV=debug node .
   ```

   (Don't run this for normal use case. The output will look absolutely messy.)

3. Use the program normally until soemthing weird happens

4. Copy everything past `[Debug]: If you're filing a bug report, start copying from this line.`

5. Click on the issue tab on this Github repository

6. Create a new issue

7. Paste

8. Provide any information you think might be useful

9. Send the issue

10. Wait until I respond, which should be within a day

## Contributing

Oh you wanna help? You can check the project out, and fix/add anything with a pull request. Even just grammer fix is great. The project is made using Typescript and NodeJS. Can't code? File bug reports or suggestions, and that's pretty much what I need. Don't want to? You can consider donating to Mozilla, Linux Foundation, and/or Open-Source Initiative.

## Credits

Made by Froxcey

Thanks to several dependencies: nedb, axios, readline-sync, and Typescript.

## License

GNU GPL

For details, please check out the LICENSE file.

I choose this license because I spend a lot of time on this project, and I want everyone to be able access my hard work. Making this project propriatary means my effort is meaningless, so I choose GNU GPL to make sure it stays open source.

## Contact

[Click here](https://froxcey.tumblr.com/links)

## Change log

**c0.1.0a2**

This is a beta release

- Include a better README
- Remove DS_Store
- Better bug report instruction
- Remove unused dependencies
- Use .d.ts for typing

**v0.1.0a1**

This is a beta release

- Initial release

