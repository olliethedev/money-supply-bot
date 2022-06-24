const { ApiSource } = require("./ApiSource");
const { Formatter } = require("./Formatter");

// function to get the money supply data
module.exports.getData = async (moneySupplyType) => {
  const moneyResp = await ApiSource.getMoneySupply('M1');
  const money2Resp = await ApiSource.getMoneySupply('M2');
  const moneyRespJson = await moneyResp.json();
  const { moneyDataFrom, moneyDataTo, moneyDataYearAgo } = ApiSource.parseResponse(moneyRespJson);
  const { money2DataFrom, money2DataTo, money2DataYearAgo } = ApiSource.parseResponse(money2RespJson);
  const parsed = Formatter.formatMessage(
    moneyDataFrom[0],
    moneyDataFrom[1],
    moneyDataTo[0],
    moneyDataTo[1],
    moneyDataYearAgo[1],
    moneySupplyType
  );
  const parsed2 = Formatter.formatMessage(
    money2DataFrom[0],
    money2DataFrom[1],
    money2DataTo[0],
    money2DataTo[1],
    money2DataYearAgo[1],
    moneySupplyType
  );
  return ':flag-ca:' + parsed + ' ' + parsed2;
};
