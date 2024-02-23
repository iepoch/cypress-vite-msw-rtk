import { http, HttpResponse, RequestHandler } from 'msw';
import * as data from '../services/users/user-mock.json';

export const handlers: RequestHandler[] = [
	http.get('/api/users', () => {
		return HttpResponse.json(data);
	}),
];
