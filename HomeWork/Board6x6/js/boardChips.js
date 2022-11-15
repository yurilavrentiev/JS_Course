const mainBlock = document.querySelector('.root');
const buttonDefault = document.getElementById('default');
const buttonRandom = document.getElementById('random');

const createCellHandler = createCell()

const boardState = {
  boardCells: new Array(36).fill({id: 0, color: ''}).map(createCellHandler),
  boardChips: [
    {id: 'c1', text: 1, color: 'blue', position: 1},
    {id: 'c2', text: 2, color: 'blue', position: 3},
    {id: 'c3', text: 3, color: 'blue', position: 5},
    {id: 'c4', text: 1, color: 'red', position: 31},
    {id: 'c5', text: 2, color: 'red', position: 33},
    {id: 'c6', text: 3, color: 'red', position: 35},
  ],
  selectedChip: null
}


function setDefaultPositions () {
  const defaultIds = [1, 3, 5, 31, 33 ,35];

  for (let i = 0; i < defaultIds.length; i++) {
    boardState.boardChips[i].position = defaultIds[i]
  }

  contentRemove(mainBlock);
  render(boardState, mainBlock);
}

function getRandomNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setRandomPositions () {
  const randomIds = [];
  const blackCellsIds = Array.from(document.querySelectorAll('.black')).map((element) => +element.id);
  const whiteCellsIds = Array.from(document.querySelectorAll('.white')).map((element) => +element.id);
  for (let i = 1; i < 4; i++) {
    const randomIndex = getRandomNumber(0, whiteCellsIds.length - 1);
    randomIds.push(whiteCellsIds[randomIndex]);
    whiteCellsIds.splice(randomIndex, 1);
  }
  for (let i = 1; i < 4; i++) {
    const randomIndex = getRandomNumber(0, blackCellsIds.length - 1);
    randomIds.push(blackCellsIds[randomIndex]);
    blackCellsIds.splice(randomIndex, 1);
  }
  for (let i = 0; i < randomIds.length; i++) {
    boardState.boardChips[i].position = randomIds[i]
  }
  
  contentRemove(mainBlock);
  render(boardState, mainBlock);
}


function createCell(){

  let cellId = 0;
  let isWhite = true;
  const newRowCellIds = [1, 7, 13, 19, 25, 31];
  
  return function renderCell() {
    cellId++;

    if (!newRowCellIds.includes(cellId)) {
      isWhite = !isWhite;
    }
    return {
      id: cellId,
      color: isWhite ? 'white' : 'black'
    }
  }
}

function contentRemove(parentElement) {
  parentElement.innerHTML = '';
}

function renderBoard(parentElement, cellsState) {
  cellsState.forEach((cell) => {
    const block = document.createElement('div');

    block.id = cell.id;
    block.className = `block ${cell.color}`

    parentElement.append(block)
  })
}

function renderChips(chipsState) {
  chipsState.forEach((chip) =>{
    const {id, text: chipText, color, position} = chip
    const text = document.createElement('span');
    text.innerText = chipText;
    const cell = document.getElementById(`${position}`);
    const newChip = document.createElement('div');
    newChip.id = id;
    newChip.classList.add('chip');
    newChip.classList.add(`${color}`);
    newChip.draggable = true;
    newChip.append(text);
    cell.append(newChip);
  })
}

function render(state, parentElement) {
  
  const {boardCells, boardChips} = state;
  
  renderBoard(parentElement, boardCells);
  renderChips(boardChips);
}

render(boardState, mainBlock);


mainBlock.addEventListener('dragstart', dragStart);
mainBlock.addEventListener('dragend', dragEnd);
mainBlock.addEventListener('dragleave', dragLeave);
mainBlock.addEventListener('drop', drop);
mainBlock.addEventListener('dragover', allow);
buttonDefault.addEventListener('click', setDefaultPositions);
buttonRandom.addEventListener('click', setRandomPositions);

function dragEnter(event) {
}

function dragLeave(event) {
  const cell = event.target.closest('.block');
  cell.classList.remove('active')
  cell.classList.remove('inactive')
}

function dragStart(event) {
  boardState.selectedChip = event.target.id

  const chip = event.target;
  chip.classList.add('active')
  setTimeout(() => chip.classList.add('hide'), 0);
}

function dragEnd (event) {
  const chip = event.target;
  chip.classList.remove('active')
  chip.classList.remove('inactive')
  chip.classList.remove('hide')
  boardState.selectedChip = null;
}

function allow (event) {
  const chipPositions = boardState.boardChips.map((item) => item.position)
  const chip = boardState.boardChips.find(item => item.id === boardState.selectedChip);
  const cell = event.target.closest('.block');
  if (chip.color === 'red') {
    if (cell.classList.contains('white') ) {
      cell.classList.add('inactive')
    }
    if (chipPositions.includes(+cell.id)) {
      cell.classList.add('inactive')
    }
    cell.classList.add('active')
  }
  if (chip.color === 'blue') {
    if (cell.classList.contains('black')) {
      cell.classList.add('inactive')
    }
    if (chipPositions.includes(+cell.id)) {
      cell.classList.add('inactive')
    }
    cell.classList.add('active')
  }
  
  event.preventDefault()
}

function drop (event) {

  const chip = boardState.boardChips.find(item => item.id === boardState.selectedChip)
  const target = event.target.closest('.block');
  const isRed = chip.color === 'red'
  const chipPositions = boardState.boardChips.map((item) => item.position)
  
  if ( isRed && target.classList.contains('black') && !chipPositions.includes(+target.id)) {
    chip.position = +target.id
  } 

  if ( !isRed && target.classList.contains('white') && !chipPositions.includes(+target.id)) {
    chip.position = +target.id
  }

  contentRemove(mainBlock);
  render(boardState, mainBlock);
}
