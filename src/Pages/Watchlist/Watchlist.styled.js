import styled from "styled-components";

export const WatchlistWrapper = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin-left: 0;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h2`
  margin: 1.5rem 0 1rem 0;
  font-size: 1.8rem;
  color: white;
`;

export const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  justify-items: start;
`;

export const ItemCard = styled.div`
  background: #0b1a3f;
  border: 2px solid white;
  border-radius: 8px;
  text-align: center;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemPoster = styled.img`
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ItemTitle = styled.h4`
  margin: 0.5rem 0 0.2rem 0;
  color: white;
`;

export const ItemType = styled.span`
  font-size: 0.8rem;
  color: #ccc;
`;

export const ItemRating = styled.span`
  font-size: 0.8rem;
  color: #ccc;
`;

export const RemoveButton = styled.button`
  margin-top: 0.5rem;
  padding: 4px 8px;
  background: #1f6bff;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-size: 0.75rem;

  &:hover {
    background: #4da6ff;
  }
`;

export const FiltersRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;
`;

export const FilterInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #444;
  background: #222;
  color: white;

  &:focus {
    outline: none;
    border-color: #1f6bff;
  }
`;
