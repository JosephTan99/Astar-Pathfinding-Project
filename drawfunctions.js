var x;
var y;
var outOfBounds;

function DrawGrid() {
    fill('#262426');
    rect(windowWidth / 2 - windowHeight / 2, 0, windowHeight, windowHeight);

    for (var y = 0; y < gridWidth; y++) {
        for (var x = 0; x < gridWidth; x++) {
            fill('white');
            rect((windowWidth / 2 - windowHeight / 2) + x * (windowHeight / gridWidth) + tileSpace, tileSpace + y * (windowHeight / gridWidth), tileSize, tileSize);
        }
    }

    for (var k = 0; k < vectorArray.length; k++) {
        if (nodeArray[k].opened) {
            fill('#9A0E0E');
        } else {
            fill('#FFFF00');
        }
        rect((windowWidth / 2 - windowHeight / 2) + vectorArray[k].x * (windowHeight / gridWidth) + tileSpace, tileSpace + vectorArray[k].y * (windowHeight / gridWidth), tileSize, tileSize);
    }
}

var vectorPathDrawIndex = 0;

function DrawVectorPath() {
    for (var k = 0; k < vectorPathDrawIndex; k++) {
        fill('#115A9A');
        rect((windowWidth / 2 - windowHeight / 2) + vectorPath[k].x * (windowHeight / gridWidth) + tileSpace, tileSpace + vectorPath[k].y * (windowHeight / gridWidth), tileSize, tileSize);
    }
    if (vectorPathDrawIndex < vectorPath.length) {
        vectorPathDrawIndex++;
    }
    else {
        restState = true;
        frameRate(100);
    }
}

function DrawStartAndEnd() {
    fill('#00FF00');
    rect((windowWidth / 2 - windowHeight / 2) + startPos.x * (windowHeight / gridWidth) + tileSpace, tileSpace + startPos.y * (windowHeight / gridWidth), tileSize, tileSize);
    fill('#179C00')
    rect((windowWidth / 2 - windowHeight / 2) + endPos.x * (windowHeight / gridWidth) + tileSpace, tileSpace + endPos.y * (windowHeight / gridWidth), tileSize, tileSize);
}

function DrawObstacles() {
    fill('black');
    for (var j = 0; j < obstacle.length; j++) {
        rect((windowWidth / 2 - windowHeight / 2) + obstacle[j].x * (windowHeight / gridWidth) + tileSpace, tileSpace + obstacle[j].y * (windowHeight / gridWidth), tileSize, tileSize);
    }
}

function DrawText() {
    for (var k = 0; k < vectorArray.length; k++) {
        fill('black');
        textSize(smallTextSize);
        text('G:' + JSON.stringify(Math.round(nodeArray[k].g * 10) / 10), (windowHeight / gridWidth) / 15 + (windowWidth / 2 - windowHeight / 2) + vectorArray[k].x * (windowHeight / gridWidth) + tileSpace, tileSpace + vectorArray[k].y * (windowHeight / gridWidth) + (windowHeight / gridWidth) / 3.5);

        text('H:' + JSON.stringify(Math.round(nodeArray[k].h * 10) / 10), (windowHeight / gridWidth) / 15 + (windowWidth / 2 - windowHeight / 2) + vectorArray[k].x * (windowHeight / gridWidth) + tileSpace, tileSpace + vectorArray[k].y * (windowHeight / gridWidth) + (windowHeight / gridWidth) / 2);

        fill('black');
        text('F:' + JSON.stringify(Math.round(nodeArray[k].f * 10) / 10), (windowHeight / gridWidth) / 15 + (windowWidth / 2 - windowHeight / 2) + vectorArray[k].x * (windowHeight / gridWidth) + tileSpace, tileSpace + vectorArray[k].y * (windowHeight / gridWidth) + (windowHeight / gridWidth) / 1.25);
    }
}

function MousePositionInGrid() {
    x = Math.floor((mouseX - (windowWidth / 2 - windowHeight / 2)) / windowHeight * gridWidth);
    y = Math.floor(mouseY / windowHeight * gridWidth);
    if (x < 0 || x >= gridWidth) {
        outOfBounds = true;
    }
    else {
        outOfBounds = false;
    }
}
