const server = require('./api/server');
// const server = express();

const port = process.env.PORT || 5001;
server.listen(port, () => console.log(`App is running on port ${port}`));
