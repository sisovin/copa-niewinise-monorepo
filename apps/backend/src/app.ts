import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.routes';
import courseRoutes from './routes/courses.routes';

const app = express();

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

export default app;
