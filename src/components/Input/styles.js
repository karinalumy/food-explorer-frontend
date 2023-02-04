import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  /* align-items: center; //acrescentei teste
  margin-bottom: 8px; //acrescentei teste
  border-radius: 10px; //acrescentei teste */
  flex-direction: column;
  gap: 0.8rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  
  
  > input {
    height: 4.8rem;
    padding: 1.4rem;

    /* height: 56rem;//acrescentei teste
    padding: 100%;//acrescentei teste */
    /* padding: 12px;//acrescentei teste */
    /* border: 0; */
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 0.5rem;
    /* border: 0; */
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
      font-size: 1.6rem;
    }
    /* > svg {
          margin-left: 16px; 
        } */
    }
    
    

`