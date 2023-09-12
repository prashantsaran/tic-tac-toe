import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent {
  @Input() fromParent: string = "";
  cells: ("X" | "O" | "")[] = Array(9).fill('');
  currentPlayer: 'X' | 'O' = 'X';
  winner: 'X' | 'O' | '' | 'Game Tied' = ''; // Updated the type to include 'Game Tied'

  winCombinations: number[][] = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6], // Diagonal from top-right to bottom-left
  ];

  makeMove(index: number): void {
    if (this.cells[index] || this.winner) {
      return;
    }

    this.cells[index] = this.currentPlayer;
    this.checkWinner();

    if (!this.winner && this.cells.every(cell => cell !== '')) {
      // All cells are filled, and there is no winner (tie).
      this.winner = 'Game Tied';
    } else {
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  checkWinner(): void {
    for (const combination of this.winCombinations) {
      const [a, b, c] = combination;
      if (
        this.cells[a] &&
        this.cells[a] === this.cells[b] &&
        this.cells[a] === this.cells[c]
      ) {
        this.winner = this.cells[a] ;
        break;
      }
    }
  }

  resetGame(): void {
    this.cells = Array(9).fill('');
    this.currentPlayer = 'X';
    this.winner = '';
  }
}
