import React from "react";
import Match from "../match";
import ErrorBoundary from "@/app/components/ErrorBoundary";

const Page = async ({params,}: {params: Promise<{ data: string, league: string}>}) => {

    const host = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; // URL di base

    const {league, data} = await params;
    const response = await fetch(`${host}/api/${league}/matches/${data}`);

    if (!response.ok) {
        throw new Error("Failed to fetch team data");
    }
    const matchData = (await response.json())[0];

    const teamHome = (await (await fetch(`${host}/api/${league}/squadre/${matchData.home}`)).json())[0];
    const teamAway = (await (await fetch(`${host}/api/${league}/squadre/${matchData.away}`)).json())[0];
    const homeReigns = (await (await fetch(`${host}/api/${league}/regni/${matchData.home}/${data}`)).json())[0].regni;
    const awayReigns = (await (await fetch(`${host}/api/${league}/regni/${matchData.away}/${data}`)).json())[0].regni;

    const h2h = (await (await fetch(`${host}/api/${league}/matches/h2h/${teamHome.squadra}/${teamAway.squadra}/${data}`)).json())[0];
    //const awayH2H = (await (await fetch(`${host}/api/${league}/matches/h2h/${teamAway.squadra}/${teamHome.squadra}/${data}`)).json())[0];
    //const drawH2H = (await (await fetch(`${host}/api/${league}/matches/draw/${teamHome.squadra}/${teamAway.squadra}/${data}`)).json())[0];

    const nextDate = (await (await fetch(`${host}/api/${league}/matches/${data}/next`)).json())[0];
    const previousDate = (await (await fetch(`${host}/api/${league}/matches/${data}/previous`)).json())[0];

    return (
        <ErrorBoundary>
            <Match 
                matchInfo={{
                    date: matchData.data, 
                    location: matchData.luogo || 'Non specificato', 
                    score: matchData.risultato || 'Non disputato',
                    outcome: matchData.outcome,
                    detentore: matchData.detentore
                }} 
                teamHome={{ 
                    name: teamHome.squadra, 
                    colors: { 
                        primary: teamHome.colore_primario ? `#${teamHome.colore_primario}` : '#000000', 
                        secondary: teamHome.colore_secondario ? `#${teamHome.colore_secondario}` : '#FFFFFF'
                    }
                }} 
                teamAway={{ 
                    name: teamAway.squadra, 
                    colors: { 
                        primary: teamAway.colore_primario ? `#${teamAway.colore_primario}` : '#000000', 
                        secondary: teamAway.colore_secondario ? `#${teamAway.colore_secondario}` : '#FFFFFF'
                    } 
                }} 
                stats={{
                    headToHead: {home: h2h.wond, away: h2h.wons, draw: h2h.draw}, 
                    teamHomeTitles: homeReigns,
                    teamAwayTitles: awayReigns
                }}
                dates={{
                    previous: previousDate?.data || '',
                    next: nextDate?.data || ''
                }}
                league={league}
            />
        </ErrorBoundary>
    );
};

export default Page;