import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BoostIcon from '../../../assets/icons/boost-icon-pink.svg';
import Tag from '../../global/Tag';
import { TableContainer, CheckBox, NameContainer, PaginationContainer } from './ProductTableStyle';
import ReactPaginate from 'react-paginate';
import { useNavigate, useParams } from 'react-router-dom';

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
	const {page} = useParams()
	const navigate = useNavigate()

	const [currentPage, setCurrentPage] = useState(page);
	const [dataPerPage] = useState(6);

	const pageVisited = currentPage * dataPerPage;
	// const indexOfFirstData = pageVisited - dataPerPage;

	const paginatedData = data.slice(pageVisited, pageVisited + dataPerPage);
	const pageCount = Math.ceil(data.length / dataPerPage);


	useEffect(()=> {
		setCurrentPage(page)
	}, [page])

	// Change page
	const handlePageClick = ({ selected }) => {
		navigate(`/products/${selected}`)
		setCurrentPage(selected);
	};

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
						{paginatedData.map((data, idx) => (
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

			<PaginationContainer>
				<div>
					<ReactPaginate
						breakLabel='...'
						nextLabel='>'
						previousLabel='<'
						initialPage={currentPage}
						pageCount={pageCount}
						onPageChange={handlePageClick}

						containerClassName='pagination-container'
						pageLinkClassName='page-button-a'
						previousLinkClassName='previousBtn-a'
						nextLinkClassName='nextBtn-a'
						activeLinkClassName='active-page-button'
						renderOnZeroPageCount={null}
					/>
					<p className='body-sm-medium colorBody'>8/50 products</p>
				</div>
				<p>Page 1 of 7</p>
			</PaginationContainer>
		</div>
	);
};


// PropTypes
ProductTable.propTypes = {
	data: PropTypes.array,
	columns: PropTypes.array,
};

export default ProductTable;
