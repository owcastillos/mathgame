import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  private static SIZE = 20;

  constructor() { }

  getExpressions(): any {
    const exp = [];
    while (exp.length < MathService.SIZE) {
      const localExp = this.getExpression(exp.length % 2 == 0)
      if (exp.indexOf(localExp) < 0) {
        exp.push(localExp)
      }
    }
    return exp;
  }

  private getExpression(adding: boolean): string {
    const t0 = Math.floor(Math.random() * 19) + 1
    const t1 = Math.floor(Math.random() * (adding ? 20 - t0 : Math.min(t0, 10)))
    return `${t0}${adding ? '+' : '-'}${Math.max(t1, 1)}`
  }
}
