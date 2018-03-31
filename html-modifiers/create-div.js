export const createTextDiv = text => {
  var newDiv = document.createElement('div');
  var newContent = document.createTextNode(text);
  newDiv.appendChild(newContent);
  return newDiv;
};
