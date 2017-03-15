import { Component } from '@angular/core';

@Component({
  selector: 'jsr-partie1',
  templateUrl: './partie1.component.html',
  styleUrls: ['./partie1.component.scss']
})
export class Partie1Component {

  constructor() { }

  groupDemo() {
    console.group('groupDemo');
      console.log('first message');
      console.log('second message');
    console.groupEnd();
    console.log('third message');
  }

  nestedGroupDemo() {
    console.group('nestedGroupDemo');
      console.log('first message');
      console.group(name);
        console.log('third message, from setTimeout');
      console.groupEnd();
      console.log('fourth message');
    console.groupEnd();
    console.log('second message');
  }

  collapsedGroupDemo() {
    console.groupCollapsed('collapsedGroupDemo');
      console.log('message 1');
      console.group('not collapsed');
        console.log('message 2');
      console.groupEnd();
      console.log('message 3');
    console.groupEnd();
  }

  assertDemo() {
    console.assert([0, 1, 2, 3].length > 0, `le tableau est vide`);
  }

  failedAssertDemo() {
    console.assert([].length > 0, `le tableau est vide`);
  }

  formattedMessageDemo() {
    console.log(`%cHello World`, 'color: chocolate; font-weight: 600; font-size: x-large;text-shadow: 0 1px 0px black');
  }

  logFireDemo() {
    console.log('%cUuuuuh yeah !', 'text-shadow:0 0 20px rgb(254,252,201), 10px -10px 30px rgb(254,236,133), -20px -20px 40px rgb(255,174,52), 20px -40px 50px rgb(236,118,12), -20px -60px 60px rgb(205,70,6), 0 -80px 70px rgb(151,55,22), 10px -90px 80px rgb(69,27,14);font-size:90px;color:white');
  }

  logFireBetterDemo() {
    console.log('%cUuuuuh yeah !', 'text-shadow:0 0 20px rgb(254,252,201), 10px -10px 30px rgb(254,236,133), -20px -20px 40px rgb(255,174,52), 20px -40px 50px rgb(236,118,12), -20px -60px 60px rgb(205,70,6), 0 -80px 70px rgb(151,55,22), 10px -90px 80px rgb(69,27,14);font-size:90px;color:charcoal;background:linear-gradient(to bottom, red, orange, black);text-decoration:overline wavy red');
  }

  dirDemo() {
    console.log(document.body);
    console.dir(document.body);
  }


  tableDemo() {
    console.table([{a: 1, b: 2, c: 3}, {a: 'foo', b: false, c: undefined}]);
    console.table([[1, 2, 3], [2, 3, 4]]);
  }

  advancedTableDemo() {
    class Person {
      constructor(private prenom, private nom, private age) {}
    }

    const family = {
      mother: new Person('Catelyn', 'Stark', 42),
      father: new Person('Eddard', 'Stark', 42),
      daughter: new Person('Sansa', 'Stark', 19),
      son: new Person('Brandon', 'Stark', 16)
    };

    console.table(family);
    console.table(family, ['prenom', 'age']);
  }

  stackTraceDemo() {
    try {
      console.assert(Math.PI === 3.2, 'this is a clever reference to the Indiana π bill');
    } catch (err) {
      console.trace(err);
    }
  }

  countDemo() {
    console.count('example');
  }

  timeDemo() {
    console.time('testTime');
    setTimeout(() => {
      console.timeEnd('testTime');
    }, 0);
  }

  timeStampDemo() {
    console['timeStamp'](`Hey, je veux apparaître dans la timeline`);
  }

}
