
const { WebClient } = require('@slack/web-api');
const fetch = require("node-fetch");
const querystring = require("querystring");


console.log(process.env.SLACK_TOKEN);



exports.handler = async (event, context) => {
    // // Only allow POST
    // if (event.httpMethod !== "POST") {
    //   return { statusCode: 405, body: "Method Not Allowed" };
    // }
  
    const params = querystring.parse(event.body);
  
    console.log("DEBUG PARAMS", params);
    let data;
    try {
        const web = new WebClient(process.env.SLACK_TOKEN);
        const data = await web.chat.postMessage({
            text: 'Hello world!',
            channel: "slack-bots-tests",
          });
    } catch (error) {
        data = error;
    }
    return {
        statusCode: 200,
        body: JSON.stringify({data})
    };
  };