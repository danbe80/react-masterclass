import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, .4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  `

const boxVariants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: "100px" }
}

  
function App(){
  const biggerBoxRed = useRef<HTMLDivElement>(null)
  
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRed}>
        <Box
          drag
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBoxRed}
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"/>
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
 