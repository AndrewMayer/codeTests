
function maximumToys(prices, k) {
	// Sort array from high to low
		prices.sort((a, b) => b-a)


}


//Get biggest?

//Find remainder and see if amount remaining is equal. Then do that again.

//Then do same thing for all smallest values?


//9, 7, 2, 1, 5, 5
//10

// for each value add number and check 3 cases:
// If total greater than, end the loop and move to the next number
// If total less than, create a recursion and add the next number.
let currentTotal = 0

let priceChecker = (currentPrices, pricesLeft) => {
		currentCost += pricesLeft[index]
		if (pricesLeft.length = 0) {
			return (0)
		}	else if (pricesLeft[index] > k) {
			pricesLeft = pricesLeft.slice(index, 1);
			return (0)
		}	else if ((pricesLeft[index] + currentCost) = k) {
			totalToys++
			return (totalToys)
		} else if (currentTotal < k) {
			currentTotal += pricesLeft[index];
			totalToys++;
			pricesLeft = pricesLeft.slice(index, 1);
			return (totalToys+priceChecker(pricesLeft))
		} else if (currenTotal > k) {

		}
	}


	






//If the total number of numbers is > the current high toy number, make that the new max.
//If testSet.length > totalToys then totalToys = testSet.length 

