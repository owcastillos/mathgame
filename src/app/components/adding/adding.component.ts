import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/services/math/math.service';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.scss']
})
export class AddingComponent implements OnInit {

  isAll = false;
  showVerify = true;
  showCorrect = false;
  searchText = '';

  expression = {
    operation: undefined,
    result: null
  }

  expressions = [];

  constructor(private mathService: MathService) { }

  ngOnInit(): void {
    this.expressions = this.mathService.getExpressions();
    this.setExpression();
  }

  setExpression(): void {
    this.showVerify = true;
    this.expression = {
      operation: this.expressions.shift(),
      result: null
    }
    this.isAll = !this.expression.operation
    document.getElementById('result')?.focus();
  }

  evalExpression(): void {
    this.showVerify = false;
    this.showCorrect = eval(`${this.expression.operation}`) == this.expression.result
  }

  retry(): void {
    this.showVerify = true;
    this.expression.result = null;
    document.getElementById('result')?.focus();
  }
}
