function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function lookup(method, endpoint, callback, data) {
  let jsonData;
  if (data) {
    jsonData = JSON.stringify(data);
  }
  const xhr = new XMLHttpRequest();
  const url = `http://localhost:8000/api${endpoint}`;
  xhr.responseType = "json";
  const csrftoken = getCookie("csrftoken");
  xhr.open(method, url);
  xhr.setRequestHeader("Content-Type", "application/json");

  if (csrftoken) {
    xhr.setRequestHeader("X-CSRFToken", csrftoken);
  }

  xhr.onload = function () {
    callback(xhr.response, xhr.status);
  };
  xhr.onerror = function (e) {
    console.log(e);
    callback({ message: "The request was an error" }, 400);
  };
  xhr.send(jsonData);
}

export function createTodo(title, callback) {
  lookup("POST", "/todos/create/", callback, { title: title });
}

export function deleteTodo(id, callback) {
  lookup("DELETE", `/todos/${id}/delete/`, callback);
}

export function markTodoasDone(title, id, callback) {
  lookup("POST", `/todos/${id}/update/`, callback, {title : title, completed : true})
}

export function markTodoasNotDone(title, id, callback) {
  lookup("POST", `/todos/${id}/update/`, callback, {title : title, completed : false})
}

export function updateTodo(title, id, completed, callback) {
  lookup("POST", `/todos/${id}/update/`, callback, {title : title, completed : completed})
}

export function todoDetails(id, callback) {
  lookup("GET", `/todos/${id}/`, callback)
}

export function loadTodos(callback) {
  lookup("GET", "/todos/", callback);
}

