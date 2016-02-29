# generator-typescript-express

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Typescript and Express generator with best practices and lean depenencies

## Intro
This generator is used for writing Express apps with Typescript.

After using Express/Node/AngularJS/MongoDB for 2 years, What I have noticed with large JS based projects, is that it slowly becomes un-maintainable due to the lack of tooling with JS. Auto-complete, compile time checks, and strong typing are tools we take for granted, and is really a nessesity for large scale applications. Without those aforementioned tools, large projects would slowly turn into this "read-only" state where you are too afraid to change or refactor code because you wouldn't know what the consequences are!

So I built this with a series of other generators to tackle this problem, with the help of Typescript.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-typescript-express using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-typescript-express
```

Make sure you have ```typescript``` and ```tsd``` (for typescript definitions) installed

```bash
npm install -g typescript
npm install -g tsd
```

Then generate your new project:

```bash
yo typescript-express
```

Afterwards, the project will run ```npm install```, but you would need to run ```tsd install``` on your project root:

```bash
tsd install
```

## Usage

After the project is scaffolded, you must build the project. You can use [VSCode](https://code.visualstudio.com/), [Atom](https://atom.io/) with [```atom-typescript```](https://atom.io/packages/atom-typescript), or go hardcore with the ```tsc``` command. This will create a ```/build``` folder with the built ```.js``` filtes.

Run ```gulp serve``` on the root, where the ```gulpfile.js``` is located to run the project locally to serve a local server on port 9000:

```bash
gulp serve
```

Get [PostMan](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) or equivalent, and send a GET request to:

```
http://localhost:9000/thing/
```

Which will get you a nice response back.

## Getting To Know Yeoman

Yeoman has a heart of gold. He&#39;s a person with feelings and opinions, but he&#39;s very easy to work with. If you think he&#39;s too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).

## License

MIT © [Dolan Miu](http://www.dolan.bio)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[npm-image]: https://badge.fury.io/js/generator-typescript-express.svg
[npm-url]: https://npmjs.org/package/generator-typescript-express
[travis-image]: https://travis-ci.org/dolanmiu/generator-typescript-express.svg?branch=master
[travis-url]: https://travis-ci.org/dolanmiu/generator-typescript-express
[daviddm-image]: https://david-dm.org/dolanmiu/generator-typescript-express.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/dolanmiu/generator-typescript-express
[coveralls-image]: https://coveralls.io/repos/dolanmiu/generator-typescript-express/badge.svg
[coveralls-url]: https://coveralls.io/r/dolanmiu/generator-typescript-express
