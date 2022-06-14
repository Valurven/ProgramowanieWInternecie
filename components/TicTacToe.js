class TicTacToe extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `
    <div id="XOgame"
      style="min-height: 400px; background-color: #d1d1d1; padding-top: 20px; display: none; "
    >
      <div id="XOWinBanner">
        <div class="XOWinBanner">
          <img
            alt="BestWinnerBanner"
            style="width: 60%"
            src="images/Winpng.png"
          />
          <br /><br />
          Congratulation!!
        </div>
      </div>
      <table id="XOContainer">
        <tr>
          <td id="xoField1" onclick="handleClickField()"></td>
          <td id="xoField2" onclick="handleClickField()"></td>
          <td id="xoField3" onclick="handleClickField()"></td>
        </tr>
        <tr>
          <td id="xoField4" onclick="handleClickField()"></td>
          <td id="xoField5" onclick="handleClickField()"></td>
          <td id="xoField6" onclick="handleClickField()"></td>
        </tr>
        <tr>
          <td id="xoField7" onclick="handleClickField()"></td>
          <td id="xoField8" onclick="handleClickField()"></td>
          <td id="xoField9" onclick="handleClickField()"></td>
        </tr>
      </table>
      <div class="XOResetButtonCointener">
        <button class="XOResetButton" onclick="newXOGame()">
          Play Again
        </button>
      </div>
    </div>
    `;
  }
}

customElements.define('tic-tac-toe', TicTacToe);

