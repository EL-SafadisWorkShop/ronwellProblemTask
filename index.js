//Solving problems using JavaScript

/*Q1 Writing a funciton*/
//We have arrays that has numbers in it. It needs to return the smallest positive integer that is not included in the array

const A = [-3];
const A1 = [11, 3, 6, 4, 1, 21];
const A2 = [1, 2, 3];


function solution(A) {
    // only positive values, sorted
    //I did (filtering which helps in removing any negative numbers or 0) over the x which passes x through as a function. 
    A = A.filter(x => x >= 1).sort((a, b) => a - b)  //So I could have the function to go from smaller to larger
    // becuase the smallest number after 0 is 1, hence x = 1 as a variable
    let x = 1 //Let is more limited than var and I only use it this block 


    for(let i = 0; i < A.length; i++) {
        // if we find a smaller number no need to continue, cause the array is sorted
        //If x is smaller than A[i] it returns 1 if not it adds one.
        if(x < A[i]) {
            //X = 1 becuase the smallest digit after the 0 is 1.
            return x
        }
        //If the smallest number is not there then I add 1 to x until I find x = A[i]
        x = A[i] + 1
    }


    return x
}

console.log("const A = [-3] =", solution(A)); //Output is 1 
console.log("const A1 = [11, 3, 6, 4, 1, 21] =", solution(A1)); /*Output is 2 (Note: returning an output of 5 won't make any sense, because
out of the numbers, you don't have 2 in there. Hence, it is the smallest number that is not part of your original data set)*/
console.log("const A2 = [1, 2, 3] =", solution(A2)); //Output is 4
 




/*Q2 calculating how many weeks John will spend in Hawaii, given: 
• the month when the vacation begins;
• the month when the vacation ends;
• the year when the vacation takes place;
• the day of the week for 1st January in the vacation year (for convenience).*/


//For some reason my output is not 7 I didn't enough time to complete. Regardless, this should be the solution to the problem. 
function getMonthFromString(mon){ //
//They are asking between April and May. I had to look for a function that includes the 1st monday of the month and the last monday of the month


    //It returns the month although I am not sure of the entire function
    //All I need to do was give it the year and month and it should return for me the last Monday as a solution to the problem
    //LINK --> https://stackoverflow.com/questions/9481158/how-can-i-get-the-4-mondays-of-a-month-with-js
    var d = Date.parse(mon + "1, 2014"); 
    if(!isNaN(d)){
       return new Date(d).getMonth() + 1; //It returns the month that I inserted in that case 2014
    }
    //If it is wrong it should return -1 which is false 
    return -1;
  }
 //Y = Years
 //W = Wednesday ??? 
 function solution(Y, A, B, W) {
     var a_num=getMonthFromString('april'); //A 
     var b_num=getMonthFromString('May'); //B 
     
     //Moment is built in function that returns the date that has been given to it as shown below
     var a = moment('07-'+a_num+'-2014', 'DD-MM-YYYY'); //issues with get 7 = 1st Monday in April and 
     var b = moment('31-'+b_num+'-2014', 'DD-MM-YYYY'); //get 31 = last Monday in May. The problem there is I can't find the function for it  
     document.write(b.diff(a, 'week'));
 
        
  }
 
     solution(2014, 'April', 'May', 'Wednesday'); /*Output is 8 not 7 for some reason. However by changing the month in var b on line 58 to 25 the
     will be 7. I got confused with Wednesday. I don't presicely understand what is meant by that.*/



/*Q3*/

//Passing through N, A, B as params
//N = number from 1 to 6 the given numbers 
//A & B = Array 
function solution(N, A, B) {
    //result  = false
    //To have the function return a boolean of false instead of having a conditional statement which is else but rather use if statement
    res_var = false;
    //I made a var N_res = N so that it becomes a reusable variable for the function. I avoided using the i becuase I don't know exactly to what 
    //extent it goes on therefore, the N var is there to stop the for loop  
    var N_res = N;
    for (var i = 0; i < A.length; i++) {
        for (var j = i; j < B.length; j++) {
            //A[i = array] == (N is the num given between whatever numbers are given in the question - N_res which whenever it stops the loop based on the numbers)
            //The + 1 is to avoid the computer from reading the 0 & starts from 1 because there is no 0 in the Array. 
            //B is + 2 because it is bigger than A by one digit.
            if (((A[i] == (N - N_res) + 1) && (B[i] == (N - N_res) + 2)) ||
            //The || is placed just in case if A is bigger than B, in other words, reverted.  
                ((B[i] == (N - N_res) + 1) && (A[i] == (N - N_res) + 2))) {

                //Means we reached to the final digit for example 6 and there is nothing after that, therefore, returns true if not, returns false. 
                if (((N - N_res) + 2) == N) {
                    res_var = true;
                }
                //reverts from the highest digit example 6 then 5 then 4 and so on then breaks - Goes down in a descending order
                N_res--;
                break;
            }

        }
    }
    //For testing only 
    document.write(res_var);
}

solution(4, [1, 2, 4, 4, 3], [2, 3, 1, 3, 1]); //Output should be Boolean: true
solution(4, [1, 2, 1, 3], [2, 4, 3, 4]); //Output should be Boolean: false
solution(6, [2, 4, 5, 3], [3, 5, 6, 4]); //Output should be Boolean: false
solution(3, [1, 3], [2, 2]); //Output should be Boolean: true