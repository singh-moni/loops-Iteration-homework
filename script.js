
for ( n=1;n<=100;n++)
{
    if(n % 3===0)
    console.log("Fizz");
    if(n % 5===0)
     console.log("buzz");
    if (n % 15===0)
    console.log("Fizz Buzz");
    else console.log(n);
    

}

//Prime number program 
function isPrime(n) 
{
  if (n <= 1) 
    return false;
  if (n <= 3) 
    return true;

  if (n % 2 === 0 || n % 3 === 0) 
    return false;

  for (let i = 5; i * i <= n; i += 6) 
    {
      if (n % i === 0 || n % (i + 2) === 0) 
      return false;
    }

  return true;
}

function getNextPrime(n) 
{
  if (n <= 1) return 2;

  let prime = n;
  let found = false;

  while (!found) 
  {
    prime++;
    if (isPrime(prime)) 
      {
        found = true;
      }
  }

  return prime;
}

const startingNumber = 2; 
const nextPrime = getNextPrime(startingNumber);
console.log(`Next prime number after ${startingNumber} is: ${nextPrime}`);
