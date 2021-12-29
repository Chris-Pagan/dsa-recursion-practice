/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */
 function mazeSolver(maze, index = [0, 0]) {
     let row = index[0]
     let col = index[1]

     if (maze[row][col] === "e") return "";

     maze[row][col] = "*";

     if (maze[row][col + 1] && maze[row][col + 1] !=="*"){
         col++;
         return "R" + mazeSolver(maze, [row, col]);
     } else if (maze[row][col - 1] && maze[row][col - 1] !== "*"){
         col--;
         return "L" + mazeSolver(maze, [row, col]);
     } else if (maze[row + 1][col] && maze[row + 1][col] !=="*") {
         row++;
         return "D" + mazeSolver(maze, [row, col]);
     } else if (maze[row-1][col] && maze[row-1][col] !== "*"){
         row--;
         return "U" + mazeSolver(maze, [row, col]);
     }

 
}

module.exports = mazeSolver;
