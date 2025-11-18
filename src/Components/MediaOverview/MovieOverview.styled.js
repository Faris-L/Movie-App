import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px;
  color: white;
`;

export const Section = styled.div`
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: 600;
`;

export const GenresGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 15px;
`;

export const GenreItem = styled.div`
  padding: 12px;
  border-radius: 10px;
  text-align: center;
  background: rgba(255, 255, 255, 0.15);
  cursor: pointer;
  transition: 0.2s ease;

  &.active,
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const MoviesGrid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

export const MovieCard = styled.div`
  text-align: center;
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const MovieName = styled.p`
  font-size: 0.9rem;
`;
