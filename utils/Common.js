const { ApiSource } = require("./ApiSource");
const { Formatter } = require("./Formatter");

// function to get the money supply data
module.exports.getData = async () => {
  const moneyResp = await ApiSource.getMoneySupply();
  const moneyRespJson = await moneyResp.json();
  const { moneyDataFrom, moneyDataTo } = ApiSource.parseResponse(moneyRespJson);
  const parsed = Formatter.formatMessage(
    moneyDataFrom[0],
    moneyDataFrom[1],
    moneyDataTo[0],
    moneyDataTo[1]
  );
  return parsed;
};
