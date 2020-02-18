import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Price travel game';

  turn = 0;

  constructor() {

  }

  gameMatrix: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  click_Turn(event, row, col) {

    debugger;

    this.turn++;
    let pieceValue = this.getPiece(this.turn);

    this.gameMatrix[row][col] = pieceValue;

    this.validateGame();
    console.log(pieceValue);
  }

    /**
     * ToDo: Logica de ganar el Juego
     */
  validateGame( )
  {
    /* 
    if(this.gameMatrix[0][0] == 'x' && this.gameMatrix[0][0] == this.gameMatrix[0][1] && this.gameMatrix[0][0] == this.gameMatrix[0][2]
			|| this.gameMatrix[1][0] == 'x' && this.gameMatrix[1][0] == this.gameMatrix[1][1] && this.gameMatrix[1][0] == this.gameMatrix[1][2]
			|| this.gameMatrix[2][0] == 'x' && this.gameMatrix[2][0] == this.gameMatrix[2][1] && this.gameMatrix[2][0] == this.gameMatrix[2][2]
			
			|| this.gameMatrix[0][0] == 'x' && this.gameMatrix[0][0] == this.gameMatrix[1][0] && this.gameMatrix[0][0] == this.gameMatrix[2][0]
			|| this.gameMatrix[0][1] == 'x' && this.gameMatrix[0][1] == this.gameMatrix[1][1] && this.gameMatrix[0][1] == this.gameMatrix[2][1]
			|| this.gameMatrix[0][2] == 'x' && this.gameMatrix[0][2] == this.gameMatrix[1][2] && this.gameMatrix[0][2] == this.gameMatrix[2][2]
			
			|| this.gameMatrix[0][0] == 'x' && this.gameMatrix[0][0] == this.gameMatrix[1][1] && this.gameMatrix[0][0] == this.gameMatrix[2][2]
			|| this.gameMatrix[0][2] == 'x' && this.gameMatrix[0][2] == this.gameMatrix[1][1] && this.gameMatrix[0][2] == this.gameMatrix[2][0]) {
				// ganador=1;
     //		printf("\nFelicidades! Gano el jugador 1.\n");
        alert('Ganaste');
			} 
      }
      */
  }


  /**
   * Obtiene 'X' o 'O' Dependiendo del turno
   */
  getPiece(value) {
    return value % 2 ? 'X' : 'O';
  }


  /**
   * Maneja el click de la interfaz grafica
   */
  click_ResetGame() {
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        this.gameMatrix[r][c] = '';
      }
    }
  }

}
