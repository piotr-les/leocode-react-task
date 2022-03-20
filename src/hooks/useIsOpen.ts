import { useEffect, useRef, useState } from 'react';

export default function useisOpen() {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<any>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsOpen(false);
		}
	};
	const handleKeydown = (event: KeyboardEvent) => {
		if (event.keyCode === 27) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('click', handleClickOutside);
			document.removeEventListener('keydown', handleKeydown);
		};
	}, []);

	return { ref, isOpen, setIsOpen };
}
