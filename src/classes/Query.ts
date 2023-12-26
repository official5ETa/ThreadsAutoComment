export class Query {

  readonly query!: RegExp;
  readonly comment!: string;

  constructor(query: RegExp | string, comment: string) {
    this.query = query instanceof RegExp ? query : new RegExp(query);
    this.comment = comment;
  }
}