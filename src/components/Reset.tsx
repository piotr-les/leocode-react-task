import { FC } from 'react';
import styled from 'styled-components';
import { constants } from '../styleConstants.css';

const StyledButton = styled.button`
	width: 100%;
	padding: ${constants.padding.button};
	border: none;
	align-self: flex-end;
	outline: 1px solid ${constants.colors.black};
	background-color: ${constants.colors.black};
	color: ${constants.colors.white};
	cursor: pointer;
	font-size: 1.4rem;
`;

interface ResetProps {
	ResetChosenValues: () => void;
}
const Reset: FC<ResetProps> = ({ ResetChosenValues }) => {
	return <StyledButton onClick={ResetChosenValues}>Reset</StyledButton>;
};

export default Reset;
