import { FC } from 'react';
import { DownArrow, UpArrow } from '../assets/icons';

interface ChevronProps {
	isOpen: boolean;
}

const Chevron: FC<ChevronProps> = ({ isOpen }) => {
	return <>{isOpen ? <UpArrow /> : <DownArrow />}</>;
};

export default Chevron;
