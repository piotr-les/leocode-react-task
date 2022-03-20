import { FC } from 'react';
import styled from 'styled-components';
import { constants } from '../styleConstants.css';

const CounterContainer = styled.div`
	background-color: ${constants.colors.black};
	text-align: center;
	padding: 0.2rem 0.3rem;
	margin-left: 0.6rem;
	color: #fff;
	font-size: 1.4rem;
	font-weight: 700;
`;

interface CounterProps {
	value: number;
}

const Counter: FC<CounterProps> = ({ value }) => {
	return value > 0 ? <CounterContainer>{value}</CounterContainer> : null;
};

export default Counter;
