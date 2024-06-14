import { http, HttpResponse, type RequestHandler } from 'msw';
import * as pages from '../services/appbar/pages.json';
import * as products from '../services/products/products.json';
import * as data from '../services/users/user-mock.json';

export const handlers: RequestHandler[] = [
	http.get('/api/users', () => {
		return HttpResponse.json(data);
	}),
	http.get('/api/pages', () => {
		return HttpResponse.json(pages);
	}),

	http.get('/api/cart-data', () => {
		return HttpResponse.json(pages);
	}),

	http.get('/api/products', () => {
		return HttpResponse.json(products);
}),
];
