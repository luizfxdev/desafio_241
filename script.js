// Todas as notas musicais em uma oitava completa
const fullOctave = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

// Função para encontrar notas faltantes
function findMissingNotes(inputNotes) {
  // Converter para maiúsculas e remover espaços
  const notes = inputNotes.map(note => note.trim().toUpperCase());

  // Filtrar apenas notas válidas
  const validNotes = notes.filter(note => fullOctave.includes(note));

  // Encontrar notas que estão na oitava completa mas não no input
  const missingNotes = fullOctave.filter(note => !validNotes.includes(note));

  return missingNotes;
}

// Função para formatar o cálculo para exibição
function formatCalculation(inputNotes, missingNotes) {
  let calculation = `Notas inseridas: [${inputNotes.join(', ')}]<br>`;
  calculation += `Oitava completa: [${fullOctave.join(', ')}]<br>`;
  calculation += `Notas faltantes: [${missingNotes.join(', ')}]<br>`;
  calculation += `Processo: Comparamos as notas inseridas com a oitava completa `;
  calculation += `e identificamos quais notas não estão presentes.`;

  return calculation;
}

// Event listeners quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function () {
  const findButton = document.getElementById('find-button');
  const returnButton = document.getElementById('return-button');
  const notesInput = document.getElementById('notes-input');
  const resultDiv = document.getElementById('result');
  const calculationDiv = document.getElementById('calculation');

  // Botão ENCONTRAR
  findButton.addEventListener('click', function () {
    const inputValue = notesInput.value;

    if (!inputValue.trim()) {
      resultDiv.textContent = 'Por favor, insira algumas notas.';
      calculationDiv.innerHTML = '';
      return;
    }

    const inputNotes = inputValue.split(',');
    const missingNotes = findMissingNotes(inputNotes);

    if (missingNotes.length === 0) {
      resultDiv.textContent = 'Parabéns! Todas as notas estão presentes na oitava.';
    } else {
      resultDiv.textContent = `Notas faltantes: ${missingNotes.join(', ')}`;
    }

    calculationDiv.innerHTML = formatCalculation(inputNotes, missingNotes);
  });

  // Botão RETORNAR
  returnButton.addEventListener('click', function () {
    notesInput.value = '';
    resultDiv.textContent = '';
    calculationDiv.innerHTML = '';
  });
});
