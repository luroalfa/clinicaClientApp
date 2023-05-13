import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const SectionInfo = styled.div`
  width: 100%;
  height: 100vh;
`;
export const SectionImg = styled.div`
position: relative;
  width: 100%;
  height: 100vh;
`;
export const ContainerBanner = styled.nav`
  display: flex;
  align-items: center;
  height: 130px;
  background: #c0e6f5;
  padding: 0 10px;
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    & > div:nth-child(1) {
      padding: 20px;
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
  }
`;
export const FirstSection = styled.section`
  display: flex;
  align-items: center;
  height: 150px;
  background: white;
  padding: 0 30px;
  & > h1 {
    text-align: center;
    font-weight: 100;
    font-family: Poppins;
  }
`;
export const Logo = styled.img`
  width: 75px;
  height: 75px;
`;
export const ss = styled.img`
  display: flex;
`;
export const ContainerForm = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  &>div{
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const TextoEncima = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  font-weight: 300;
  font-family: Poppins;
  width: 100%;
  padding: 20px;
  text-align: center;
`;

export const ImagenEncima = styled.img`
  width: 100%;
  height: auto;
`;