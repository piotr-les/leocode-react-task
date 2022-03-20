import { useState } from 'react';
import styled from 'styled-components';
import MainContext from '../Context';
import useisOpen from '../hooks/useIsOpen';
import { University } from '../types/types';
import Dropdown from './Dropdown';
import SelectButton from './SelectButton';

const SelectContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: relative;
`;

const AutosuggestionSelect = () => {
	const { ref, isOpen, setIsOpen } = useisOpen();
	const [counterValue, setCounterValue] = useState(0);
	const [chosenValues, setChosenValues] = useState<University[]>([]);

	return (
		<MainContext.Provider
			value={{ counterValue, setCounterValue, chosenValues, setChosenValues }}>
			<SelectContainer ref={ref}>
				<SelectButton isOpen={isOpen} setIsOpen={setIsOpen} />
				<Dropdown isOpen={isOpen} />
			</SelectContainer>
		</MainContext.Provider>
	);
};

export default AutosuggestionSelect;
