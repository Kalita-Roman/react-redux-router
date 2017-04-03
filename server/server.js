import { join } from 'path';
import express from 'express';
import api from './api.js';
const fs = require("fs");
const multiparty = require('multiparty');

var bodyParser = require('body-parser');
var upload = require('multer')();  // for parsing multipart/form-data

const app = express();
const isDev = process.env.NODE_ENV !== 'production';

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

if (isDev) {
  require('./dev.js')(app);
  app.get('/bundle.css', function(req, res) { res.sendStatus(200); });
}

app.get('/', function(req, res) {
  res.sendFile('index.html', { root: join(__dirname, '..') }, err => { err && console.log(err); });
});

app.post('/f', (req, res) => {
  console.log('/f');
  var form = new multiparty.Form();
  var uploadFile = { uploadPath: '', type: '', size: 0 };
  //максимальный размер файла
  var maxSize = 2 * 1024 * 1024; //2MB
  //поддерживаемые типы(в данном случае это картинки формата jpeg,jpg и png)
  var supportMimeTypes = ['image/jpg', 'image/jpeg', 'image/png'];
  //массив с ошибками произошедшими в ходе загрузки файла
  var errors = [];

  form.on('error', function(err) {
    console.log('error');
    if (fs.existsSync(uploadFile.path)) {
      //если загружаемый файл существует удаляем его
      fs.unlinkSync(uploadFile.path);
      console.log('error');
    }
  });

  form.on('close', function() {
    console.log('close');
    //если нет ошибок и все хорошо
    if (errors.length == 0) {
      //сообщаем что все хорошо
      res.send({ status: 'ok', text: 'Success' });
    }
    else {
      if (fs.existsSync(uploadFile.path)) {
        //если загружаемый файл существует удаляем его
        fs.unlinkSync(uploadFile.path);
      }
      //сообщаем что все плохо и какие произошли ошибки
      res.send({ status: 'bad', errors: errors });
    }
  });

  form.on('part', function(part) {
    console.log('part');
    //читаем его размер в байтах
    uploadFile.size = part.byteCount;
    //читаем его тип
    uploadFile.type = part.headers['content-type'];
    //путь для сохранения файла
    uploadFile.path = './files/' + part.filename;

    //проверяем размер файла, он не должен быть больше максимального размера
    if (uploadFile.size > maxSize) {
      errors.push('File size is ' + uploadFile.size + '. Limit is' + (maxSize / 1024 / 1024) + 'MB.');
    }

    //проверяем является ли тип поддерживаемым
    if (supportMimeTypes.indexOf(uploadFile.type) == -1) {
      errors.push('Unsupported mimetype ' + uploadFile.type);
    }

    //если нет ошибок то создаем поток для записи файла
    if (errors.length == 0) {
      var out = fs.createWriteStream(uploadFile.path);
      part.pipe(out);
    }
    else {
      //пропускаем
      //вообще здесь нужно как-то остановить загрузку и перейти к onclose
      part.resume();
    }
  });

  // парсим форму
  form.parse(req);
});

api(app);

export default app;