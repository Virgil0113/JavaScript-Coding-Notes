//题目： 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
/*思路
1.选坐标为(0,0),(1,1)...的点记为(start,start)，作为开始坐标,下一圈开始坐标为(start+1,start+1)；
2.判断是否进入下一圈(即是否打印完成)的条件是rows>start*2 && cols>start*2；
3.打印一圈的左上角坐标为(start,start)，右下角的坐标为(cols-start-1,rows-start-1)
4.根据一圈左上角和右下角坐标判断“从左到右”，“从上到下”，“从右到左”，“从下到上”需要打印的点。 */

function printMatrix(matrix) {
    if (matrix == null || matrix.length == 0) {
        return;
    }
    var rows = matrix.length;
    var cols = matrix[0].length;
    var start = 0;
    var result = [];

    while (cols > start * 2 && rows > start * 2) {
        var endX = rows - 1 - start;
        var endY = cols - 1 - start;
        //从左到右打印一行
        for (var i = start; i <= endY; i++) {
            result.push(matrix[start][i]);
        }
        //从上到下打印一行
        if (start < endX) {
            for (var i = start + 1; i <= endX; i++) {
                result.push(matrix[i][endY]);
            }
        }
        //从右到左打印一行
        if (start < endX && start < endY) {
            for (var i = endY - 1; i >= start; i--) {
                result.push(matrix[endX][i]);
            }
        }
        //从下到上打印一行
        if (start < endY && start < endX - 1) {
            for (var i = endX - 1; i >= start + 1; i--) {
                result.push(matrix[i][start]);
            }
        }
        start++;
    }
    return result;
}