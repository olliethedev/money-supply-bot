
var SlackBot = require("slackbots");
const fetch = require("node-fetch");
var channel = "slack-bots-tests";

var bot = new SlackBot({
  token: process.env.SLACK_TOKEN,
  name: "MoneySupplyBot"
});

exports.handler = async (event, context) => {
    // Only allow POST
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }
  
    const params = querystring.parse(event.body);
  
    console.log("DEBUG PARAMS", params);
  
    bot.postMessageToChannel(channel, "hello");
  };