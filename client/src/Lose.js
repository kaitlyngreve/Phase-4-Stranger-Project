function Lose() {
  function handlePlayAgain(e) {
    e.preventDefault();
    window.location.replace("/characters");
  }

  return (
    <>
      <div class="lose">
        <div class="st">
          <div class="st-top">
            <div class="st-bound st-bound-full"></div>
            <p>
              <span class="st-drop st-stranger-y">Y</span>
              <span class="st-stranger-o">ou hav</span>
              <span class="st-drop st-stranger-u">e</span>
            </p>
            <div class="st-bound st-bound-mini st-bound-left"></div>
            <div class="st-bound st-bound-mini st-bound-right"></div>
          </div>
          <div class="st-bottom">
            <p>
              <span class="st-things-d">D</span>
              <span class="st-things-i">ie</span>
              <span class="st-things-e">d</span>
            </p>
          </div>
        </div>
      </div>
      <div className="fight-button-container">
        <button className="fight-button" onClick={handlePlayAgain}>
          FIGHT AGAIN
        </button>
      </div>
    </>
  );
}

export default Lose;
