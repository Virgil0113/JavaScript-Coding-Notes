//题目：输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
//思路：根节点是先序遍历的第一个节点，从根节点开始构建二叉树
//中序遍历节点，找到与根节点相同的节点，左侧为左子树，右侧为右子树
//之后递归构建左右子树

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function reConstructBinaryTree(pre, vin)
{
        if(pre.length==0||vin.length==0){
                return null;
        };
        //前序第一个为根节点 也是中序左右子树的分割点
        var index=vin.indexOf(pre[0]);
        var left=vin.slice(0,index);//中序左子树
        var right=vin.slice(index+1);//中序右子树
        return {
            val:pre[0],
            //递归左右子树的前序，中序
            left:reConstructBinaryTree(pre.slice(1,index+1),left),
            right:reConstructBinaryTree(pre.slice(index+1),right)
        };
}
