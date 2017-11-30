function draw()
{
    canvas = document.getElementById('titan');
 
    // Canvas supported?
    if(canvas.getContext)
    {
        ctx = canvas.getContext('2d');
 
        // Calculdate the precise block size
        BLOCK_SIZE = canvas.height / NUMBER_OF_ROWS;
         
        // Draw the background
        drawBoard();
 
        defaultPositions();
         
        // Draw players
        
 
    }
    else
    {
        alert("Canvas not supported!");
    }
}

function drawBoard()
{   
    for(iRowCounter = 0; iRowCounter < NUMBER_OF_ROWS; iRowCounter++)
    {
        drawRow(iRowCounter);
    }   
     
    // Draw outline
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, NUMBER_OF_ROWS * BLOCK_SIZE, NUMBER_OF_COLS * BLOCK_SIZE); 
}

function drawRow(iRowCounter)
{
    // Draw 8 block left to right
    for(iBlockCounter = 0; iBlockCounter < NUMBER_OF_ROWS; iBlockCounter++)
    {
        drawBlock(iRowCounter, iBlockCounter);
    }
}

function drawBlock(iRowCounter, iBlockCounter)
{   
    // Set the background
    ctx.fillStyle = getBlockColour(iRowCounter, iBlockCounter);
     
    // Draw rectangle for the background
    ctx.fillRect(iRowCounter * BLOCK_SIZE, iBlockCounter * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
 
    ctx.stroke();   
}