import styled from "styled-components";

const SearchWrapper = styled.div`
  margin: 10px 0 18px;
  display: flex;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 380px;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.5);
  background: rgba(15, 23, 42, 0.8);
  color: #e5e7eb;
  font-size: 0.95rem;
  outline: none;
  transition: 0.2s ease;

  &::placeholder {
    color: #6b7280;
  }

  &:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 18px rgba(37, 99, 235, 0.5);
  }
`;

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <SearchWrapper>
      <SearchInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Search..."}
      />
    </SearchWrapper>
  );
}
