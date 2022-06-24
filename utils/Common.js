const { ApiSource } = require("./ApiSource");
const { Formatter } = require("./Formatter");

// function to get the money supply data
module.exports.getData = async () => {
  const blocks = [];
  const moneyTypes = ["M1", "M2", "M3"];
  for (let i = 0; i < moneyTypes.length; i++) {
    const moneyType = moneyTypes[i];
    try {
      const blockData = await getBlockFromJson(moneyType);
      blocks.push(blockData);
      if (i < moneyTypes.length - 1) {
        blocks.push({
          type: "divider",
        });
      }
    } catch (ex) {
      blocks.push({
        type: "section",
        text: {
          type: "plain_text",
          text: ":warning: Error loading: " + moneyType,
          emoji: true,
        },
      });
    }
  }
  return blocks;
};

const getBlockFromJson = async (moneyType) => {
  const moneyResp = await ApiSource.getMoneySupply(moneyType);
  const moneyRespJson = await moneyResp.json();
  const { moneyDataFrom, moneyDataTo, moneyDataYearAgo } =
    ApiSource.parseResponse(moneyRespJson);
  const parsed = Formatter.formatMessage(
    moneyDataFrom[0],
    moneyDataFrom[1],
    moneyDataTo[0],
    moneyDataTo[1],
    moneyDataYearAgo[1],
    moneyType
  );
  return {
    type: "section",
    text: {
      type: "mrkdwn",
      text: parsed,
    },
  };
};
