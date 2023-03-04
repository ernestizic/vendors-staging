import React from 'react';
import ArrowGreen from '../../../assets/icons/arrow-circle-up.svg';
import styled from 'styled-components';

const Card = styled.div`
	border: 1px solid var(--line-text);
	min-width: 258px;
	width: 258px;
	padding: 24px;
    border-radius: 8px;
    .count {
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 60px;
    }
    .weekly {
        display: flex;
        gap: 10px;
    }
    @media only screen and (max-width: 768px) {
        max-width: 100%;
        min-width: 100%;
        width: 100%;
        padding: 16px;
        .weekly {
            flex-direction: column;
            gap: 6px;
        }
        .count {
            font-size: 24px;
            line-height: 36px;
        }
	}
`;

// total count value to render
const totalReturn =(num)=> {
    const val = Number(num)
    const firstChar = num.charAt(0)
    if(val > 999){
        return firstChar+"000+"
    } else {
        return val
    }
}

const OverviewCard = ({title, count, percent, weeklyData, icon}) => {
	return (
		<Card>
			<div className='flexRow justifySpaceBetween alignStart'>
				<div style={{marginBottom: "19px"}}>
					<p className='body-xs-medium '>{title}</p>
					<p className='count'>{totalReturn(count)}</p>
				</div>
				<img src={icon} alt='card icon' width='40px' />
			</div>

			<div className='weekly'>
				<p className='flexRow' style={{ gap: '5px' }}>
					<img src={ArrowGreen} alt='' width='16px' /> {percent}
				</p>
				<p>{weeklyData} this week</p>
			</div>
		</Card>
	);
};

export default OverviewCard;
