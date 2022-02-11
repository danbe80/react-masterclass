import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinCurrent } from "../api";

const CurrentPrices = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 480px;
	`;

const ItemPrice = styled.li`
	display:flex;
	justify-content: space-around;
	background-color: rgba(0, 0, 0, .5);
	color: ${(props) => props.theme.ContColor};
	padding: 10px;
	margin-bottom: 30px;
	width: 100%;
	border-radius: 20px;
	span:first-child {
		font-size: 15px;
		text-transform: uppercase;
	}
`;

interface IPrice {
	id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface PriceProps {
	coinId: string;
}

function Price({coinId}:PriceProps) {
	const {isLoading: priceLoading, data :priceData} = useQuery<IPrice>(["price", coinId], () => fetchCoinCurrent(coinId));

	return (
		<div>
			{priceLoading ? ("Loading Price...") :
			(
				<CurrentPrices>
				<ItemPrice>
					<span>Price:</span>
					<span>{priceData?.quotes.USD.price.toFixed(2)}</span>
				</ItemPrice>
				<ItemPrice>
					<span>Ath_Price:</span>
					<span>{priceData?.quotes.USD.ath_price.toFixed(3)}</span>
				</ItemPrice>
				<ItemPrice>
					<span>Percent Change(15m):</span>
					<span>{priceData?.quotes.USD.percent_change_15m}</span>
				</ItemPrice>
				<ItemPrice>
				<span>Percent Change(30m):</span>
					<span>{priceData?.quotes.USD.percent_change_30m}</span>
				</ItemPrice>
			</CurrentPrices>
			)}
		</div>
	);
}

export default Price;