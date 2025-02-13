import React from "react";
import Team from "../team";
import ErrorBoundary from "@/app/components/ErrorBoundary";

const TeamPage = async ({params,}: {params: Promise<{ name: string, league: string}>}) => {

    const host = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; // URL di base

    const squadra = (await params).name;
    const league = (await params).league;
    const response = await fetch(`${host}/api/${league}/squadre/${squadra}`);

    if (!response.ok) {
        throw new Error("Failed to fetch team data");
    }
    const teamData = (await response.json())[0];

    const regni = await fetch (`${host}/api/${league}/regni/${teamData.squadra}`).then(res => res.json());
    const startDate = await fetch (`${host}/api/${league}/start`).then(res => res.json()).then(data => data[0].data);
    const lastFiveMatches = await fetch (`${host}/api/${league}/matches/last/${teamData.squadra}`).then(res => res.json());

    const posizioneRegni = teamData.position_regni;
    const posizioneDurata = teamData.position_durata;
    const posizioneMedia = teamData.position_media;
    const posizioneDifese = teamData.position_difese;
    const posizioneMediaDifese = teamData.position_media_difese;
    const posizioneSfide = teamData.position_sfide;

    return (
        <ErrorBoundary>
            <Team
                squadra={teamData.squadra}
                stats={{
                    regni: teamData.regni,
                    durataCombinata: teamData.durata,
                    durataMedia: teamData.media,
                    difese: teamData.difese,
                    mediaDifese: teamData.media_difese,
                    sfide: teamData.sfide,
                }}
                colors={{
                    primary: `#${teamData.colore_primario}`,
                    secondary: `#${teamData.colore_secondario}`,
                }}
                posizioni={{
                    regni: posizioneRegni,
                    durata: posizioneDurata,
                    media: posizioneMedia,
                    difese: posizioneDifese,
                    mediaDifese: posizioneMediaDifese,
                    sfide: posizioneSfide,
                }}
                regni={regni}
                startDate={startDate}
                league={league}
                lastFiveMatches={lastFiveMatches}
            />
        </ErrorBoundary>
    );
};

export default TeamPage;