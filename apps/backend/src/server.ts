import app from './app';
import pool from './config/database';

const PORT = process.env.PORT || 5000;

pool.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to the database', err);
    process.exit(1);
  });
