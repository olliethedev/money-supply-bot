# Slack Money Supply Bot

This bot provides money supply change details in Slack.

## To Run Locally
First install Netlify CLI in order to run serverless functions locally.
After that simply call
```bash
SLACK_TOKEN=xoxb-restofslackaccesstokenhere SLACK_VERIFICATION_TOKEN=restofslackverificationtoken netlify dev
```

## To Deloploy
Create new netlify site from git /master branch and add `SLACK_TOKEN` and `SLACK_VERIFICATION_TOKEN` to the environment variables.

To deploy new build just commit to /master branch.
