const fs = require('fs');

// Read script.js and remove browser-specific parts to allow testing in Node.js
let code = fs.readFileSync('script.js', 'utf8');
code = code.replace(/window\.addEventListener[\s\S]*\}\)/g, '');

// Append module.exports
code += '\nmodule.exports = PokerSimulator;';
fs.writeFileSync('script_temp.cjs', code);

const PokerSimulator = require('./script_temp.cjs');

// Mock document.getElementById so constructor doesn't fail
global.document = {
  getElementById: () => ({
    addEventListener: () => {},
    style: {},
    appendChild: () => {},
    value: '6',
    textContent: '',
    checked: true,
    querySelector: () => ({ innerHTML: '', insertRow: () => ({ insertCell: () => ({}) }) })
  }),
  createElement: () => ({ style: {}, classList: { add: () => {}, remove: () => {} }, appendChild: () => {} })
};

const sim = new PokerSimulator();

function testHand(cards, expectedType) {
  const best = sim.getBestHand(cards);
  if (best.type !== expectedType) {
    console.error('FAIL: Expected ' + expectedType + ' but got ' + best.type);
    console.error(best);
  } else {
    console.log('PASS: ' + expectedType);
  }
}

// Straight Flush
testHand([
  {rank: '10', suit: '♠'}, {rank: 'J', suit: '♠'}, {rank: 'Q', suit: '♠'},
  {rank: 'K', suit: '♠'}, {rank: '9', suit: '♠'}, {rank: '2', suit: '♥'}, {rank: '3', suit: '♦'}
], 'Straight Flush');

// Wheel Straight
testHand([
  {rank: 'A', suit: '♠'}, {rank: '2', suit: '♣'}, {rank: '3', suit: '♠'},
  {rank: '4', suit: '♠'}, {rank: '5', suit: '♠'}, {rank: '10', suit: '♥'}, {rank: 'J', suit: '♦'}
], 'Straight');

// Royal Flush
testHand([
  {rank: '10', suit: '♠'}, {rank: 'J', suit: '♠'}, {rank: 'Q', suit: '♠'},
  {rank: 'K', suit: '♠'}, {rank: 'A', suit: '♠'}, {rank: '2', suit: '♥'}, {rank: '3', suit: '♦'}
], 'Royal Flush');

// Full House with two 3-of-a-kinds
testHand([
  {rank: '10', suit: '♠'}, {rank: '10', suit: '♥'}, {rank: '10', suit: '♦'},
  {rank: 'J', suit: '♠'}, {rank: 'J', suit: '♥'}, {rank: 'J', suit: '♦'}, {rank: '2', suit: '♣'}
], 'Full House');

// Two pair with 3 pairs
testHand([
  {rank: '10', suit: '♠'}, {rank: '10', suit: '♥'}, {rank: 'J', suit: '♠'},
  {rank: 'J', suit: '♥'}, {rank: 'Q', suit: '♠'}, {rank: 'Q', suit: '♥'}, {rank: 'A', suit: '♣'}
], 'Two Pair');

console.log('Tests finished.');
