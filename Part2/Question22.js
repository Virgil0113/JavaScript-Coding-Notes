//题目：输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
/*思路
1.根据二叉搜索树的特点，序列的最后一个元素是根结点，其左子树全都比根结点小，右子树全都比根节点大。
2.将根结点前面的数组分为左右连个部分，左侧部分都小，右侧部分都大；
3.如果右侧部分有比根节点小的元素，那么就不是后序遍历，如此递归进行。 */

function adjustSequence(sequence, start, end) {
	if (start >= end) {
		return true;
	}
	var i = end;
	while (i > start && sequence[i-1] > sequence[end]) { //划分数组的左右两个部分
		i--; //i为右侧部分第一个节点
	}
	for (var j = i-1; j >= start; j--) {
		if (sequence[j] > sequence[end]) {
			return false;
		}
	}
	return adjustSequence(sequence, start, i-1) && adjustSequence(sequence, i , end-1);

}
function VerifySequenceOfBST(sequence) {
	if (!sequence.length) {
		return false;
	}
	return adjustSequence(sequence, 0, sequence.length-1);
}