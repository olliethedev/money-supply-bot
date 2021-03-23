const { WebClient } = require('@slack/web-api');
const { getData } = require('../../utils/Common');

console.log(process.env.SLACK_VERIFICATION_TOKEN);

// Verify Url - https://api.slack.com/events/url_verification
function verify(data) {
    if (data.token === process.env.SLACK_VERIFICATION_TOKEN) 
    {
        return  data.challenge;
    }
    else return "failed" ; 
}

exports.handler = async (event, context) => {
    let data = 'event_callback'; //default value for local dev work
    if(event.body){
        data = JSON.parse(event.body);
        console.log({data});
    }
    switch (data.type) {
        case "url_verification":{
            return {
                statusCode: 200,
                body: verify(data)
            };
        }
        case "event_callback":{
            const web = new WebClient(process.env.SLACK_TOKEN);
            //data.event.text contains message
            const parsed = await getData();
            await web.chat.postMessage({
                text: parsed,
                channel: data.event.channel,
            });
            return {
                statusCode: 200,
                body: JSON.stringify({data:"ok"})
            };
        }
        default: {
            return {
                statusCode: 500,
                body: JSON.stringify({error:"unknown type"})
            };
        }
    }
}