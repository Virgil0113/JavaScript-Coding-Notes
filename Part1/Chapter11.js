function swap (array, index1, index2){
	var temp = array[index1];
	arry[index1] = array[index2];
	array[index2] = temp;
}

function partition (array, left, right){
	var pivot = array[Math.floor((left+right)/2)],
	i = left,
    j = right;
    while(i<=j){
    	while(array[i] < pivot){
    		i++;
    	}
    	while(array[j] > pivot){
    		j--;
    	}
    	if(i <= j){
    		swap(array, i, j);
    		i++;
    		j--;
    	}
    }
    return i;
}

function quick (array, left, right){
	var index;
	if(array.length > 1){
		index = partition(array, left, right);
		if (left < index-1){
			quick(array, left, index-1);
		}
		if (rigth > index){
			quick(array, index, right);
		}
	}
}

this.quickSort = function() {
	quick(array, 0, array.length-1);
};