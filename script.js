var id = 0;
function addTodo() {
  var todo = document.getElementById("todo");
  var todoValue = todo.value;
  todo.value = "";
  // console.log(todo);
  // console.log(todo.value);
  if (todoValue === "") {
    alert("Please enter a Todo");
  } else {
    todo.setAttribute("placeholder", "Enter a Todo");

    var item = document.getElementById("item-list");
    //console.log(item.children);
    var list = document.createElement("li");
    //list.setAttribute("id", id++);
    list.innerHTML = todoValue;
    var newId;
    var div = document.createElement("div");

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");

    var counter = item.children.length;

    newId = counter;
    console.log(newId);
    div.setAttribute("id", newId);
    div1.setAttribute("class", "row");
    div1.setAttribute("id", newId);
    div2.setAttribute(
      "class",
      "col-lg-12 col-md-12 col-sm-12 col-xs-12 content"
    );

    var input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    div3.setAttribute(
      "class",
      "col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center"
    );
    div4.setAttribute(
      "class",
      "col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center"
    );
    div5.setAttribute(
      "class",
      "col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center"
    );

    item.appendChild(div1);
    div1.appendChild(div2);
    div1.appendChild(div3);
    div1.appendChild(div4);
    div1.appendChild(div5);

    var editBtn = document.createElement("button");
    editBtn.setAttribute("class", "btn btn-primary btn-sm ");
    editBtn.setAttribute("id", newId);
    editBtn.setAttribute("onclick", "editTodo(event);");
    // /editBtn.onclick = editTodo(event);
    var edit = document.createTextNode("Edit");

    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "btn btn-danger btn-sm ");
    deleteBtn.setAttribute("id", newId);
    deleteBtn.setAttribute("onclick", "deleteTodo(event);");
    deleteBtn.setAttribute("type", "button");

    var del = document.createTextNode("Remove");

    var doneBtn = document.createElement("button");
    doneBtn.setAttribute("class", "btn btn-success btn-sm ");
    doneBtn.setAttribute("id", newId);
    doneBtn.setAttribute("onclick", "markDone(event);");
    var done = document.createTextNode("Done");
    var checkBox = document.createElement("input");
    checkBox.setAttribute("id", newId);
    checkBox.setAttribute("type", "checkbox");

    doneBtn.appendChild(done);

    editBtn.appendChild(edit);
    deleteBtn.appendChild(del);

    div2.appendChild(list);
    div2.appendChild(checkBox);
    // div2.appendChild(input);
    div3.appendChild(editBtn);
    div4.appendChild(deleteBtn);
    div5.appendChild(doneBtn);
  }
}

function editTodo(e) {
  var id = e.target.id;

  var item = document.getElementById("item-list");
  console.log(item);
  var list = item.childNodes[id].childNodes[0];
  console.log(list);
  var col = item.childNodes[id].childNodes[0];
  var checkBox = list.childNodes[1];
  list = list.childNodes[0];
  var value = list.innerHTML;

  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("class", "form-control");
  input.setAttribute("value", value);
  var col1 = item.childNodes[id].childNodes[1];
  var editBtn = col1.childNodes[0];
  var col2 = item.childNodes[id].childNodes[2];
  var deleteBtn = col2.childNodes[0];
  var col3 = item.childNodes[id].childNodes[3];
  var doneBtn = col3.childNodes[0];

  var saveBtn = document.createElement("button");
  saveBtn.setAttribute("id", id);
  saveBtn.setAttribute("class", "btn btn-success btn-sm");
  saveBtn.setAttribute("onclick", "afterEdit(event)");

  var save = document.createTextNode("Save");
  saveBtn.appendChild(save);
  col1.removeChild(editBtn);
  col.removeChild(checkBox);
  col1.appendChild(saveBtn);
  col2.removeChild(deleteBtn);
  col3.removeChild(doneBtn);
  list.remove();
  col.appendChild(input);
}
function afterEdit(e) {
  var id = e.target.id;
  //console.log(id);
  var item = document.getElementById("item-list");
  //console.log(item);
  var col1 = item.childNodes[id].childNodes[0];
  var col2 = item.childNodes[id].childNodes[1];
  var saveBtn = col2.childNodes[0];
  var col3 = item.childNodes[id].childNodes[2];
  var col4 = item.childNodes[id].childNodes[3];

  var editBtn = document.createElement("button");
  editBtn.setAttribute("class", "btn btn-primary btn-sm");
  editBtn.setAttribute("id", id);
  editBtn.setAttribute("onclick", "editTodo(event);");
  var edit = document.createTextNode("Edit");

  var deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "btn btn-danger btn-sm");
  deleteBtn.setAttribute("id", id);
  deleteBtn.setAttribute("onclick", "deleteTodo(event);");
  deleteBtn.setAttribute("type", "button");
  var checkBox = document.createElement("input");
  checkBox.setAttribute("id", id);
  checkBox.setAttribute("type", "checkbox");

  var doneBtn = document.createElement("button");
  doneBtn.setAttribute("class", "btn btn-success btn-sm ");
  doneBtn.setAttribute("id", id);
  doneBtn.setAttribute("onclick", "markDone(event);");
  var done = document.createTextNode("Done");
  doneBtn.appendChild(done);

  var del = document.createTextNode("Remove");

  editBtn.appendChild(edit);
  deleteBtn.appendChild(del);

  col2.removeChild(saveBtn);
  col2.appendChild(editBtn);
  col3.appendChild(deleteBtn);
  col4.appendChild(doneBtn);
  var input = col1.childNodes[0];

  var value = input.value;
  col1.removeChild(input);
  var list = document.createElement("li");
  list.innerHTML = value;
  col1.appendChild(list);
  col1.appendChild(checkBox);
  //console.log(col1);
}

function deleteTodo(e) {
  var id = e.target.id;
  var item = document.getElementById("item-list");
  //console.log(item);
  //item.removeChild(item.childNodes[id]);
  var row = item.childNodes[id];
  //row.setAttribute("class", " hidden");
  // console.log(row);
  // console.log(item);
  // row.remove();
  row.removeChild(row.childNodes[3]);
  row.removeChild(row.childNodes[2]);
  row.removeChild(row.childNodes[1]);
  row.removeChild(row.childNodes[0]);
  row.classList.remove("row");
  // var item = document.getElementById("item-list").children;
  // console.log(item[id]);
}

function markDone(e) {
  var id = e.target.id;
  console.log(id);
  var item = document.getElementById("item-list");
  var col = item.childNodes[id].childNodes[0];
  var list = col.childNodes[0];
  var value = list.innerHTML;

  var doneList = document.getElementById("done-list");
  var ul = doneList.firstElementChild;
  console.log(ul);
  var newList = document.createElement("li");
  newList.setAttribute("class", "list-group-item text-center");
  newList.innerHTML = value;
  ul.appendChild(newList);
  deleteTodo(e);
}
function removeAll() {
  var item = document.getElementById("item-list");
  var checked = new Array();
  console.log(item.children.length);
  for (var i = 0; i < item.children.length; i++) {
    var row = item.childNodes[i];
    console.log(row);

    var col = row.childNodes[0];
    //console.log(col);

    var checkBox = col.childNodes[1];
    //console.log(checkBox.checked);
    if (checkBox.checked == true) {
      var id1 = checkBox.id;
      console.log(id1);
      checked.push(id1);
    }
    var row = 0;
    var col = 0;
    var checkBox = 0;
    var id1 = 0;
    //console.log(checked);
  }
  item.children.length = item.children.length - checked.length;
  //console.log(checked);
  //console.log(checked.length);
  for (var j = 0; j < checked.length; j++) {
    var id = checked[j];
    console.log(id);
    var row1 = document.getElementById(id);
    row1.remove();
    // checked.pop();
    // //console.log(id);
    // /var row1 = item.childNodes[id];
    //console.log(row1);
    // item.removeChild(row1);
    // row1.removeChild(row1.childNodes[3]);
    // row1.removeChild(row1.childNodes[2]);
    // row1.removeChild(row1.childNodes[1]);
    // row1.removeChild(row1.childNodes[0]);
    // row1.classList.remove("row");
  }
  var id = 0;
}
