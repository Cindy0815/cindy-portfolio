import { createContext, useContext, useState } from 'react';

const HeroIntroContext = createContext({
  introPlaying: true,
  setIntroPlaying: () => {},
  hasPlayedIntro: false,
  setHasPlayedIntro: () => {},
});

export const HeroIntroProvider = ({ children }) => {
  const [introPlaying, setIntroPlaying] = useState(true);
  const [hasPlayedIntro, setHasPlayedIntro] = useState(false);

  return (
    <HeroIntroContext.Provider value={{ introPlaying, setIntroPlaying, hasPlayedIntro, setHasPlayedIntro }}>
      {children}
    </HeroIntroContext.Provider>
  );
};

export const useHeroIntro = () => useContext(HeroIntroContext);
