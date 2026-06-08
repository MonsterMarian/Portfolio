const fs = require('fs');

// Read script.js and remove browser-specific parts to allow testing in Node.js
let code = fs.readFileSync('script.js', 'utf8');
code = code.replace(/document\.addEventListener[\s\S]*\}\)/g, '');
code += '\nmodule.exports = TicTacToeAI;';
fs.writeFileSync('script_temp.cjs', code);

// Mock document.getElementById so constructor doesn't fail
global.document = {
  getElementById: (id) => ({
    addEventListener: () => {},
    style: {},
    appendChild: () => {},
    value: '6',
    textContent: '',
    checked: true,
    classList: { add: () => {}, remove: () => {} }
  }),
  createElement: () => ({ 
    style: {}, 
    classList: { add: () => {}, remove: () => {} }, 
    appendChild: () => {},
    dataset: {},
    addEventListener: () => {}
  }),
  querySelector: () => ({ 
    style: {}, 
    classList: { add: () => {}, remove: () => {} }, 
    appendChild: () => {},
    dataset: {}
  }),
  querySelectorAll: () => []
};

const TicTacToeAI = require('./script_temp.cjs');

console.log('Testing Connect 5 AI...');
const game = new TicTacToeAI();

// Test 1: Immediate win detection
console.log('\nTest 1: Find immediate win');
game.settings.aiSpeed = 'deep';
game.startNewGame(true); // Player starts

// Setup board: AI (O) has 4 in a row horizontally
game.board[0] = 'O';
game.board[1] = 'O';
game.board[2] = 'O';
game.board[3] = 'O';
game.board[4] = null; // Winning move for O

game.currentPlayer = 'O'; // AI's turn
const t0 = performance.now();
const bestMove = game.getBestMove();
const t1 = performance.now();

console.log(`AI chose move: ${bestMove} (Expected: 4)`);
console.log(`Time taken: ${(t1 - t0).toFixed(2)} ms`);

// Test 2: Block opponent's open 4
console.log('\nTest 2: Block opponent open 4');
game.startNewGame(true);
// Player (X) has open 3, AI (O) needs to block
game.board[21] = 'X';
game.board[22] = 'X';
game.board[23] = 'X';

game.currentPlayer = 'O';
const t2 = performance.now();
const blockMove = game.getBestMove();
const t3 = performance.now();

console.log(`AI chose move: ${blockMove} (Expected to block at 20 or 24)`);
console.log(`Time taken: ${(t3 - t2).toFixed(2)} ms`);

// Test 3: Insane mode deep search (no immediate threats, early game)
console.log('\nTest 3: Deep search from empty board');
game.startNewGame(false); // AI starts
game.currentPlayer = 'X'; // Force AI to think as X
const t4 = performance.now();
const firstMove = game.getBestMove();
const t5 = performance.now();

console.log(`AI chose move: ${firstMove}`);
console.log(`Time taken: ${(t5 - t4).toFixed(2)} ms (Should be bounded by timeLimitMs ~1200ms)`);

console.log('\nAll tests completed.');
