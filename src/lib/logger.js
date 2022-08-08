export class Logger {
  styleArr;

  constructor(styleArr) {
    this.styleArr = styleArr;
  }

  log(msg) {
    const size = msg.split("%c").length - 1;
    console.log(msg, ...this.styleArr.slice(0, size));
  }
}
