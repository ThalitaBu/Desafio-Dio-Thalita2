// Função que calcula o saldo de vitórias e retorna o nível do jogador
function calcularNivel(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel = "";

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias > 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias > 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias > 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias > 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias > 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return {
    saldoVitorias: saldoVitorias,
    nivel: nivel
  };
}

// Lista de jogadores para testar com laço de repetição
let jogadores = [
  { vitorias: 5, derrotas: 2 },
  { vitorias: 15, derrotas: 5 },
  { vitorias: 35, derrotas: 10 },
  { vitorias: 75, derrotas: 20 },
  { vitorias: 85, derrotas: 10 },
  { vitorias: 95, derrotas: 5 },
  { vitorias: 120, derrotas: 15 }
];

// Laço de repetição para calcular e exibir o resultado de cada jogador
for (let i = 0; i < jogadores.length; i++) {
  let jogador = jogadores[i];
  let resultado = calcularNivel(jogador.vitorias, jogador.derrotas);

  console.log(`O Herói tem de saldo de **${resultado.saldoVitorias}** está no nível de **${resultado.nivel}**`);
}