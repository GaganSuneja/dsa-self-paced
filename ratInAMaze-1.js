// Problem Link https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1
// Tags: backtracking, recursion, 
// Level: Medium
// Consider a rat placed at (0, 0) in a square matrix of order N * N. It has to reach the destination at (N - 1, N - 1).
// Find all possible paths that the rat can take to reach from source to destination. 
// The directions in which the rat can move are 'U'(up), 'D'(down), 'L' (left), 'R' (right). 
// Value 0 at a cell in the matrix represents that it is blocked and rat cannot move to it while value 1 at a cell in the matrix represents that rat can be travel through it.
// Note: In a path, no cell can be visited more than one time. If the source cell is 0, the rat cannot move to any other cell.

// create a n*n falsy boolean array
// base case
// 1) i = n-1, j = n-1; return true. push (path);
// 2) is safe 



class Solution {
    constructor() {
        this.visited = [];
    }

    isSafe(i,j,m,n) {
        if( i > n-1 || j > n-1 || i < 0 || j < 0) return false;
        
        if(this.visited[i][j] === false && m[i][j] === 1) {

            this.visited[i][j] = true;
            return true;
            
        } 
        return false; 
    }

    findPath(m,n){
        //code here
       this.visited = [... new Array(n)].map(item => [...new Array(n)].map(item=>false));
       let paths = [];
       this.findPaths(0,0,m,paths,"",n)
       console.log(paths);
          
    }

    findPaths(i,j,m,paths,currentPath,n) {
        // add check for another constraint if last cell is also false;
        if(i === n-1 && j === n-1 && m[i][j] === 1) {
            console.log('paths,', paths);
            console.log('visited array', this.visited);
            paths.push(currentPath);
            return;
        }

        if(this.isSafe(i,j,m,n)) {
            this.findPaths(i+1,j,m,paths,currentPath+"D",n);
            this.findPaths(i,j-1,m,paths,currentPath+"L",n);
            this.findPaths(i,j+1,m,paths,currentPath+"R",n);
            this.findPaths(i-1,j,m,paths,currentPath+"U",n);
            this.visited[i][j] = false;
        }
      
    }

}


const sol = new Solution();

sol.findPath([[1,0],[1,0]],2); 
1,0
1,0 