import { CreateAxiosDefaults } from 'axios';

export const getContentType = () => ({
	'Content-type': 'application/json',
});

export const options: CreateAxiosDefaults = {
	headers: getContentType(),
};

