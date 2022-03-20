import { FC, useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { fetchUniversities } from '../api/fetchUniversities';
import { Loader } from '../assets/icons';
import MainContext from '../Context';
import { constants } from '../styleConstants.css';
import { University } from '../types/types';
import Input from './Input';
import Reset from './Reset';
import Result from './Result';

const DropdownContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	top: 100%;
	border: 2px solid ${constants.colors.black};
	background-color: ${constants.colors.white};
	margin-top: -2px;
	z-index: 1;
	width: 300px;
	height: 400px;
`;

const ResultsContainer = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: auto;
	overflow-x: hidden;
`;

interface DropdownProps {
	isOpen: boolean;
}

const Dropdown: FC<DropdownProps> = ({ isOpen }) => {
	const { setCounterValue, chosenValues, setChosenValues } = useContext(MainContext);
	const [formValue, setFormValue] = useState('');

	useEffect(() => {
		setCounterValue(chosenValues.length);
		console.log(chosenValues);
	}, [chosenValues]);

	const removeFromChosenValues = (uni: University) => {
		const index = chosenValues.findIndex(university => university.name === uni.name);
		if (index === -1) return;
		const newArray = [...chosenValues];
		newArray.splice(index, 1);
		setChosenValues([...newArray]);
	};

	const AddToChosenValues = (uni: University) => {
		const index = chosenValues.findIndex(university => university.name === uni.name);
		if (index !== -1) return;
		setChosenValues([...chosenValues, uni]);
	};

	const isUniChosen = (uni: University): boolean => {
		const index = chosenValues.findIndex(university => university.name === uni.name);
		return index !== -1;
	};

	const { data, isLoading } = useQuery(['universities', formValue], () =>
		formValue.length > 0 ? fetchUniversities(formValue) : []
	);

	return isOpen ? (
		<DropdownContainer>
			<Input value={formValue} setValue={setFormValue} />
			<ResultsContainer>
				{isLoading ? <Loader /> : null}

				{formValue.length === 0 && chosenValues
					? chosenValues.map((uni, index) => (
							<Result
								isChosen={true}
								key={`${uni.name}/${index}`}
								name={uni.name}
								onClick={() => AddToChosenValues(uni)}
								onDoubleClick={() => removeFromChosenValues(uni)}
							/>
					  ))
					: null}

				{formValue.length > 0 && data
					? data.map((uni, index) => (
							<Result
								isChosen={isUniChosen(uni)}
								key={`${uni.name}/${index}`}
								name={uni.name}
								onClick={() => AddToChosenValues(uni)}
								onDoubleClick={() => removeFromChosenValues(uni)}
							/>
					  ))
					: null}
			</ResultsContainer>
			<Reset ResetChosenValues={() => setChosenValues([])} />
		</DropdownContainer>
	) : null;
};

export default Dropdown;
