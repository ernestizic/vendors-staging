import React from 'react';
import PropTypes from 'prop-types';
import BoostIcon from '../../../assets/icons/boost-icon-pink.svg';
import Tag from '../../global/Tag';
import { TableContainer, CheckBox, NameContainer } from './ProductTableStyle';

const displayTags = (tags) => {
    return (
        <div className='flexRow' style={{ gap: '4px' }}>
            {tags.slice(0, 2).map((d, idx) => (
                <Tag
                    key={idx}
                    content={d}
                    color={idx === 0 ? 'var(--primary-main)' : 'var(--accent_1-dark)'}
                    bg={idx === 0 ? 'var(--accent_2-main)' : 'var(--accent_1-light)'}
                />
            ))}
            {tags.length > 2 && <Tag content={`+${tags.length - 2}`} />}
            
        </div>
    );
};

const ProductTable = ({ columns, data }) => {
	return (
		<div>
			<TableContainer>
				<table>
					<thead>
						<tr>
							<th style={{ width: '36px' }}>
								<CheckBox></CheckBox>
							</th>
							{columns.map((col) => (
								<th key={col.header}> {col.header} </th>
							))}
						</tr>
					</thead>

					<tbody>
						{data.map((data, idx) => (
							<tr key={data.id}>
								<td>
									<CheckBox></CheckBox>
								</td>
								<td>
									<NameContainer>
										<div>
											<img
												src={data.avatar}
												alt='User'
												className='product-image'
											/>
											<p className='product-name'>{data.name}</p>
										</div>
                                        {data.boosted && <img src={BoostIcon} alt='boosted' width='10px' />}
									</NameContainer>
								</td>
								<td>{data.date}</td>
								<td>{data.price}</td>
								<td>{data.category}</td>
								<td>{data.tags && displayTags(data.tags)}</td>
								<td>{data.clicks}</td>
								<td>{data.saves}</td>
								<td>
									<Tag content={data.status} status />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</TableContainer>
		</div>
	);
};


// PropTypes
ProductTable.propTypes = {
	data: PropTypes.array,
	columns: PropTypes.array,
};

export default ProductTable;
