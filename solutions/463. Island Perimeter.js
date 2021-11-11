/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var n = grid.length
    var m = grid[0].length;
    var perimeter = 0 
    var sides = 0;
    for(i = 0 ; i < n ; i++){
        for(j = 0 ; j < m;  j++) {
                if(grid[i][j] == 1) {
                    sides = 0;
                    if(i == 0)
                        sides++;
                    else if(grid[i - 1][j] == 0)
                        sides++;
                    if(j == 0)
                        sides++;
                    else if(grid[i][j - 1] == 0)
                        sides++;
                    if(i == n - 1)
                        sides++;
                    else if(grid[i + 1][j] == 0)
                        sides++;
                    if(j == m - 1)
                        sides++;
                    else if(grid[i][j + 1] == 0)
                        sides++;
                    perimeter += sides;
                }
        }
    }
    return perimeter;
};
