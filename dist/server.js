"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const port = process.env.APP_PORT;
_app2.default.listen(port);

// app.listen(port, () => {
//   console.log();
//   console.log(`Escutando na porta ${port}`);
//   console.log(`Click para abrir http://localhost:${port}`);
//   console.log();
// });
