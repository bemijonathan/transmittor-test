
import { tsvParse, csvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";

import * as  data from  '../data/data.tsv';

function parseData(parse) {
	return function(d) {
		d.date = parse(d.date);
		d.open = +d.open;
		d.high = +d.high;
		d.low = +d.low;
		d.close = +d.close;
		d.volume = +d.volume;

		return d;
	};
}

const parseDate = timeParse("%Y-%m-%d");

export function getData() {
	// const promiseMSFT = fetch("../data/data.tsv")
	// 	.then(response => response.text())
		// .then
		console.log(data)
		debugger
		data = tsvParse(data, parseData(parseDate))
		console.log(data)
		// debugger

	return data;
}
