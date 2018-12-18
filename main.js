window.addEventListener("beforeunload", function (event) {
  // Cancel the event as stated by the standard.
  event.preventDefault();
  // Chrome requires returnValue to be set.
  event.returnValue = '';
});

function getExamples() {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var output1 = document.getElementById("output1").value;
  var output2 = document.getElementById("output2").value;
  var result = "<strong>Examples:</strong>\n<blockquote>\n<strong>Input:</strong> ";
  result += input1;
  result += "\n<strong>Output:</strong> ";
  result += output1;
  result += "\n\n<strong>Input:</strong> ";
  result += input2;
  result += "\n<strong>Output:</strong> ";
  result += output2;
  result += "\n</blockquote>";
  return result;
  //document.getElementById("examples_textarea").value = result;
}

function getPracticeDiv() {
  var result = '<div id="practiceLinkDiv">\n<h2><a href="https://ide.geeksforgeeks.org/">Recommended: Please try your approach on <b><i><u>{IDE}</u></i></b> first, before moving on to the solution.</a></h2>\n</div>';
  return result;
}

function getImplementationText() {
  var result = "Below is the implementation of the above approach:";
  return result;
}

function getApproach() {
  var result = "<strong>Approach:</strong> ";
  result += document.getElementById("approach").value;
  return result;
}

function getList() {
  var indent = document.getElementById("indent").value;

  if(indent < 0)
    return "";

  var tab = "";
  var four = "    ";
  for(var i=0; i<indent; i++)
    tab += " ";

  var list = document.getElementById("list").value;

  var items = list.split("\n");

  var result = tab+"<ul>\n";
  for(var i=0; i<items.length; i++) {
    result += tab + four + "<li>" + items[i] + "</li>\n";
  }
  result += tab + "</ul>";

  return result;
}

function getTable() {
  var heading = document.getElementById("table_heading").value;
  var rows = document.getElementById("table_rows").value;

  if(heading == "")
    return "";

  var result = '<table width="100%" style="table-layout:fixed;">';
  var four = "    ";

  // For heading
  result += "\n" + four + "<thead>";
  result += "\n" + four + four + "<tr>";
  var headingItems = heading.split("//");
  for(var i=0; i<headingItems.length; i++) {
    result += "\n" + four + four + four + "<th>" + headingItems[i] + "</th>";
  }
  result += "\n" + four + four + "</tr>";
  result += "\n" + four + "</thead>";

  // For rows
  result += "\n" + four + "<tbody>";
  var rowItems = rows.split("\n");
  for(var i=0; i<rowItems.length; i++) {
    result += "\n" + four + four + "<tr>";
    var currentRow = rowItems[i].split("//");
    for(var j=0; j<currentRow.length; j++) {
      result += "\n" + four + four + four + '<td style="text-align:center">' + currentRow[j] + "</td>";
    }
    result += "\n" + four + four + "</tr>";
  }
  result += "\n" + four + "</tbody>";

  result += "\n</table>";

  return result;
}

function getEverything() {
  var everything_textarea = document.getElementById('everything_textarea');
  getExamples();
  getApproach();
  var result = document.getElementById('examples_textarea').value + "\n\n" + document.getElementById('approach_textarea').value;

  everything_textarea.value = result;
}

function setExamples() {
  var result = getExamples();
  document.getElementById('result_textarea').value = result;
  copyData();
}

function setApproach() {
  var result = getApproach();
  document.getElementById('result_textarea').value = result;
  copyData();
}

function setList() {
  var result = getList();
  document.getElementById('result_textarea').value = result;
  copyData();
}

function setTable() {
  var result = getTable();
  document.getElementById('result_textarea').value = result;
  copyData();
}

function setEverything() {
  var result = getExamples();
  result += '\n';
  result += '\n';
  result += getPracticeDiv();
  result += '\n';
  result += '\n';
  result += getApproach();
  result += '\n';
  result += '\n';
  result += getImplementationText();
  document.getElementById('result_textarea').value = result;
  copyData();
}

function clearData() {
  document.getElementById('result_textarea').value = "";
}

function copyData() {
  document.getElementById('result_textarea').select();
  document.execCommand("copy");
  alert('Data copied');
}
