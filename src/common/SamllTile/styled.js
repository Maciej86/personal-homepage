import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 56px;
  background: ${({ theme }) => theme.color.white};
  border: 6px solid ${({ theme }) => theme.color.iron};
  border-radius: ${({ theme }) => theme.radius};
  font-size: 18px;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.color.scienceBlue};
`;

export const Paragraph = styled.p`
  line-height: 1.5;
`;

export const Repo = styled.div`
  display: flex;
  margin-bottom: 8px;
  gap: 10px;

  @media (max-width: 990px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const Text = styled.span`
  width: 80px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.scienceBlue};
  text-decoration: none;
  line-height: 1.5;

  &:hover {
    text-decoration: underline;
  }
`;