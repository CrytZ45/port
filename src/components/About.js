import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <h1>
        <span className="title">About</span>
      </h1>
      <Text>
        <p>
          Hi, I'm <strong>Joylene C. Agman</strong>,   a spirited individual defined by resilience and a vision for a life filled with purpose. Born on November 11, 2002, and nurtured under the loving guidance of my grandmother, I carry a profound sense of family and community that anchors my values and aspirations.
        </p>

        <p>
        Currently, I am navigating the complexities of a Bachelor of Science in Computer Science at NEMSU-LC. While my course may not align with my passions, I've embraced the challenge.
        </p>

        <p>
        Solitude is my sanctuary, where I recharge, reflect, and nurture my aspirations. During these moments, I immerse myself in the captivating worlds of Korean dramas, drawn to their masterful storytelling and rich cultural narratives. These tales ignite my imagination and offer a window into boundless creativity.
        </p>

        <p>
        My ultimate dream lies beyond the bounds of my current field, I aspire a flight attendant, embodying my love for exploration connection, and adventure. Yet, more than personal ambition, my deepest motivation is to elevate my family's dreams and turn them into reality.
        </p>

        <p>
        While the path I'm on may be unconventional, every step is a part of shaping who I am and who I aspire to become. I look forward to embrace new challenges, exploring endless possibilities, and creating a future filled with purpose and meaning.
        </p>
        <p>
          <a
            class="shadow-underline"
            href={process.env.PUBLIC_URL + '/cv.pdf'}
            target="_blank"
          >
            View CV
          </a>
        </p>

        <p>
          <strong>Feel free to contact me anytime!</strong>
        </p>
      </Text>
    </Container>
  );
};

const Container = styled.div`
  .title {
    box-shadow: inset 0 -0.45em 0 ${(props) => props.theme.headerUnderline};
  }
  h1 {
    font-size: 3rem;
    padding: 2rem;
    padding-top: 4rem;
    @media (max-width: 40rem) {
      font-size: 2.5rem;
      padding: 1.5rem;
      padding-top: 3rem;
    }
  }
`;

const Text = styled.div`
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 500;

  @media (max-width: 40rem) {
    font-size: 1.2rem;
    padding: 1.5rem;
    font-weight: 500;
  }

  p {
    padding-bottom: 1rem;
    @media (max-width: 40rem) {
      padding-bottom: 0.8rem;
    }
  }

  ul {
    padding-left: 2rem;
    @media (max-width: 40rem) {
      padding-left: 1rem;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 700;
    //color: ${(props) => props.theme.headerUnderline};
  }
  .shadow-underline {
    box-shadow: inset 0 -0.45em 0 ${(props) => props.theme.headerUnderline};
    transition: box-shadow 0.3s ease;
  }
  .shadow-underline:hover,
  .shadow-underline:active {
    box-shadow: inset 0 -1.25em 0 ${(props) => props.theme.headerUnderline};
  }
`;

export default About;
