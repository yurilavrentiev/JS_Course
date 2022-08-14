function createBoard () {
  const mainBlock = document.querySelector('.root');
 
  let countCell = 1;
  let isWhite = true;

  for (x = 0; x < 6; x++) {
    for (y = 0; y < 6; y++) {
      const block = document.createElement('div');

      block.className = `block ${isWhite ? 'white' : 'black'}`;
      block.id =  `${isWhite ? 'w' : 'b'}-${Math.ceil(countCell/2)}`;   

      mainBlock.appendChild(block);

      isWhite = !isWhite;
      countCell++;
    }
    isWhite = !isWhite
  }
}

createBoard()

const root = document.querySelector('.root');
// const zone2 = document.querySelector('.zone2');
const chip = document.querySelector('.chipBlue');
// console.log(zone1, zone2, chip)

chip.addEventListener('dragstart', drag);

function drag (event) {
  event.dataTransfer.setData('id', event.target.id)
};

root.addEventListener('drop', drop);
root.addEventListener('dragover', allow);
// zone2.addEventListener('drop', drop);
// zone2.addEventListener('dragover', allow);

function allow (event) {
  event.preventDefault()
  // console.log(event.target.id)
}

function drop (event) {
  let itemId = event.dataTransfer.getData('id');
  console.log(itemId)
  event.target.append(document.getElementById(itemId));
}
