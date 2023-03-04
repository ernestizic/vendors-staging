import React from 'react';
import styled from 'styled-components';
import { PieChart, ResponsiveContainer, Pie, Cell } from 'recharts';

const ChartContainer = styled.div`
	position: relative;
	.chart-inner-text{
		position: absolute;
		left: 50%;
		margin-left: -20px;
		top: 50%;
		margin-top: -30px;
	}
`;
const ChartContents = styled.div`
	margin-top: 16px;
	.item-row {
		margin-top: 16px;
	}
	.item-name {
		display: flex;
		align-items: center;
		gap: 8px;
		max-width: 70%;
		p {
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}
	}
`;
const Color = styled.div`
	min-width: 16px;
	width: 16px;
	height: 16px;
	background: ${({color})=> color && color};
	border-radius: 100%;
`
const EmptyList = styled.div`
	text-align: center;
	max-width:100%;
	margin: 50px auto;
`

const Chart = () => {
	const products = [
		{
			id: 1,
			name: "Birkin bag",
			clicks: 60
		},
		{
			id: 2,
			name: "Jordan shoes",
			clicks: 30
		},
		{
			id: 3,
			name: "Fenty lip gloss",
			clicks: 16
		},
		{
			id: 4,
			name: "iPhone 14 pro",
			clicks: 10
		},
		{
			id: 5,
			name: "Aventus creed perfume long text",
			clicks: 4
		},
	]
	const COLORS = ['#14142B', '#9F1C52', '#EE2A7B', '#F694BD', '#FFF5F9'];

	//  source data for chart.
	const chartData = products.map(product => {
		return {name: product.name, value: product.clicks}
	})

	// map products and add color to each
	const info = products.map((product, idx) => {
		product.color = COLORS[idx]
		return product
	})
	return (
		<>
			{chartData.length < 1 ? (
				<EmptyList>
					Nothing here
				</EmptyList>
			) : (
				<>
				
					<ChartContainer>
						<ResponsiveContainer width="100%" height={200}>
							<PieChart>
								<Pie
									data={chartData}
									innerRadius={60}
									outerRadius={90}
									fill='#8884d8'
									paddingAngle={0}
									dataKey='value'
								>
									{chartData.map((entry, index) => (
										<Cell
											key={`cell-${index}`}
											fill={COLORS[index % COLORS.length]}
										/>
									))}
								</Pie>
							</PieChart>
						</ResponsiveContainer>
						<div className='chart-inner-text'>
							<p className='body-xl-semibold'>120</p>
							<p className='body-sm-regular'>Clicks</p>
						</div>
					</ChartContainer>

					<ChartContents>
						<header className='body-xs-medium'>Products</header>
						{info.map((d, idx) => (
							<div className='body-xs-regular flexRow justifySpaceBetween item-row' key={idx}>
								<div className='item-name'>
									<Color color={d.color}/>
									<p>{d.name}</p>
								</div>
								<p>50% ({d.clicks})</p>
							</div>
						))}
					</ChartContents>
				</>
			)}
		</>
	);
};

export default Chart;
