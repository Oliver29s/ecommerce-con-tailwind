import { useSelector } from "react-redux";
import "./App.css";

function App() {

 const {users} = useSelector(state => state) 
 console.log(users) 
 
  return 
  <>
  </>;
}

export default App;
