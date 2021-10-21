const { ApiSource } = require("./ApiSource");
const { Formatter } = require("./Formatter");

// function to get the money supply data
module.exports.getData = async () => {
  const moneyResp = await ApiSource.getMoneySupply();
  console.log(moneyResp);
  const moneyRespJson = await moneyResp.json();
  const { moneyDataFrom, moneyDataTo, moneyDataYearAgo } = ApiSource.parseResponse(moneyRespJson);
  const parsed = Formatter.formatMessage(
    moneyDataFrom[0],
    moneyDataFrom[1],
    moneyDataTo[0],
    moneyDataTo[1],
    moneyDataYearAgo[1]
  );
  return parsed;
};
