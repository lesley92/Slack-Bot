require("dotenv").config();

const { App } = require("@slack/bolt");

// Auth our app.
const bot = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN
  });

// Start our Server
(async () => {
    // Start the app
    await bot.start(process.env.PORT || 3000);
    console.log("⚡️ Bolt app is running!");
  })();
