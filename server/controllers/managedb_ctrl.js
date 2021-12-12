const axios = require("axios");

const patternNum = [
	0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24,
	16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];
const OtherBetSet = {
	dozen1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
	dozen2: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
	dozen3: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
	column1: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
	column2: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
	column3: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
	red: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36],
	black: [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35],
	even: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
	odd: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35],
	half1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
	half2: [
		19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
	],
};
const values = ["hlaf1", "hlaf2", "red", "black", "even", "odd"];

const usersPoints = {};

function rotateValue(user) {
	var randomNum = Math.floor(Math.random() * 37);
	user.spinResult = patternNum[randomNum];
	user.rotateNum = randomNum;
	console.log(user.spinResult);
}

function calcMatch(user, betValue) {
	var betAmount = 0;
	for (let key in betValue) {
		const value = betValue[key];
		betAmount += value; 
		if (value > 0) {
			if (!isNaN(key)) {
				let k = Number(key);
				if (k >= 0 && k <= 36 && k === user.spinResult) {
					user.totalMoney += value * 36;
				}
			} else {
				if (OtherBetSet[key].indexOf(user.spinResult) !== -1) {
					const cofficient = values.indexOf(key) !== -1 ? 2 : 3;
					user.totalMoney += value * cofficient;
				}
			}
		}
	}
	return betAmount;
}

module.exports = {
	startSignal: async (req, res) => {
		try {
			const { token, betValue } = req.body;
			let user = usersPoints[token];
			if (user === undefined) {
				usersPoints[token] = {
					totalMoney: 0,
					spinResult: 0,
					rotateNum: 0,
				};
				user = usersPoints[token];
			}
			rotateValue(user);
			var betAmount = calcMatch(user, betValue);

			var result = await axios.post(process.env.PLATFORM_SERVER + "api/games/bet", {
				token: token,
				amount: betAmount
			});

			result = await axios.post(process.env.PLATFORM_SERVER + "api/games/winlose", {
				token: token,
				amount: user.totalMoney,
				winState: user.totalMoney ? true : false
			})

			res.json({
				status: "ok",
				rotateNum: user.rotateNum,
				moneyResult: user.totalMoney,
			});
			user.totalMoney = 0;

		} catch (err) {
			console.log("err.message",err.message);
			res.json({
				status: "error",
				message: err.message
			});
		}
	},
};
