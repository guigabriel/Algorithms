function initializeMatrix(matrixSize) {
    const matrix = []
    for(let i = 0; i < matrixSize; i += 1){
        matrix[i] = Array(matrixSize).fill(1);
    }
    return matrix;
}

const particleConfig = {
    '': (matrix, matrixSize) => {
      for (let i = 0; i < matrixSize; i++) {
        matrix[i][i] = 1;
      }
    },
    'e': (matrix, matrixSize) => {
      for (let i = 0; i < matrixSize; i++) {
        matrix[0][i] = "e";
        matrix[i][matrixSize - 1] = "e";
      }
    },
    'p': (matrix, matrixSize) => {
      for (let i = 0; i < matrixSize; i++) {
        matrix[0][i] = "p";
        matrix[i][0] = "p";
        matrix[matrixSize - 1][i] = "p";
        matrix[i][matrixSize - 1] = "p";
        matrix[matrixSize - 2][matrixSize - 2] = "p";
        matrix[matrixSize - 1][matrixSize - 1] = 1;
      }
    },
    'n': (matrix, matrixSize) => {
      for (let i = 0; i < matrixSize; i++) {
        matrix[0][i] = "n";
      }
    }
  };

  