let coloumns = 7

function setGame() {
    board = []

    //for loop is going to iterate through each row and coloumn 
    for (let r = 0; r < rows; r++){
        for (let c = 0; r < coloumns; c++){
            rows.push(' ');

            //HTML file, will give id to each section of grid e.g. 2-2/3-6 etc
            //will correlate to the array we made so that 5-3 will be [5][3]
            let tile = document.createElement("div")
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            document.getElementById("board").append(tile)
        };
        board.push(row);
    };
};
