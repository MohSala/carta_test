import Hello from "./components/Hello.jsx"

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Hello />, wrapper) : false;