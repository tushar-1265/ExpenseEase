import styled from "styled-components";
import { MainLayout } from "./styles/Layout";
import Navigation from "./Components/Navigation/Navigation";
import { useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Expenses from "./Components/Expenses/Expenses";
import Incomes from "./Components/Incomes/Incomes";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const [active,setActive]=useState(1);
  const global=useGlobalContext();

  console.log(global)
  
  const displayData=()=>{
    switch(active){
      case 1:
        return <Dashboard/>

      case 2:
        return <Dashboard/>

      case 3:
        return <Incomes/>

      case 4:
        return <Expenses/>

      default:
        return <Dashboard/>
    }
  }
  return (
    <Appstyled className="App">
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
        <main>
        {displayData()}
        </main>
      </MainLayout>
    </Appstyled>
  );
}

const Appstyled=styled.div`
 height:100vh;
 background:linear-gradient(to bottom right,skyblue,pink);

 main{
  flex: 1;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  overflow: auto;
  overflow-x:hidden;
  &::-webkit-scrollbar{
    width: 0;
  }
}
`;

export default App;
