export const createTextNode = (nodeType, text) => {
  var newDiv = document.createElement(nodeType);
  var newContent = document.createTextNode(text);
  newDiv.appendChild(newContent);
  return newDiv;
};
