const { WebClient } = require("@slack/web-api");
const { getData } = require('../../utils/Common');

console.log(process.env.SLACK_TOKEN);
// this enpoint can be called publically. intented to invoked for periodic updates 
exports.handler = async (event, context) => {
  if (event.body) {
    const reqData = JSON.parse(event.body);
    console.log({ reqData });
  }
  let data;
  try {
    // get money supply data
    const parsed = await getData();
    const web = new WebClient(process.env.SLACK_TOKEN);
    data = await web.chat.postMessage({
      blocks: parsed,
      channel: "random",
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ data }),
    };
  } catch (error) {
    console.trace(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error }),
    };
  }
};
