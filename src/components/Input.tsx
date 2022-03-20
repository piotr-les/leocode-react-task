import { FC } from 'react';
import styled from 'styled-components';
import { constants } from '../styleConstants.css';

const InputContainer = styled.div`
	width: 100%;
	padding: 1rem 1.4rem;
	border-bottom: 1px solid ${constants.colors.gray};
`;

const StyledInput = styled.input`
	outline: none;
	padding: 1rem;
	font-size: 1.4rem;
	width: 100%;
	border: 2px solid ${constants.colors.black};
	&:focus {
		border-color: ${constants.colors.blue};
	}
`;

interface InputProps {
	value: string;
	setValue: (value: string) => void;
}

const Input: FC<InputProps> = ({ value, setValue }) => {
	return (
		<InputContainer>
			<form // @ts-ignore
				autocomplete="off">
				<StyledInput
					type="text"
					name="name"
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
			</form>
		</InputContainer>
	);
};

export default Input;
