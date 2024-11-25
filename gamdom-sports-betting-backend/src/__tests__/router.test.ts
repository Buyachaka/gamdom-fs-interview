import request from 'supertest';
import app from '../index';
jest.mock('../db/models/Events');

jest.mock('../authentication/passport', () => ({
    __esModule: true,
    default: {
        authenticate: jest.fn(() => (req: any, res: any, next: any) => {
            req.user = { id: 1, username: 'testUser' }; // Mock authenticated user
            next();
        }),
    },
}));

describe('Router Tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('GET / - Welcome message', async () => {
        const response = await request(app).get('/api');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Welcome to the Sports Betting API!');
    });


    test('POST /api/login - Successful login', async () => {
        const response = await request(app).post('/api/login');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Login successful');
        expect(response.body.user).toEqual({ id: 1, username: 'testUser' });
    });

});
