import { useState } from "react";
import {
  FaqWrapper,
  FaqTitle,
  FaqList,
  FaqItem,
  QuestionRow,
  QuestionText,
  ToggleIcon,
  Answer,
} from "./faq.styled";

const FAQ_DATA = [
  {
    q: "What is BlueFlix?",
    a: "BlueFlix is a web application for browsing movies and TV shows, featuring genre-based lists, trending content, and additional information.",
  },
  {
    q: "Where do the movie and TV show data come from?",
    a: "The data comes from an external movie database API (such as TMDB), and the app simply displays the received results.",
  },
  {
    q: "Do I need to create an account?",
    a: "You only need an account if you want to save your favorite movies, build a watchlist, or receive personalized recommendations.",
  },
  {
    q: "Is the app free to use?",
    a: "Yes, using the app is completely free. The external API may have some limitations, but the app itself does not charge access fees.",
  },
];


export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <FaqWrapper>
      <FaqTitle>Frequenlty asked questions</FaqTitle>

      <FaqList>
        {FAQ_DATA.map((item, idx) => {
          const isOpen = idx === openIndex;
          return (
            <FaqItem key={idx} $open={isOpen}>
              <QuestionRow onClick={() => toggle(idx)}>
                <QuestionText>{item.q}</QuestionText>
                <ToggleIcon>{isOpen ? "−" : "+"}</ToggleIcon>
              </QuestionRow>

              {isOpen && <Answer>{item.a}</Answer>}
            </FaqItem>
          );
        })}
      </FaqList>
    </FaqWrapper>
  );
}
