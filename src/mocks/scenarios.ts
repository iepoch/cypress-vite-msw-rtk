import { http, HttpResponse } from 'msw';
const CAT_API_KEY =
	'live_EiKwF9ILaReLkIvHz9y2zaofHufZgkyNwRV2FawCc77zwbAe7AJUBdLjhdqk27Jn';

const cats = fetch('https://api.thecatapi.com/v1/breeds', {
	headers: {
		'x-api-key': CAT_API_KEY,
	},
})
	.then((resp) => resp.json())
	.then((cats) => {
		return cats;
	});

export const scenarios = {
	success: [
		http.get('https://api.thedogapi.com/v1/breeds', async () => {
			return HttpResponse.json(await cats);
		}),
	],
};
