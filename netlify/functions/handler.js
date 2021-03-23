const { WebClient } = require("@slack/web-api");
const { getData } = require('../../utils/Common');

console.log(process.env.SLACK_TOKEN);

exports.handler = async (event, context) => {
  if (event.body) {
    const reqData = JSON.parse(event.body);
    console.log({ reqData });
  }
  let data;
  try {
    const parsed = await getData();
    const web = new WebClient(process.env.SLACK_TOKEN);
    data = await web.chat.postMessage({
      text: parsed,
      channel: "slack-bots-tests",
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ data }),
    };
  } catch (error) {
    console.trace(error);
    return {
      statusCode: 200,
      body: JSON.stringify({ error }),
    };
  }
};
