function addPlayer() {
    var player1_name = document.getElementById("player1_name_input").value;
    var player2_name = document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location = "game_page.html";
  }
  // Definindo as variáveis para acompanhar quem faz a pergunta e quem responde
let questioner = "";
let answerer = "";

function check() {
  // Obtenha o valor da input box de resposta
  const get_answer = parseInt(document.getElementById("answer").value);

  // Comparando a resposta com a multiplicação dos números
  if (get_answer === actual_name) {
    // Verificar se player1 respondeu
    if (questioner === "player1") {
      // Aumentar a pontuação de player1
      player1_score += 1;
      // Atualizar a pontuação na tela
      document.getElementById("player1_score").innerHTML = player1_score;
    } else {
      // Aumentar a pontuação de player2
      player2_score += 1;
      // Atualizar a pontuação na tela
      document.getElementById("player2_score").innerHTML = player2_score;
    }

    // Alterando o turno de quem faz a pergunta
    if (questioner === "player1") {
      questioner = "player2";
      document.getElementById("question_turn").innerHTML = player2_name;
    } else {
      questioner = "player1";
      document.getElementById("question_turn").innerHTML = player1_name;
    }

    // Alterando o turno de quem responde
    if (answerer === "player1") {
      answerer = "player2";
      document.getElementById("answer_turn").innerHTML = player2_name;
    } else {
      answerer = "player1";
      document.getElementById("answer_turn").innerHTML = player1_name;
    }

    // Gerando nova pergunta
    generate_question();
  } else {
    // Gerando nova pergunta, pois a resposta está incorreta
    generate_question();
  }
}
