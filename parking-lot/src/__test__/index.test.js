describe('routes work fine', () => {
	it('should return 200', async () => {
		const response = await request(app).get('/');
		expect(response.statusCode).toBe(200);
	});
})