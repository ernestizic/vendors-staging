import React from 'react';
import { OverviewTable, NameContainer } from './TableStyle';
import BoostIcon from '../../../assets/icons/boost-icon-pink.svg';
import Tag from '../../global/Tag';
import { Link } from 'react-router-dom';

const Table = ({tableData}) => {
	// Table columns to render
	const columns = [
		{
			field: 'serial',
			header: 'S/N',
		},
		{
			field: 'name',
			header: 'Product name',
		},
		{
			field: 'price',
			header: 'Price',
		},
		{
			field: 'status',
			header: 'Status',
		},
	];
	return (
		<div>
			<OverviewTable>
				<thead>
					<tr>
						{columns.map((col) => (
							<th key={col.header}> {col.header} </th>
						))}
					</tr>
				</thead>

				<tbody>
					{tableData.slice(-5).map((data, idx) => (
						<tr key={data.id}>
							<td>
								{idx + 1}
							</td>
							<td>
							<Link to={`/products/edit/${data.id}`}>
								<NameContainer>
									<div>
										<img
											src={data.avatar}
											alt='User'
											className='product-image'
										/>
										<p className='product-name'>{data.name}</p>
									</div>
									{data.boosted && (
										<img src={BoostIcon} alt='boosted' width='10px' />
									)}
								</NameContainer>
							</Link>
							</td>
							<td>{data.price}</td>
							<td>
								<Tag content={data.status} status />
							</td>
						</tr>
					))}
				</tbody>
			</OverviewTable>
		</div>
	);
};

export default Table;
