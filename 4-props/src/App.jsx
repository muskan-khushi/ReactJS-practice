//Props -> read only properties that are shared between components. A parent component can send data to a child component
//<Component keyValue/>

import Student from "./Student";

function App(){

  return(
    <>
      <Student name="SpongeBob" age={13} isStudent={true}></Student>
      <Student name="Doraemon" age={1300} isStudent={false}></Student>
    </>
  );
}

export default App
