import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%; 
  gap: 10px;
`


function App(){
  
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
}

export default App;
 