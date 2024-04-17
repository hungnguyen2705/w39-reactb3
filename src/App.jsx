import "./assets/styles.css"


function App() {
// than cua coponent
let name = "nguyen van a"
// khai bao ham handelClick
const handelClick = () => {
   alert("toi an com roi")
} 


return (
    <>
    <h1 className="title">hello.minh ten la {name}</h1>
    <p>hello 2</p>
    <button onClick={handelClick}>
      ban an com chua ?
    </button>
    
    
    </>

  );
}

export default App
