import getSpotPrice from "./spot-price.js";
describe("Coins API", () => {
  it("fetches the current spot price", () => {
    const options = {
      currencyPair: {
        baseCurrency: "DOGE",
        quoteCurrency: "USD"
      }
    };
    expect(getSpotPrice(options)).toReturnWith(expect.any(Number));
  });
});
