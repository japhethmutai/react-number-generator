import './App.css';

function isPrime(num) { // returns boolean
  if (num <= 1) return false; // negatives
  if (num % 2 === 0 && num > 2) return false; // even numbers
  const s = Math.sqrt(num); // store the square to loop faster
  for(let i = 3; i <= s; i += 2) { // start from 3, stop at the square, increment in twos
      if(num % i === 0) return false; // modulo shows a divisor was found
  }
  return true;
}

function num_type(number) {
  if (isPrime(number)) {
    return 'prime'
  } else if (number % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
}

const numbers = [...Array(32).keys()]

const NumberGenerator = ({ numbers }) => {
  const list = numbers.map((number) => <div className={`box ${num_type(number)}`}>{number}</div>)
  return list
}

function App() {

  return (
    <div className="container">
      
      <div>
        <h1>30 Days of React</h1>
        <h2>Number Generator</h2>
        <div className="grid-box">
          <NumberGenerator numbers={numbers} />
        </div>
      </div>
    </div>
  );
}

export default App;
