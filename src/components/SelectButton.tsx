import { FC, useContext } from 'react';
import styled from 'styled-components';
import MainContext from '../Context';
import { constants } from '../styleConstants.css';
import { ButtonProps } from '../types/styledTypes';
import Chevron from './Chevron';
import Counter from './Counter';

const Button = styled.button<ButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: 2px solid ${constants.colors.black};
	border-right: 2px solid ${constants.colors.black};
	border-left: 2px solid ${constants.colors.black};
	color: ${constants.colors.black};
	outline: none;
	padding: ${constants.padding.button};
	background-color: ${constants.colors.white};
	cursor: pointer;

	&:hover {
		background-color: ${p => (p.isOpen ? constants.colors.white : constants.colors.gray)};
	}
	&::after {
		z-index: 2;
		content: '';
		position: absolute;
		left: 1.5px;
		bottom: 0;
		width: calc(100% - 3px);
		height: ${p => (p.isOpen ? '3px' : '1.5px')};
		background-color: ${p =>
			p.isOpen ? constants.colors.white : constants.colors.black};
	}
`;
const Caption = styled.div`
	font-size: 1.4rem;
	margin: 0 0.5rem;
`;
const IconContainer = styled.div`
	margin-left: 6px;
`;

interface SelectButtonProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

const SelectButton: FC<SelectButtonProps> = ({ isOpen, setIsOpen }) => {
	const { counterValue } = useContext(MainContext);

	return (
		<Button isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
			<Caption>Universities</Caption>
			<Counter value={counterValue} />
			<IconContainer>
				<Chevron isOpen={isOpen} />
			</IconContainer>
		</Button>
	);
};

export default SelectButton;
