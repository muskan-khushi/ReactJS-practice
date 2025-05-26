//Props -> read only properties that are shared between components. A parent component can send data to a child component
//<Component keyValue/>

import Student from "./Student";

function App(){

  return(
    <>
      <Student name="SpongeBob" age={13} isStudent={true}></Student>
      <Student name="Doraemon" age={27} isStudent={false}></Student>
      <Student name="Patrick" age={30} isStudent={false}></Student>
      <Student name="Sandy" age={19} isStudent={true}></Student>
      <Student />
    </>
  );
}

export default App
