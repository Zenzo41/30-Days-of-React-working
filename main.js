const nums = [1,2,3,4,5];
const lastIndex = nums.length - 1;
const newArray = []

for (let i=lastIndex;i>=0;i--)
{
    newArray.push(nums[i]);
}
console.log(newArray);