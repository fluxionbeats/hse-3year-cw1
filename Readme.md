# Практическое задание 2

ВШЭ, Прикладная математика, 2023

## Автор: [Фомичев Антон](https://github.com/fluxionbeats)

## Задание:

Установить node.js

Создать свой пакет (создать каталог, файл app.js, выполнить команда npm init)

На основе примера FIRST из материалов в СмартЛМС создать веб-сервер, позволяющий:

1. скачать данные из файла
2. сформировать объект, содержащий данные из файла в полях
3. преобразовать объект в JSON
4. вернуть данные в ответ на запрос

## Запуск

```bash
npm i
cd src
node script.js
```

## Файловая система

> Файловая структура проекта, расположение файлов и папок

```bash
├── Readme.md
├── package-lock.json
├── package.json
└── src
    ├── controllers
    │   └── resolveAlias.js
    ├── db
    │   ├── links.txt
    │   └── others.txt
    ├── middlewares
    │   └── urlLogger.js
    └── script.js
```

## Решение

Сервер по запросу вида http://localhost:3000/:alias возвращает содержимое файла `src/db/{alias}.txt`

## Пояснения

Скрипт `script.js` использует middleware `urlLogger`, controller `resolveAlias`.

### urlLogger

Логирует запросы в консоль
Файл: `src/middlewares/urlLogger.js`

### resolveAlias

Возвращает response в виде JSON с данными из файла {alias}.txt
Файл: `src/controllers/resolveAlias.js`
