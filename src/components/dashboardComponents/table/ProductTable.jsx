import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BoostIcon from '../../../assets/icons/boost-icon-pink.svg';
import AngleRight from '../../../assets/icons/angle-right.svg'
import CheckIcon from '../../../assets/icons/check-good.svg';
import Tag from '../../global/Tag';
import ReactPaginate from 'react-paginate';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Checkbox from '../../global/Checkbox';
import { TableContainer, NameContainer, PaginationContainer, HeaderCheck } from './ProductTableStyle';

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

	const [currentPage, setCurrentPage] = useState(+page); //Current Page state
	const [dataPerPage] = useState(6); //number of items per page

	const pageVisited = currentPage * dataPerPage;

	const paginatedData = data.slice(pageVisited, pageVisited + dataPerPage); //data to render per pagination
	const pageCount = Math.ceil(data.length / dataPerPage); //total number of pages

	const [selectedProducts, setSelectedProducts] = useState([])
	
	// handle selection of products from checkbox
	const handleSelect=(e)=> {
		const {value, checked} = e.target
		if(checked) {
			setSelectedProducts((prev)=> [...prev, value])
		} else {
			setSelectedProducts((prev)=> [...prev.filter( item => item !== value)])
		}
	}

	// Change page
	const handlePageClick = ({ selected }) => {
		setCurrentPage(selected);
		// navigate(`/products/${selected}`)
	};


	useEffect(()=> {
		// Navigate to not found route if the page param on route is greater than total page number
		if(currentPage + 1 > pageCount){
			navigate("*")
		} else {
			navigate(`/products/${currentPage}`)
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
								<HeaderCheck check={selectedProducts.length > 0 ? true : false}>
									{selectedProducts.length > 0 && <img src={CheckIcon} alt='selected' /> }
								</HeaderCheck>
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
									<Checkbox 
										id={data.id} 
										onChange={handleSelect}
										check={false}
										value={data.id}
									/>
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
