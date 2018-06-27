const WS = new WebSocket('ws://localhost:9090');
//onmessage listens from server
WS.onmessage = payload => {
  console.log(payload);
  displayMessages(payload.data);
};

WS.onopen = () => {
  displayTitle('connected to server');
  console.log('connection is open');
};

WS.onclose = () => {
  displayTitle('Disconnected from server');
  console.log('connection closed');
};
function displayTitle(title) {
  document.querySelector('h1').innerHTML = title;
}
function displayMessages(message) {
  let h1 = document.createElement('h1');

  h1.innerText = message;
  document.getElementById('messages').appendChild(h1);
  // document.querySelector('h1').innerHTML = title;
}

document.forms[0].onsubmit = () => {
  let input = document.getElementById('message');
  WS.send(input.value);
};
