import { http, HttpResponse, RequestHandler } from 'msw';
import * as data from '../services/users/user-mock.json';
import * as pages from '../services/appbar/pages.json'
export const handlers: RequestHandler[] = [
	http.get('/api/users', () => {
		return HttpResponse.json(data);
	}),
		http.get('/api/pages', () => {
		return HttpResponse.json(pages);
	}),
];
