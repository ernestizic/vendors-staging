import React, { useState, useEffect, useMemo } from 'react';
import EmptyState from '../../../components/dashboardComponents/EmptyState';
import Header from '../../../components/dashboardComponents/header/Header';
import ProductTable from '../../../components/dashboardComponents/table/ProductTable';
import { products } from '../../../utils/products';
import { ProductPage } from './ProductStyle';

const Products = () => {
	const [tableData, setTableData] = useState([]);
	useEffect(() => {
		setTableData(products);
	}, [tableData]);

	// Product Table columns to render
	const columns = [
		{
			field: 'name',
			header: 'Product name',
		},
		{
			field: 'date',
			header: 'Date added',
		},
		{
			field: 'price',
			header: 'Price',
		},
		{
			field: 'category',
			header: 'Category',
		},
		{
			field: 'tags',
			header: 'Tags',
		},
		{
			field: 'clicks',
			header: 'No of clicks',
		},
		{
			field: 'saves',
			header: 'No of saves',
		},
		{
			field: 'status',
			header: 'Status',
		},
	];

	const data = useMemo(
		() =>
			tableData?.map((d, idx) => {
				return d;
			}),
		[tableData]
	);

	return (
		<>
			<Header title='Product' />
			{tableData.length < 1 ? (
				<EmptyState />
			) : (
				<ProductPage>
					<ProductTable columns={columns} data={data} />
				</ProductPage>
			)}
		</>
	);
};

export default Products;
