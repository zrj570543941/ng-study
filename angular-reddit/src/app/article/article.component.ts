import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  // votes: number;
  // title: string;
  // link: string;

  @Input() article: Article;

  constructor() {
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}

//定义一个接口来列队泛型变量
// 一些要求
interface Lengthwise {
  length: number;
}

//这边T extends一个接口后，泛型变量T就必须满足接口所需的要求
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  // Now we know it has a .length property, so no more error
  console.log(arg.length);
  return arg;
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

