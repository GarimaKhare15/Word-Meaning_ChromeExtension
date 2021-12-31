window.onload = function () {
  document.getElementById("btn").addEventListener("click", getDefinition);
};

function createElement(responseJSON) {
  //var definition = document.createElement("p");
  var definition = document.getElementById("def");
  definition.innerHTML = responseJSON[0].meanings[0].definitions[0].definition;

  var example = document.getElementById("exp");
  example.innerHTML = responseJSON[0].meanings[0].definitions[0].example;
  //document.getElementById("main").appendChild(definition);
}

function clearPara()
{
    //var para = document.getElementsByTagName("p")[0];
    //if(para)
    //para.style.display = "none";*/

    var d = document.getElementById("main");
    console.log(d.lastChild);
    /*if(d.lastChild!=='#text')
    d.remove(d.lastChild);*/


}
function getDefinition() {
  var word = document.getElementById("search-bar").value;
  console.log(word);
  var url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;

  var xhrRequest = new XMLHttpRequest();
  xhrRequest.onload = function () {
    //console.log(xhrRequest.response);
    var responseJSON = JSON.parse(xhrRequest.response);
    console.log(responseJSON[0].meanings[0].definitions[0].definition);
    //console.log(responseJSON[0].meanings[0].definitions[0].example);
    //res = responseJSON[0].meanings[0].definitions[0].definition;
    clearPara();
    createElement(responseJSON);
  };

  xhrRequest.open("get", url);
  xhrRequest.send("");
}
