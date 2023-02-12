import { createRoot } from 'react-dom/client';
// import ReactDOM from "react-dom";
import App from "../src/App"
import '../src/index.css'

<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500&family=Dancing+Script:wght@500&family=Poppins&display=swap');
</style>


const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);

// ReactDOM.render(
// <App />
// ,document.getElementById('root'));
