import { University } from '../types/types';

export const fetchUniversities = async (name: string): Promise<University[]> => {
	const response = await fetch(`http://universities.hipolabs.com/search?name=${name}`);
	return response.json();
};
