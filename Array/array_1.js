
//   在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺
// 序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

function Find(target,array)
{
  // 最容易想到的二维数组的遍历
  for(var i=0;i<array.length;i++)
  {
    for(var j=0;j<array[i].length;j++)
    {
      if(array[i][j] === target)
        return true;
    }
  }
}

function Find(target,array)
{
  // 
}
