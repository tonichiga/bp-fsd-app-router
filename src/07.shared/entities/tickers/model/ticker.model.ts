"ticker";
import Bar from "./relations/bar.model";

class Ticker {
  ticker: string;
  queryCount: number;
  resultsCount: number;
  adjusted: boolean;
  results: Bar[];
  constructor(data) {
    this.ticker = data.ticker;
    this.queryCount = data.queryCount;
    this.resultsCount = data.resultsCount;
    this.adjusted = data.adjusted;
    this.results = data.results.map((result) => new Bar(result));
  }
}

export default Ticker;
