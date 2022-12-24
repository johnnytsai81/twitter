import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #f5f8fa;
  width: 100%;
  height: 54px;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  color: "#696974";
  text-align: start;
`;

const StyledInputAlert = styled.input`
  outline: none;
  border: none;
  background-color: #f5f8fa;
  border-radius: 0px;
  border-bottom: 2px solid #fc5a5a;
`;


const AuthInputAlert = ({ type, label, value, placeholder, onChange }) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInputAlert
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
      />
    </StyledContainer>
  );
};

export default AuthInputAlert;
