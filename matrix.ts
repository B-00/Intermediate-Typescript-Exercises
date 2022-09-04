class Matrix {
  row: number[][];
  colum: number[][];
  
  constructor(matrix: string) {
    this.row = [];
    this.colum = [];
    this.createMatrix(matrix);
  }

  createMatrix(mat: string) {
    let newLine = false;
    let setRowLength = false;
    let newLineCounter = 0;
    let tempRow: number[] = [];

    let mix = mat.split(" ");
    let final: string[] = [];

    for (const index of mix) {
        if (/\n|\r|\r\n/.test(index)) {
            let [first, second] = index.split(/\n|\r|\r\n/);
            final.push(first);
            final.push('\n');
            final.push(second);
        } else {
            final.push(index);
        }
    }

    for (let i = 0, num = 0, rowsLength = 0, indexCounter = 0; i < final.length; i++) {
      num = parseInt(final[i]);

      if (/\n|\r|\r\n/.test(final[i])) {
        newLine = true;
        newLineCounter++;
      } 
      
      if (!isNaN(num)) {
        tempRow.push(num);
        if (newLineCounter > 0) {
          this.colum[indexCounter].push(num);
          indexCounter++;
          if (indexCounter > rowsLength - 1) {
            indexCounter = 0
          }
        } else {
          this.colum.push([num]);
        }
      }

      if (newLine || i === final.length - 1) {
        if (!setRowLength) {
          rowsLength = tempRow.length;
          setRowLength = true;
        }
        this.row.push(tempRow);
        tempRow = []
        newLine = false;
      }
    }
  }

  get rows(): number[][] {
    return this.row;
  }

  get columns(): number[][] {
    return this.colum;
  }
}
