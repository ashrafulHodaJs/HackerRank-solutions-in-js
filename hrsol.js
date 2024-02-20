//Solve Me First
function solveMeFirst(a, b) {
  return a+b
}
//Simple Array Sum
function simpleArraySum(ar) {
   let sum = 0;
   for(let i=0; i<ar.length; i++){
      sum = sum + ar[i];
      ;
   } 
return sum
}
//Compare the Triplets
function compareTriplets(a, b) {
    
  let aScore = 0;
  let bScore = 0; 
  for(let i=0; i<a.length; i++){
      if(a[i]>b[i]){
         aScore++ 
      }else if(a[i]<b[i]){
          bScore++
      }
  }
 return [aScore, bScore];
}
//A Very Big Sum
function aVeryBigSum(ar) {
    // Write your code here
    let sum=0;
    for(let i=0; i<ar.length; i++){
        sum+=ar[i]
    }
    return sum;

}
//Plus Minus
unction plusMinus(arr) {
   const n =arr.length;
   let pos = 0;
   let neg = 0;
   let zer = 0;
   for(let i=0; i<n; i++){
       if(arr[i]==0){
           zer++;
       }else if(arr[i]>0){
           pos++;
       }else{
           neg++
       }
   }
   console.log(pos/n);
   console.log(neg/n);
   console.log(zer/n);

}
// camelCase
function camelcase(s) {
    // Write your code here
    let count = 0;
    for(let i=0; i<s.length; i++){
        if(s.charCodeAt(i)<97){
            count++;
        }
    }
    return count+1;

}
// Angry Professor
function angryProfessor(k, a) {
   let count =0;
   for(let i=0; i<a.length; i++){
       if(a[i]<=0){
           count++;
       }
   }
   if(count>=k){
       return "NO";
   }else{
       return "YES";
   }

}

