import React, {useState, useEffect} from 'react'
import Header from '../../../components/dashboardComponents/header/Header'
import Cube from '../../../assets/icons/cube-group.svg';
import Star from '../../../assets/icons/star-group.svg';
import Send from '../../../assets/icons/send-group.svg';
import FlashIcon from '../../../assets/icons/flash-group.svg';
import OverviewCard from '../../../components/dashboardComponents/overviewCard/OverviewCard'
import { BottomRow, OverviewCardsContainer, OverviewPage } from './OverviewStyle'
import Table from '../../../components/dashboardComponents/overviewTable/Table';
import { products } from '../../../utils/products';
import PieChart from '../../../components/dashboardComponents/Chart';

const Overview = () => {
  const [allProducts, setAllProducts] = useState([]);
	useEffect(() => {
		setAllProducts(products);
	}, [allProducts]);

  const cardContent = [
    {
      title: "Total products",
      count: "20",
      percent: "+23.52%",
      perWeek: "4",
      icon: Cube
    },
    {
      title: "Total saves",
      count: "200",
      percent: "-23.52%",
      perWeek: "4",
      icon: Star
    },
    {
      title: "Total link clicks",
      count: "200",
      percent: "+23.52%",
      perWeek: "4",
      icon: Send
    },
    {
      title: "Boosted products",
      count: "8",
      percent: "-23.52%",
      perWeek: "4",
      icon: FlashIcon
    },
  ]
  return (
    <>
      <Header title="Dashboard" />
      <OverviewPage>
        <OverviewCardsContainer>
          {cardContent.map((data, idx)=> (
            <OverviewCard 
              key={idx}
              title={data.title}
              count={data.count}
              percent={data.percent}
              weeklyData={data.perWeek}
              icon={data.icon}
            />
          ))}
        </OverviewCardsContainer>
        <BottomRow>
          <div className='overview-table-container'>
            <header className='body-sm-medium'>Newly added products</header>
            <Table tableData={allProducts} />
          </div>

          <div className='chart-column-container'>
            <header className='body-sm-medium'>Top 5 highest clicks</header>
            <PieChart />
          </div>
        </BottomRow>
      </OverviewPage>
    </>
  )
}

export default Overview