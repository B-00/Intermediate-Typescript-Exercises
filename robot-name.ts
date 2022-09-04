export class Robot {
  
  _name: string = '';
  static _genNames: Set<string> = new Set();
  
  constructor() {
    this.resetName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = this.nameGen();
  }

  public static releaseNames(): void {
    
  }

  private nameGen(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    let result = '';
 
    while (!result || Robot._genNames.has(result)) {
      result += letters[Math.floor(Math.random() * 26)];
      result += letters[Math.floor(Math.random() * 26)];
      result += numbers[Math.floor(Math.random() * 10)];
      result += numbers[Math.floor(Math.random() * 10)];
      result += numbers[Math.floor(Math.random() * 10)];
    }
    Robot._genNames.add(result);

    return result;
  }
}