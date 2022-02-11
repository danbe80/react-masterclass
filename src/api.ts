const BASE_URL = `https://api.coinpaprika.com/v1`;

// async await 대신 then절 (간결한 코드를 위해서)
export function fetchCoins() {
	return fetch(`${BASE_URL}/coins`).then((response) => response.json());

	/* 
	async await 사용 시
	return await (await fetch(`${BASE_URL}/coins`)).json();
	*/
}
export function fetchCoinsInfo(coinId:string) {
	return fetch(`${BASE_URL}/coins/${coinId}`).then((response) => response.json());
}
export function fetchCoinsTickers(coinId:string) {
	return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) => response.json());
}

export function fetchCoinHistory(coinId: string) {
	const endDate = Math.floor(Date.now() / 1000);
	const startDate = endDate - 60 * 60 * 24 * 7 * 2;
	return fetch(
		`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
	).then((Response) => Response.json());
}

export function fetchCoinCurrent(coinId: string) {
	return fetch(
		`${BASE_URL}/tickers/${coinId}`
	).then((Response) => Response.json());
}