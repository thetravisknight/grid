var columns = 40;
var rows = 20;
var mouseDragActive = false;

function setNumberOfColumns() {
  columns = document.getElementById("columns").value;
  document.getElementById("columnCount").innerHTML = columns
  buildCells();
}

function setNumberOfRows() {
  rows = document.getElementById("rows").value;
  document.getElementById("rowCount").innerHTML = rows
  buildCells()
}

function buildCells() {
  clearCells();
  var contentWrapper = document.getElementById("content-wrapper");
  for (var i = 0; i < rows; i++) {
    var rowDiv;
    rowDiv = document.createElement("div");
    rowDiv.className = "flex-grid";

    for (var j = 0; j < columns; j++) {
      var colDiv;
      colDiv = document.createElement("div");
      colDiv.className = "flex-item inner-hidden";
      colDiv.onmousedown = function() {
        mouseDragActive = !mouseDragActive;
        this.classList.toggle("inner-hidden")
      }
      colDiv.onmouseup = function() {
        mouseDragActive = !mouseDragActive;
      }
      colDiv.onmouseenter = function() {
        if(!mouseDragActive) return;
        this.classList.toggle("inner-hidden")
      }

      var innerDiv;
      innerDiv = document.createElement("div");
      innerDiv.className = "inner-cell";

      colDiv.append(innerDiv);

      rowDiv.append(colDiv);
    }
    contentWrapper.append(rowDiv);
  }
}

function clearCells() {
  var contentWrapper = document.getElementById("content-wrapper");
  while (contentWrapper.firstChild) {
    contentWrapper.removeChild(contentWrapper.firstChild);
  }
}
