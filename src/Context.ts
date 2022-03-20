import { createContext } from 'react';
import { University } from './types/types';
interface MainContext {
	counterValue: number;
	setCounterValue: (value: number) => void;
	chosenValues: University[];
	setChosenValues: (universities: University[]) => void;
}
const MainContext = createContext<MainContext>({} as MainContext);

export default MainContext;
