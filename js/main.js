const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

const result = solveQuadr(a,b,c);
alert(result);

function solveQuadr(a,b,c){
	const d = calcDiscr(a,b,c);
	if(d<0){
		return "No roots"
		}
		else{ 
			if(d==0){
			return x = -1.*b/(2*a);
			}
		else {
			const x1 = (-b + Math.sqrt(d))/(2*a);
			const x2 = (-b - Math.sqrt(d))/(2*a);
			return 'x1 = ' + x1 + '\nx2 = ' +x2;
			
		}
		
			
		}
	
	
}

function calcDiscr(a,b,c){
		return b*b-4*a*c;
}