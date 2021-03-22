const https = require('https'),
      qs = require('querystring')

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
    console.log(event);
    const data = JSON.parse(event.body);
    switch (data.type) {
        case "url_verification":{
            return {
                statusCode: 200,
                body: verify(data)
            };
        }
        case "event_callback":{
            return {
                statusCode: 200,
                body: JSON.stringify({data:todo})
            };
        }
        default: {
            return {
                statusCode: 50,
                body: JSON.stringify({error:"unknown type"})
            };
        }
    }
}