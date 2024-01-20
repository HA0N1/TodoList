// app.js

import express from 'express';
import connect from './schemas/index.js';
import todosRouter from './routes/todo.router.js';
import errorHandlerMiddleware from './routes/middlewares/error-handler.middleware.js';
const app = express();
const PORT = 3000;
connect();
// Express에서 req.body에 접근하여 body 데이터를 사용할 수 있도록 설정합니다.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static Middleware, express.static()을 사용하여 정적 파일을 제공합니다.
app.use(express.static('./assets'));
app.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl, ' - ', new Date());
  next();
});
const router = express.Router();

router.get('/', (req, res) => {
  return res.json({ message: 'Hi!' });
});

app.use('/api', [router, todosRouter]);

app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});
app.js;

// import express from "express";

// const app = express();
// const PORT = 3000;

// app.use((req, res, next) => {
//   console.log("첫번째 미들웨어");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("두번째 미들웨어");
//   next();
// });

// app.get("/", (req, res, next) => {
//   console.log("GET / 요청이 발생했습니다.");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("세번째 미들웨어");
//   res.json({ message: "Hi" });
// });

// app.use((req, res, next) => {
//   console.log("네번째 미들웨어");
//   res.json({ message: "마지막 미들웨어 입니다." });
// });

// app.listen(PORT, () => {
//   console.log(PORT, "포트로 서버가 열렸어요!");
// });
