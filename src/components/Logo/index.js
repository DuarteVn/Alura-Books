import logo from '../../imagens/logo.svg' 
import styled, { keyframes } from 'styled-components';


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImage = styled.img`
  margin-right: 10px;
  animation: ${rotate} 2s linear infinite; 
`;



function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt='logo' />
      <p>
        <strong>ALURA</strong>BOOKS
      </p>
    </LogoContainer>
  );
}

export default Logo;
