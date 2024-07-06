import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #152850;
  height: 100vh;
  background-size: cover;
`
export const LoginCardContainer = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 20px;
  display: flex;
  background-color: #e0eefe;
`
export const LoginCardContainer1 = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const WebsiteImage = styled.img`
  width: 80%;
  height: 80%;
`
export const LoginCardContainer2 = styled.div`
  width: 40%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const FormContainer = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 700;
  color: #183b56;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 19px;
  font-weight: 700;
  color: #5a7184;
`
export const Input = styled.input`
  padding-left: 10px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  color: #c3cad9;
  height: 40px;
  width: 100%;
  cursor: pointer;
  outline: none;
  border: 1px solid #c3cad9;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 20px;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  height: 40px;
  width: 100%;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 8px;
  margin-top: 10px;
  background-color: #1565d8;
`
export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #ff0b37;
  align-self: center;
`
