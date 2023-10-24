# Readme
## Тестовое задание: Разработчик Frontend developer / Vue.js

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Суть задания сводится к заполнению хеш таблицы массивом объектов,. с последующим обращением к значениям хэш таблицы по ключам.

### Чтобы запустить проект вам необходимо: 

- Скопировать гит репозиторий:
```sh
    git@github.com:Pekarnya/TestingExcercise.git
```
- Перейти в папку с репозиторием
```sh
   cd foldername
```
- перейти на node version 20.5.1
```sh
    nvm use 20.5.1
```
- Установить необходимые модули:
```sh
    npm install
```
- Запуск тестов:
```sh
    npm run test
```
- Запуск проекта:
```sh
    npm run start
```
- ✨Magic ✨

## Features

- Проект использует хеш таблицы
- Сильная типизация
- Быстрое получение элементов
- Покрытие тестами
- Максимальное быстродействие
- Typescript

Задание звучит так:

> Есть массив объектов, которые имеют поля id и parent, через которые их можно     связать в дерево и некоторые произвольные поля. 
> id может быть как числом, так и строкой.
> Порядок id не гарантируется, изначально отсутствует какой либо принцип сортировки. 
> Поле type не влияет ни на что, просто отображает возможность наличия какой-то полезной нагрузки в айтемах. 
>НУЖНО написать класс, который принимает в конструктор массив этих объектов и реализует следующие методы:
> - getAll() Должен возвращать изначальный массив элементов.
  - getItem(id) Принимает id элемента и возвращает сам объект элемента;
  - getChildren(id) Принимает id элемента и возвращает массив элементов, являющихся дочерними для того элемента,
  чей id получен в аргументе. Если у элемента нет дочерних, то должен возвращаться пустой массив;
   - getAllChildren(id) Принимает id элемента и возвращает массив элементов, являющихся прямыми дочерними элементами того,
  чей id получен в аргументе + если у них в свою очередь есть еще дочерние элементы, они все тоже будут включены в результат,
  и так до самого глубокого уровня.
  - getAllParents(id) Принимает id элемента и возвращает массив из цепочки родительских элементов,
  начиная от самого элемента, чей id был передан в аргументе и до корневого элемента,
  т.е. должен получиться путь элемента наверх дерева через цепочку родителей к корню дерева. 
 в результате getAllParents ПОРЯДОК ЭЛЕМЕНТОВ ВАЖЕН!

## Tech

Основные библиотеки в проекте:

- [Mocha] - ассинхронный фреймворк для тестов!
- [Chai] - библиотека для асертов
- [nodemon] - Удобная утилита для хотрелоадов.
- [node.js] - Окружение для запуска

Выражаю благодарность удобному редактору MD [public repository][dill]
 on GitHub.

## License

MIT
**Увидел тестовое поздно, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Chai]: <https://www.chaijs.com/>
   [nodemon]: <https://www.npmjs.com/package/nodemon>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [Mocha]: <https://mochajs.org/>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
