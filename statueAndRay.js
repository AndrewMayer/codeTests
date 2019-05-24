function solution(A) {
	let newA = A;
 let kill = []
 let totalRays = 0
 for (let i = 0; i < newA.length; i++) {
	 for (let j = 0; j < newA.length; j++) {
		 if (newA[j].x % newA[i].x === 0 && newA[j].y % newA[i].y === 0) {
			 totalRays++;
			 kill.push(j);
		 }
	 }
	 for (let k = kill.length - 1; k >= 0; k--) {
		 newA.splice(kill[k], 1);
	 };
 kill = [];
 }
 return (totalRays-1)   // write your code in JavaScript (Node.js 8.9.4)
}