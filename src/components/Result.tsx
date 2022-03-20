import { FC } from 'react';
import styled from 'styled-components';
import { Check } from '../assets/icons';
import { constants } from '../styleConstants.css';
import { ResultItemProps } from '../types/styledTypes';

const Container = styled.div`
	cursor: pointer;
	display: flex;

	&:hover {
		background-color: ${constants.colors.gray};
	}

	&:last-child div {
		border-bottom: none;
	}
`;

const ResultItem = styled.div<ResultItemProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-left: 2.4rem;
	padding: 1.6rem 0;
	width: 100%;
	border-bottom: 1px solid ${constants.colors.gray};
	font-size: 1.4rem;
	font-weight: ${p => (p.isChosen ? '700' : '400')};
	user-select: none;
`;

const IconContainer = styled.div`
	margin-left: 1rem;
	padding-right: 2.4rem;
`;

interface ResultProps {
	name: string;
	onClick: () => void;
	onDoubleClick: () => void;
	isChosen: boolean;
}

const Result: FC<ResultProps> = ({ name, onClick, isChosen, onDoubleClick }) => {
	return (
		<Container onClick={onClick} onDoubleClick={onDoubleClick}>
			<ResultItem isChosen={isChosen}>
				{name}
				<IconContainer>{isChosen ? <Check /> : null}</IconContainer>
			</ResultItem>
		</Container>
	);
};

export default Result;
