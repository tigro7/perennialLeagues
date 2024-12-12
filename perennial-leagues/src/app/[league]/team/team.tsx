'use client'

import "@/app/utils/setupCharts";
import Jersey from "@/app/components/Jersey";
import TimelineChart from "@/app/components/TimelineChart";
import StatContainer from "@/app/components/StatContainer";

const generateTimeline = (regni: { start: string; end: string }[], startDate: string) => {
  const timeline = [];
  const today = new Date().toISOString();

  // Aggiungere un regno vuoto all'inizio, se necessario
  if (new Date(startDate).getTime() < new Date(regni[0].start).getTime()) {
    timeline.push({
      start: startDate,
      end: regni[0].start,
      team: false,
      duration: Math.ceil(
        (new Date(regni[0].start).getTime() - new Date(startDate).getTime()) /
          (1000 * 60 * 60 * 24)
      ),
    });
  }

  // Iterare sui regni e calcolare la durata
  for (let i = 0; i < regni.length; i++) {
    const currentRegno = regni[i];
    const currentStart = new Date(currentRegno.start);
    const currentEnd = new Date(currentRegno.end);

    // Aggiungere il regno attuale
    timeline.push({
      ...currentRegno,
      team: true,
      duration: Math.ceil((currentEnd.getTime() - currentStart.getTime()) / (1000 * 60 * 60 * 24)),
    });

    // Aggiungere un regno vuoto se c'è un gap tra il regno attuale e il successivo
    if (i < regni.length - 1) {
      const nextStart = new Date(regni[i + 1].start);
      if (currentEnd < nextStart) {
        timeline.push({
          start: currentRegno.end,
          end: regni[i + 1].start,
          team: false,
          duration: Math.ceil(
            (nextStart.getTime() - currentEnd.getTime()) / (1000 * 60 * 60 * 24)
          ),
        });
      }
    }
  }

  // Aggiungere un regno vuoto alla fine, se necessario
  if (new Date(today).getTime() > new Date(regni[regni.length - 1].end).getTime()) {
    timeline.push({
      start: regni[regni.length - 1].end,
      end: today,
      team: false,
      duration: Math.ceil(
        (new Date(today).getTime() - new Date(regni[regni.length - 1].end).getTime()) /
          (1000 * 60 * 60 * 24)
      ),
    });
  }

  return timeline;
};

const Squadra = ({squadra, stats, colors, regni, startDate, posizioni}: 
  {squadra: string, stats: {regni: number, durataCombinata: number, durataMedia: number}, colors: {primary: string, secondary: string}, regni:{ start: string, end: string }[], startDate: string, posizioni: {regni: number, durata: number, media: number}}) => {

  if (!squadra || !stats || !colors) {
    return <div>Errore: dati non disponibili</div>;
  }

  const timeLineData = generateTimeline(regni, startDate);
  const longestReign = timeLineData.filter(regno => regno.team).reduce((prev, curr) =>{return prev.duration > curr.duration ? prev : curr;})
  const shortestReign = timeLineData.filter(regno => regno.team).reduce((prev, curr) =>{return prev.duration < curr.duration ? prev : curr;})

  return(
    <div className="container mx-auto mt-8 p-4 border-4 rounded-xl" style={{ borderColor: colors.primary }}>
      {/* Nome della Squadra */}
      <h1 className="text-4xl font-bold text-center mb-6 rounded-xl" style={{ color: colors.primary, backgroundColor: colors.secondary}}>
        {`${squadra.charAt(0).toUpperCase()}${squadra.slice(1)}`}
      </h1>

      {/* Stats e Posizioni */}
      <div className="flex justify-around mb-6">
        <StatContainer statName="Regni" statValue={stats.regni} position={posizioni.regni} positionSuffix="° nella classifica totale" color={colors.primary} />
        <StatContainer statName="Durata Combinata" statValue={stats.durataCombinata} valueSuffix=" giorni" position={posizioni.durata} positionSuffix="° nella classifica totale" color={colors.primary} />
        <StatContainer statName="Durata Media" statValue={stats.durataMedia} valueSuffix=" giorni" position={posizioni.media} positionSuffix="° nella classifica totale" color={colors.primary} />
      </div>

      <div className="flex justify-around mb-6">
        <StatContainer statName="Primo" statValue={1} color={colors.secondary} position={' '} 
          positionPrefix={`Inizio: ${(new Date(regni[0].start)).toLocaleDateString()}`} 
          positionSuffix={`Fine: ${(new Date(regni[0].end)).toLocaleDateString()}`}
        />
        <StatContainer statName="Ultimo" statValue={regni.length} color={colors.secondary} position={' '}
          positionPrefix={`Inizio: ${(new Date(regni[regni.length - 1].start)).toLocaleDateString()}`}
          positionSuffix={`Fine: ${(new Date(regni[regni.length - 1].end)).toLocaleDateString()}`}
        />

      </div>
      
      <div className="flex justify-around mb-6">
        <StatContainer statName="Il più lungo" statValue={longestReign.duration} valueSuffix=" giorni" color={colors.primary}
          position={' '} positionPrefix={`Inizio: ${(new Date(longestReign.start)).toLocaleDateString()}`}
          positionSuffix={`Fine: ${(new Date(longestReign.end)).toLocaleDateString()}`}
        />
        <StatContainer statName="Il più corto" statValue={shortestReign.duration} valueSuffix=" giorni" color={colors.primary}
          position={' '} positionPrefix={`Inizio: ${(new Date(shortestReign.start)).toLocaleDateString()}`}
          positionSuffix={`Fine: ${(new Date(shortestReign.end)).toLocaleDateString()}`}
        />
      </div>

      <div className="flex justify-center mb-6">
        <Jersey colors={colors} />
      </div>

      <div className="py-10">     
        <TimelineChart regni={timeLineData} primaryColor={colors.primary} secondaryColor={colors.secondary}/>
      </div>
    </div>
  );
}

export default Squadra;