/* ============================================================
   Calculadora de IRPF Mensal
   Tabela progressiva vigente em Janeiro/2024
   (última tabela antes da atualização de Fevereiro/2024)
   ============================================================
   Faixa 1: até R$ 2.112,00              -> isento
   Faixa 2: R$ 2.112,01 a R$ 2.826,65    -> 7,5%
   Faixa 3: R$ 2.826,66 a R$ 3.751,05    -> 15%
   Faixa 4: R$ 3.751,06 a R$ 4.664,68    -> 22,5%
   Faixa 5: acima de R$ 4.664,68         -> 27,5%
   ============================================================ */

// Limites das faixas
const LIMITE_FAIXA_1 = 2112.00;
const LIMITE_FAIXA_2 = 2826.65;
const LIMITE_FAIXA_3 = 3751.05;
const LIMITE_FAIXA_4 = 4664.68;

// Alíquotas de cada faixa
const ALIQUOTA_FAIXA_2 = 0.075;
const ALIQUOTA_FAIXA_3 = 0.15;
const ALIQUOTA_FAIXA_4 = 0.225;
const ALIQUOTA_FAIXA_5 = 0.275;

/* ---------- Funções de cálculo por faixa ----------
   Cada função calcula somente o imposto referente à
   "fatia" do salário que se enquadra naquela faixa
   (cálculo progressivo, faixa por faixa).           */

function calcularFaixa1(salario) {
  // Faixa isenta: não gera imposto
  return 0;
}

function calcularFaixa2(salario) {
  if (salario <= LIMITE_FAIXA_1) return 0;
  const baseTributavel = Math.min(salario, LIMITE_FAIXA_2) - LIMITE_FAIXA_1;
  return baseTributavel * ALIQUOTA_FAIXA_2;
}

function calcularFaixa3(salario) {
  if (salario <= LIMITE_FAIXA_2) return 0;
  const baseTributavel = Math.min(salario, LIMITE_FAIXA_3) - LIMITE_FAIXA_2;
  return baseTributavel * ALIQUOTA_FAIXA_3;
}

function calcularFaixa4(salario) {
  if (salario <= LIMITE_FAIXA_3) return 0;
  const baseTributavel = Math.min(salario, LIMITE_FAIXA_4) - LIMITE_FAIXA_3;
  return baseTributavel * ALIQUOTA_FAIXA_4;
}

function calcularFaixa5(salario) {
  if (salario <= LIMITE_FAIXA_4) return 0;
  const baseTributavel = salario - LIMITE_FAIXA_4;
  return baseTributavel * ALIQUOTA_FAIXA_5;
}

/* ---------- Função principal: imposto devido ----------
   Recebe o salário e retorna o valor total de IR devido,
   somando o resultado de cada faixa.                     */
function calcularImpostoDevido(salario) {
  const imposto =
    calcularFaixa1(salario) +
    calcularFaixa2(salario) +
    calcularFaixa3(salario) +
    calcularFaixa4(salario) +
    calcularFaixa5(salario);

  return imposto;
}

/* ---------- Função da alíquota efetiva ----------
   Recebe o salário e o valor de IR pago e retorna
   a porcentagem efetiva de alíquota.                */
function calcularAliquotaEfetiva(salario, imposto) {
  if (salario <= 0) return 0;
  return (imposto / salario) * 100;
}

/* ---------- Funções de interface ---------- */

function formatarMoeda(valor) {
  const valorFixo = valor.toFixed(2);
  const partes = valorFixo.split('.');
  const inteiro = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return 'R$ ' + inteiro + ',' + partes[1];
}

function calcular() {
  const inputSalario = document.getElementById('salario');
  const salario = parseFloat(inputSalario.value);

  const resultadoDiv = document.getElementById('resultado');
  const erroDiv = document.getElementById('erro');

  if (isNaN(salario) || salario < 0) {
    resultadoDiv.classList.add('escondido');
    erroDiv.classList.remove('escondido');
    return;
  }

  erroDiv.classList.add('escondido');

  const imposto = calcularImpostoDevido(salario);
  const aliquotaEfetiva = calcularAliquotaEfetiva(salario, imposto);

  document.getElementById('valorImposto').textContent = formatarMoeda(imposto);
  document.getElementById('valorAliquota').textContent =
    aliquotaEfetiva.toFixed(2).replace('.', ',') + '%';

  resultadoDiv.classList.remove('escondido');
}

function limpar() {
  document.getElementById('salario').value = '';
  document.getElementById('resultado').classList.add('escondido');
  document.getElementById('erro').classList.add('escondido');
}
