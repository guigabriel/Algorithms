# Cyclotron Simulation


This project implements a simulation of a cyclotron, a type of particle accelerator used in physics research. The cyclotron can accelerate different particles, such as electrons (e), protons (p), and neutrons (n), within a given matrix size. Each particle has a specific circulation function within the cyclotron, which can create either a closed or an open cycle.

## Problem Description

The goal of this project is to find an algorithm that simulates the circulation of particles inside the cyclotron matrix. The matrix will be initialized as a square matrix of size N x N, where N is the given matrix size. The matrix will be filled with 1s, and specific particles will be inserted into the matrix based on their circulation functions.

## Particle Circulation Functions

The following circulation functions have been defined for each particle:

1. Electron (e):
   The electron circulation function places 'e' symbols along the main diagonal and the last row of the matrix, leaving the rest of the matrix filled with 1s.

2. Proton (p):
   The proton circulation function places 'p' symbols along the first row, first column, last row, last column, and the second-to-last row and column. The last element of the matrix will remain as 1.

3. Neutron (n):
   The neutron circulation function places 'n' symbols along the first row of the matrix, leaving the rest of the matrix filled with 1s.

## Algorithm Usage

To use the cyclotron simulation, call the `cyclotron(particle, matrixSize)` function, passing the desired particle ('e', 'p', or 'n') and the matrix size (N x N) as parameters. The function will return the resulting matrix with the particle(s) inserted according to the circulation function.

Example usage:

```javascript
let particle = "p"; // Choose the particle: 'e', 'p', or 'n'
let matrixSize = 4; // Choose the matrix size (N x N)

const matrix = cyclotron(particle, matrixSize);
printMatrix(matrix); // Display the resulting matrix with the particle(s) inserted
```

## Output Format

The resulting matrix will be displayed with the particles represented by 'e', 'p', or 'n', and the rest of the matrix filled with 1s. The output will be in a readable format with columns aligned. The function `printMatrix(matrix)` is provided to display the resulting matrix in the console.

## Evaluation Criteria

The algorithm will be evaluated based on the following criteria:

1. Correctness: The algorithm must correctly insert the specified particle(s) into the matrix according to their circulation functions.

2. Data Structure and Functions: The code should follow good practices in data structure design and function usage. The provided code includes functions like `initializeMatrix(matrixSize)`, `addParticle(matrix, particle, matrixSize)`, and `cyclotron(particle, matrixSize)` to ensure a modular and organized implementation.

3. Algorithm Efficiency: The algorithm should perform efficiently for matrix sizes of 4x4, ..., NxN. As the matrix size increases, the algorithm should not significantly slow down or become impractical.

Feel free to use and evaluate the provided code for simulating the cyclotron and testing the particle circulation functions. The code includes examples to help you get started with testing different particles and matrix sizes.

If you have any suggestions or improvements, feel free to contribute to the project. Happy coding! 🚀
