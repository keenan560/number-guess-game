const begin = () => {
  const winningNum = Math.round(Math.random() * 100);
  const check = document.getElementById("check");
  const restart = document.getElementById("restart");
  let gotIt = false;
  let tries = 0;

  check.addEventListener("click", (event) => {
    event.preventDefault();
    let guess = parseInt(document.getElementById("user-guess").value);
    gotIt
      ? $("#alert-space").html(
          `<div class="alert alert-secondary mt-2" role="alert">You already got it, please click restart.</div>`
        )
      : analyze(guess);
  });

  const analyze = (guess) => {
    if (!guess) {
      $("#alert-space").html(
        `<div class="alert alert-danger mt-2" role="alert">Please enter a guess!</div>`
      );
    }

    if (guess > winningNum) {
      tries += 1;
      $("#alert-space").html(
        `<div class="alert alert-warning mt-2" role="alert">You guessed too high!</div>`
      );
      $("#results").append(
        `<div class="alert alert-light border border-dark my-0" role="alert">You guessed ${guess}</div>`
      );
    }
    if (guess < winningNum) {
      tries += 1;

      $("#alert-space").html(
        `<div class="alert alert-warning mt-2" role="alert">You guessed too low!</div>`
      );
      $("#results").append(
        `<div class="alert alert-light border border-dark my-0" role="alert">You guessed ${guess}</div>`
      );
    }
    if (guess === winningNum) {
      $("#alert-space").html(
        `<div class="alert alert-success mt-2" role="alert">Awesome job, you got it with ${tries} attempts!</div>`
      );
      $("#results").append(
        `<div class="alert alert-light border border-dark my-0" role="alert">You guessed ${guess}</div>`
      );
      gotIt = true;
    }
  };

  restart.addEventListener("click", (event) => {
    window.location.reload();
  });
};

window.onload = begin();
