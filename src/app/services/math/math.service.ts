import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  private static SIZE = 20;

  constructor() { }

  getExpressions(): any {
    const exp = [];
    for (let i = 0; i < MathService.SIZE; i++) {
      exp.push(this.getExpression(i % 2 == 0))
    }
    return exp;
  }

  private getExpression(adding: boolean): string {
    const t0 = Math.floor(Math.random() * 20)
    const t1 = Math.floor(Math.random() * (adding ? (t0 > 10 ? 20 : 10) - t0 : Math.min(t0, 10)))
    return `${t0}${adding ? '+' : '-'}${Math.max(t1, 1)}`
  }
}
