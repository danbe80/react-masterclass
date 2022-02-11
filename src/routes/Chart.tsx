import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexCharts from 'react-apexcharts'

interface IHistorical {
	time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
	coinId: string;
}

function Chart({coinId} : ChartProps) {
	const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], ()=> fetchCoinHistory(coinId), {refetchInterval: 10000});
	const result = data?.map(price => {
		const x = new Date(price.time_close);
		const y = [price.open.toFixed(2), price.high.toFixed(2), price.low.toFixed(2), price.close.toFixed(2)];
		return { x, y }
	})

	return (
		<div>
			{isLoading ? (
				"Loading chart..."
			) : (
				< ApexCharts 
				type="candlestick"
				series = {[
					{
						name: "Price",
						data: result
					}
				]}
				options={{
					theme: {
						mode: "dark"
					},
					chart: {
						toolbar: {
							show: false
						}
					},
					yaxis : {
						show: false
					},
					xaxis : {
						type: "datetime"
						
					}
				}}
				/>
			)}
		</div>
	);
}

export default Chart;