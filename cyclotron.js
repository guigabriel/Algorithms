function initializeMatrix(matrixSize) {
    const matrix = []
    for(let i = 0; i < matrixSize; i += 1){
        matrix[i] = Array(matrixSize).fill(1);
    }
    return matrix;
}