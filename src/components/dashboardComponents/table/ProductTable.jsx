import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BoostIcon from '../../../assets/icons/boost-icon-pink.svg';
import AngleRight from '../../../assets/icons/angle-right.svg'
import Tag from '../../global/Tag';
import { TableContainer, CheckBox, NameContainer, PaginationContainer } from './ProductTableStyle';
import ReactPaginate from 'react-paginate';
import { Link, useNavigate, useParams } from 'react-router-dom';

// component to render list of tags
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

// get next label icon for pagination
const NextLabel=()=> {
	return(
		<img src={AngleRight} alt="arrow right" />
	)
}
// Get previous label icon for pagination
const PreviousLabel=()=> {
	return(
		<img src={AngleRight} alt="arrow right" style={{transform: "rotate(180deg)"}}/>
	)
}

const ProductTable = ({ columns, data }) => {
	const {page} = useParams()
	const navigate = useNavigate()

	const [currentPage, setCurrentPage] = useState(+page);
	const [dataPerPage] = useState(6);

	const pageVisited = currentPage * dataPerPage;

	const paginatedData = data.slice(pageVisited, pageVisited + dataPerPage);
	const pageCount = Math.ceil(data.length / dataPerPage);

	// Change page
	const handlePageClick = ({ selected }) => {
		setCurrentPage(selected);
		navigate(`/products/${selected}`)
	};

	useEffect(()=> {
		// Navigate to not found route if the page param on route is greater than total page number
		if(currentPage + 1 > pageCount){
			navigate("*")
		}
		// eslint-disable-next-line
	}, [currentPage])

	return (
		<>
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
											{data.boosted && <img src={BoostIcon} alt='boosted' width='10px' />}
										</NameContainer>
									</Link>
								</td>
								<td><Link to={`/products/edit/${data.id}`}>{data.date}</Link></td>
								<td><Link to={`/products/edit/${data.id}`}>{data.price}</Link></td>
								<td><Link to={`/products/edit/${data.id}`}>{data.category}</Link></td>
								<td><Link to={`/products/edit/${data.id}`}>{data.tags && displayTags(data.tags)}</Link></td>
								<td><Link to={`/products/edit/${data.id}`}>{data.clicks}</Link></td>
								<td><Link to={`/products/edit/${data.id}`}>{data.saves}</Link></td>
								<td>
								<Link to={`/products/edit/${data.id}`}><Tag content={data.status} status /></Link>
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
						pageRangeDisplayed={3}
						nextLabel={<NextLabel />}
						previousLabel={<PreviousLabel />}
						pageCount={pageCount}
						onPageChange={handlePageClick}
						initialPage={currentPage}
						containerClassName='pagination-container'
						pageLinkClassName='page-button-a'
						previousLinkClassName='previousBtn-a'
						nextLinkClassName='nextBtn-a'
						activeLinkClassName='active-page-button'
						disabledClassName='paginationDisabled'
						renderOnZeroPageCount={null}
					/>
					{paginatedData.length < dataPerPage ? (
						<p className='body-sm-medium colorBody'>{data.length}/{data.length} products</p>
					) : (
						<p className='body-sm-medium colorBody'>{pageVisited + dataPerPage}/{data.length} products</p>
					)}
				</div>
				<p>Page {currentPage + 1} of {pageCount}</p>
			</PaginationContainer>
		</>
	);
};


// PropTypes
ProductTable.propTypes = {
	data: PropTypes.array,
	columns: PropTypes.array,
};

export default ProductTable;
