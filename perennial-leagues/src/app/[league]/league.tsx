'use client';

import { useEffect, useState } from 'react';
import normalizeLeagueName from '../utils/leaguesMap';
import getLeagueDesc from '../utils/leaguesDescMap';
import Card from '../components/Card';

const League = ({league = 'serie_a'} : { league: string}) => {
    const [nextMatchNumber, setNextMatchNumber] = useState<string | null>(null);
    const [lastMatchNumber, setLastMatchNumber] = useState<string | null>(null);
    const [randomMatchNumber, setRandomMatchNumber] = useState<string | null>(null);
    const [reigningChampion, setReigningChampion] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchNextMatch = async () => {
        try {
            const host = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; // URL di base
            const response = await fetch(`${host}/api/${league}/matches/last`);
            const data = (await response.json())[0];
            setNextMatchNumber(data.numero);
            const lastMatch = Number(data.numero) - 1;
            setLastMatchNumber(String(lastMatch));
            const randMatch = Math.floor(Math.random() * Number(data.numero));
            setRandomMatchNumber(String(randMatch));
            setReigningChampion(data.detentore);
        } catch (error) {
          console.error("Error fetching next match:", error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchNextMatch();
    }, [league]);

    return (
        <>
          <h3 className="h3 w-1/2">{normalizeLeagueName(league)}</h3>
          <span className="par w-1/2 text-primary mt-[var(--margin-md)] block">
            {getLeagueDesc(league)}
          </span>
            <div className="flex flex-wrap justify-between w-full mt-[var(--margin-big)]">
              <Card imageSrc='/image4.png' title='Titles Timeline' description='Unravel the full history of title contention' buttonText='Explore' buttonLink={`/${league}/timeline`} />
              <Card imageSrc='/image5.png' title={isLoading ? ('Reigning Champion') : reigningChampion ? (`Reigning Champion`) : ('No available Champion')} description='Bow to the reigning champion' buttonText={isLoading ? 'Loading...' : reigningChampion ? reigningChampion : 'Uh oh! Something is missing...'} buttonLink={reigningChampion ? `/${league}/team/${reigningChampion}` : "#"} />
              <Card imageSrc='/image6.png' title='Stats & Stuff' description='Some geeky and nerdy charts and related stats.' buttonText='Dive in!' buttonLink={`/${league}/timeline`} />
            </div>
            <div className="flex flex-wrap justify-between w-full mt-[var(--margin-big)]">
              <Card imageSrc='/image4.png' title='Random Match' description="Let me pick an interesting match! (or a boring one, I'm a card description, not a football expert)" buttonText='Try your luck!' buttonLink={randomMatchNumber ? `/${league}/match/${randomMatchNumber}` : "#"} />
              <Card imageSrc='/image5.png' title='Last Match' description="Was the last title challenge successful? Did the reigning champion manage to defend their title?" buttonText='Explore' buttonLink={lastMatchNumber ? `/${league}/match/${lastMatchNumber}` : "#"} />
              <Card imageSrc='/image6.png' title='Next Match' description="The next challenge is scheduled! Pick your favourite treat and join us in the stands." buttonText='Show me!' buttonLink={nextMatchNumber ? `/${league}/match/${nextMatchNumber}` : "#"} />
            </div>
        </>
      );
};

export default League;