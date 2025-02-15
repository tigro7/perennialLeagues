const teamNormalizationMap: { [key: string]: string } = {
    "A. Taranto": "Taranto",
    "A.Doria": "Andrea Doria",
    "A.M.C.": "Associazione Milanese Calcio",
    "AC Libertas": "",
    "AC Milanese": "AC Milanese Corvetto 1920",
    "AZ Picerno": "",
    "Acireale": "",
    "Acquapozzillo": "",
    "Acqui": "",
    "Adelaide Nicastro": "",
    "Adriese": "",
    "Aeronautica Torino": "",
    "Aesernia": "",
    "Afragolese": "",
    "Aglianese": "",
    "Akragas": "",
    "Alba": "",
    "Alba Audace": "",
    "Alba Roma": "",
    "Albalatrastevere": "",
    "Albanova": "",
    "Albese": "",
    "Albinese": "",
    "AlbinoLeffe": "",
    "Albissola": "",
    "Alcamo": "",
    "Alcione": "",
    "Alessandria": "",
    "Alessandrina": "",
    "Alghero": "",
    "Almas": "",
    "Almas Roma": "",
    "Altamura": "",
    "Alzano": "",
    "Alzano Virescit": "",
    "Amatori": "",
    "Amatori Torino": "",
    "Ambrosiana": "Inter",
    "Ambrosiana Inter": "Inter",
    "Ambrosiana-Inter": "Inter",
    "Ancona": "Ancona",
    "Ancona Matelica": "Ancona",
    "Ancona-Matelica": "Ancona",
    "Anconitana": "Ancona",
    "Anconitana Bianchi": "Ancona",
    "Anconitana-Bianchi": "Ancona",
    "Andrea Doria": "Andrea Doria",
    "Andrea Doria*": "Andrea Doria",
    "Andria BAT": "",
    "Angizia": "",
    "Angizia Luco": "",
    "Angri": "",
    "Aosta": "",
    "Aprilia": "",
    "Aquila": "",
    "Aquila Montevarchi": "",
    "Arezzo": "",
    "Arona": "",
    "Arrone": "",
    "Arsenale Taranto": "Taranto",
    "Arsenaltaranto": "Taranto",
    "Arzachena": "",
    "Arzanese": "",
    "Arzignano Valchiampo": "",
    "Ascoli": "",
    "Asti": "",
    "Asti TSC": "",
    "Astrea": "",
    "Atalanta": "",
    "Atalanta U23": "",
    "Atl. Roma": "Atletico Roma",
    "Atletico Catania": "",
    "Atletico Leonzio": "",
    "Atletico Roma": "",
    "Audace": "",
    "Audace Cerignola": "",
    "Audace Ferrara": "",
    "Audace Livorno": "",
    "Audace Roma": "",
    "Audace SME": "",
    "Audace Taranto": "",
    "Audace Torino": "",
    "Audacia Napoli": "",
    "Audax": "",
    "Audax M.": "",
    "Aurora Desio": "",
    "Ausonia": "",
    "Ausonia P.G.": "Ausonia",
    "Ausonia Pro Gorla": "Ausonia",
    "Ausonia*": "Ausonia",
    "Avellino": "",
    "Aversa Normanna": "",
    "Avezzano": "",
    "Bacoli Sibilla Flegrea": "",
    "Bagnolese": "",
    "Banco Roma": "Banco di Roma",
    "Banco di Roma": "",
    "Baracca": "",
    "Baracca Lugo": "Baracca",
    "Bari": "",
    "Barletta": "",
    "Bassano": "Bassano Virtus",
    "Bassano V.": "Bassano Virtus",
    "Bassano Virtus": "",
    "Battipagliese": "",
    "Bellaria": "",
    "Bellaria Igea Marina": "Bellaria",
    "Belluno": "",
    "Benevento": "",
    "Bentegodi": "Bentegodi Verona", 
    "Bentegodi Verona": "",
    "Bergamasca": "",
    "Biellese": "",
    "Bisceglie": "",
    "Bitonto": "",
    "Boca San Lazzaro": "",
    "Bologna": "",
    "Bolognese": "",
    "Bolzano": "",
    "Borgo a Buggiano": "",
    "Borgosesia": "",
    "Borzacchini Terni": "",
    "Bra": "",
    "Brasiliano": "",
    "Brembillese": "",
    "Brescello": "",
    "Brescia": "",
    "Brindisi": "",
    "C.R.D.A. Monfalcone": "",
    "C.S Firenze": "C.S. Firenze",
    "C.S. Firenze": "",
    "C.di Sangro": "Castel di Sangro",
    "CRDA Monfalcone": "Monfalcone",
    "CS Firenze": "C.S. Firenze",
    "Cagliari": "",
    "Cairese": "",
    "Calcio Caravaggese": "",
    "Caldiero": "",
    "Campania": "Campania Puteolana",
    "Campania P.": "Campania Puteolana",
    "Campania Puteolana": "",
    "Campobasso": "",
    "Canavese": "",
    "Canicattì": "",
    "Caratese": "",
    "Caravaggese": "",
    "Carbonia": "",
    "Carbosarda": "",
    "Carignano": "",
    "Carpenedolo": "",
    "Carpi": "",
    "Carrarese": "",
    "Casale": "",
    "Casalecchio": "",
    "Casalotti": "",
    "Casarano": "",
    "Casatese": "",
    "Casertana": "",
    "Casoria": "",
    "Cassino": "",
    "Casteggio": "",
    "Castel Rigone": "",
    "Castel S.Pietro": "Castel San Pietro",
    "Castel San Pietro": "",
    "Castel di Sangro": "",
    "Castellarano": "",
    "Castelnuovo": "",
    "Castelsangro": "",
    "Castiglione": "",
    "Castrovillari": "",
    "Catania": "",
    "Catanzarese": "",
    "Catanzaro": "",
    "Cattolica": "",
    "Cavese": "",
    "Cecina": "",
    "Celano": "",
    "Celano Olimpia": "Celano",
    "Centese": "",
    "Cerretese": "",
    "Cerveteri": "",
    "Cervia": "",
    "Cesena": "",
    "Cesenatico": "",
    "Chiasso": "",
    "Chieti": "",
    "Chievo": "Chievo Verona",
    "Chievo Verona": "",
    "Chioggia Sottomarina": "",
    "Cirio": "",
    "Cisco Lodigiani": "",
    "Cisco Roma": "",
    "Cittadella": "",
    "Città di Castello": "",
    "Città di Cerveteri": "",
    "Città di Jesolo": "",
    "Civitanovese": "",
    "Civitavecchia": "",
    "Civitavecchiese": "Civitavecchia",
    "ClodiaSottomarina": "Clodia Sottomarina",
    "Clodiasottomarina": "Clodia Sottomarina",
    "Codogno": "",
    "Colleferro": "",
    "Colligiana": "",
    "Comense": "",
    "Como": "",
    "Conegliano": "",
    "Cosenza": "",
    "Cossatese": "",
    "Crema": "",
    "Cremapergo": "",
    "Cremonese": "",
    "Crevalcore": "",
    "Crociati Noceto": "",
    "Crotone": "",
    "Cuneo": "",
    "CuoioCappiano": "",
    "Cuoiopelli": "",
    "Cuoiopelli Cappiano Romaiano": "Cuoiopelli", 
    "Cynthia": "",
    "Del Duca Ascoli": "Ascoli",
    "Delta Porto Tolle": "",
    "Derthona": "",
    "Dolo": "",
    "Dominante": "",
    "Ebolitana": "",
    "Edera Trieste": "",
    "Elpidiense": "",
    "Empoli": "",
    "Enna": "",
    "Enotria": "",
    "Enotria G.": "Enotria",
    "Enotria Goliardo": "Enotria",
    "Entella": "Virtus Entella",
    "Entella Bacezza": "Virtus Entella",
    "Ercolanese": "",
    "Esperia": "",
    "FBC Bari": "Bari",
    "FC Torinese": "",
    "FEDIT": "",
    "Faenza": "",
    "Fanfulla": "",
    "Fano": "",
    "Fasano": "",
    "Feltrese": "",
    "FeralpiSalò": "Feralpisalò",
    "Feralpisalò": "",
    "Ferentino": "",
    "Fermana": "",
    "Fidelis": "Fidelis Andria",
    "Fidelis Andria": "",
    "Figline": "",
    "Fiorente": "",
    "Fiorentina": "",
    "Fiorenzuola": "",
    "Firenze": "Fiorentina",
    "Firenze FBC": "Fiorentina",
    "Fiumana": "",
    "Florentia Viola": "",
    "Foggia": "",
    "Foggia & Incedit": "Foggia",
    "Foligno": "",
    "Fondi": "",
    "Forlì": "",
    "Formia": "",
    "Forti e Liberi": "",
    "Fortis Juventus": "",
    "Fortitudo": "Fortitudo Pro Roma",
    "Fortitudo Pro Roma": "",
    "Francavilla": "",
    "Frattese": "",
    "Frosinone": "",
    "G.C. Cappuccini": "",
    "GC Grifone": "",
    "GS Bolognese": "Bolognese",
    "Galatina": "",
    "Gallaratese": "",
    "Gallipoli": "",
    "Gavinovese": "",
    "Gavorrano": "",
    "Gela": "",
    "Gela J.T.": "Gela",
    "Gelbison": "",
    "Genoa": "",
    "Genova": "Genoa",
    "Genova 1893": "Genoa",
    "Gerbi": "",
    "Gerbi Pisa": "",
    "Giacomense": "",
    "Giana Erminio": "",
    "Giarre": "",
    "Ginnastica": "",
    "Ginnastica Torino": "",
    "Gioiese": "",
    "Giorgione": "",
    "Giovani Calciatori": "GC Grifone",
    "Gioventù Brindisi": "",
    "Giugliano": "",
    "Giulianova": "",
    "Gladiator": "",
    "Gorizia": "",
    "Gozzano": "",
    "Grifone": "GC Grifone",
    "Grion Pola": "",
    "Grosseto": "",
    "Grumese": "",
    "Gualdo": "",
    "Gubbio": "",
    "Hellas": "Hellas Verona",
    "Hellas Verona": "",
    "HinterReggio": "",
    "Ideale": "",
    "Igea": "",
    "Igea Virtus": "",
    "Ilva Maddalena": "",
    "Imola": "",
    "Imolese": "",
    "Imperia": "",
    "Inter": "",
    "Internaples": "Internazionale Naples",
    "Internapoli": "Internazionale Napoli",
    "Internazionale": "Internazionale Napoli",
    "Internazionale Napoli": "",
    "Internazionale Torino": "",
    "Iperzola": "",
    "Ischia": "",
    "Ischia Isolaverde": "",
    "Isernia": "",
    "Isola Liri": "",
    "Itala Firenze": "",
    "Itala San Marco": "",
    "Ivrea": "",
    "Jesi": "",
    "Jesina": "",
    "Juniorcasale": "",
    "Juve Domo": "",
    "Juve Stabia": "",
    "Juventina Gela": "",
    "Juventus": "",
    "Juventus Audax": "",
    "Juventus Domo": "",
    "Juventus Italia": "",
    "Juventus Next Gen": "",
    "Juventus Roma": "",
    "Juventus Stabia": "",
    "Juventus U23": "",
    "Juveterranova Gela": "",
    "Kroton": "",
    "L'Aquila": "",
    "L.R. Vicenza": "Vicenza",
    "L.V.P.A. Frascati": "",
    "LVPA Frascati": "",
    "La Dominante": "Sampdoria",
    "La Palma": "",
    "Lambro": "",
    "Lanciano": "",
    "Lanerossi Vicenza": "Vicenza",
    "Latina": "",
    "Lazio": "",
    "Lecce": "",
    "Lecco": "",
    "Leffe": "",
    "Legnago": "",
    "Legnago Salus": "Legnago",
    "Legnanesi": "",
    "Legnano": "",
    "Leonzio": "",
    "Libertas": "",
    "Libertas Firenze": "",
    "Libertas Palermo": "",
    "Liberty": "",
    "Licata": "",
    "Liguria": "Sampierdarenese",
    "Liguria FBC": "Sampierdarenese",
    "Livorno": "",
    "Lodigiani": "",
    "Lucca": "Lucchese",
    "Lucchese": "",
    "Lucchese Libertas": "Lucchese",
    "Lumezzane": "",
    "Lupa Castelli Romani": "",
    "Lupa Piacenza": "",
    "Lupa Roma": "",
    "MATER": "",
    "Ma.Co.Bi.Asti": "",
    "Macerata": "Maceratese",
    "Maceratese": "",
    "Magenta": "",
    "Maglie": "",
    "Manfredonia": "",
    "Manlio Cavagnaro": "",
    "Mantova": "",
    "Mantovana": "",
    "Marsala": "",
    "Martina": "Martina Franca",
    "Martina Franca": "",
    "Marzoli Palazzolo": "",
    "Marzotto": "",
    "Marzotto Valdagno": "",
    "Massese": "",
    "Massiminiana": "",
    "Matelica": "",
    "Matera": "",
    "Meda": "",
    "Meda 1913": "Meda",
    "Mediolanum": "",
    "Melfi": "",
    "Messina": "",
    "Messinese": "",
    "Mestre": "",
    "Mestrina": "",
    "Mezzocorona": "",
    "Milan": "",
    "Milan Futuro": "",
    "Milanese": "US Milanese",
    "Milano": "Milan",
    "Milazzo": "",
    "Mira": "",
    "Mobilieri Ponsacco": "",
    "Modena": "",
    "Modica": "",
    "Molassana": "",
    "Molfetta": "",
    "Molinella": "",
    "Moncalieri": "",
    "Monfalcone": "",
    "Monfalconese C.N.T.": "Monfalcone",
    "Monfalconese CNT": "Monfalcone",
    "Monopoli": "",
    "Monselice": "",
    "Montebelluna": "",
    "Montecatini": "",
    "Montecchio": "",
    "Monterosi Tuscia": "",
    "Montevarchi": "",
    "Montichiari": "",
    "Monza": "",
    "Morolo": "",
    "Morro d'Oro": "",
    "Naples": "",
    "Napoli": "",
    "Nardò": "",
    "Nazionale Emilia": "",
    "Nazionale L.": "Nazionale Lombardia",
    "Nazionale Lombardia": "",
    "Neapolis": "",
    "Nissa": "",
    "Nocerina": "",
    "Noicattaro": "",
    "Nola": "",
    "Novara": "",
    "Novarese": "",
    "Novese": "",
    "Nuorese": "",
    "Nuova Igea": "",
    "Olbia": "",
    "Oltrepò": "",
    "Olympia": "",
    "Omegna": "",
    "Orceana": "",
    "Osimana": "",
    "Ospitaletto": "",
    "Ostia Mare": "",
    "Ozo Mantova": "",
    "P.Vercelli": "Pro Vercelli",
    "Padova": "",
    "Paganese": "",
    "Palazzolo": "",
    "Palermo": "",
    "Palermo Juventina": "",
    "Palermo-Juventina": "Palermo Juventina",
    "Palmese": "",
    "Panigale": "",
    "Parma": "",
    "Pastore": "",
    "Paternò": "",
    "Pavia": "",
    "Pergocrema": "",
    "Pergolettese": "",
    "Perugia": "",
    "Pescara": "",
    "Pescina": "",
    "Pescina VG": "Pescina",
    "Petrarca": "",
    "Piacenza": "",
    "Pianese": "",
    "Piemonte": "",
    "Pietrasanta": "",
    "Pievigina": "",
    "Pineto": "",
    "Piombino": "",
    "Pisa": "",
    "Pistoiese": "",
    "Pizzighettone": "",
    "Poggese": "",
    "Poggibonsi": "",
    "Pomezia": "",
    "Pontedera": "",
    "Pordenone": "",
    "Portocivitanovese": "",
    "Portogruaro": "",
    "Portogruaro-Summaga": "Portogruaro",
    "Potenza": "",
    "Prato": "",
    "Pro Belvedere": "",
    "Pro Caserta": "",
    "Pro Cavese": "",
    "Pro Cisterna": "",
    "Pro Gorizia": "",
    "Pro Italia": "",
    "Pro Livorno": "",
    "Pro Napoli": "",
    "Pro Patria": "",
    "Pro Piacenza": "",
    "Pro Roma": "",
    "Pro Sesto": "",
    "Pro Vasto": "",
    "Pro Vercelli": "",
    "Pro Vercelli*": "Pro Vercelli",
    "ProVercelli": "Pro Vercelli",
    "Puteolana": "",
    "R.M. Firenze": "",
    "Racing Fondi": "",
    "Racing Lib.": "Racing Libertas",
    "Racing Libertas": "",
    "Racing Roma": "",
    "Ragusa": "",
    "Rapallo Ruentes": "",
    "Ravenna": "",
    "Real Marcianise": "",
    "Real SPAL": "SPAL",
    "Real Vicenza": "",
    "Recanatese": "",
    "Reggiana": "",
    "Reggina": "",
    "Reggio Audace": "",
    "Renate": "",
    "Rende": "",
    "Rhodense": "",
    "Riccione": "",
    "Rieti": "",
    "Rimini": "",
    "Rivarolese": "",
    "Rizzoli": "",
    "Robur Siena": "",
    "Rodengo Saiano": "",
    "Roma": "",
    "Roman": "",
    "Romana": "",
    "Rondinella": "",
    "Rosetana": "",
    "Rovereto": "",
    "Rovigo": "",
    "Russi": "",
    "Rutigliano": "",
    "S. Angelo": "Sant'Angelo Lodigiano",
    "S. Angelo L.": "Sant'Angelo Lodigiano",
    "S.Anastasia": "Sant'Anastasia",
    "S.Elena Quartu": "Sant'Elena Quartu",
    "S.Torres": "Sassari Torres",
    "SC Lecce": "Lecce",
    "SIAI Marchetti": "",
    "SPAL": "",
    "SPES": "SPES Livorno",
    "SPES Livorno": "",
    "Sacilese": "",
    "Salernitana": "",
    "Salernitanaudax": "Salernitana",
    "Sambenedettese": "",
    "Sambonifacese": "",
    "Sampdoria": "",
    "Sampierd.": "Sampierdarenese",
    "Sampierdarenese": "",
    "San Donato Tavarnelle": "",
    "San Donà": "",
    "San Felice Normanna": "",
    "San Marino": "",
    "San Vito Benevento": "",
    "Sandona'": "Sandonà",
    "Sandonà": "",
    "Sangiovannese": "",
    "Sangiuliano City": "",
    "Sangiuseppese": "",
    "Sangiuseppese Neapolis": "Sangiuseppese",
    "Sangiustese": "",
    "Sanremese": "",
    "Sansepolcro": "",
    "Sansovino": "",
    "Sant'Anastasia": "",
    "Sant'Angelo": "Sant'Angelo Lodigiano",
    "Sant'Angelo Lodigiano": "",
    "Sant'Elena Quartu": "",
    "Santarcangelo": "",
    "Sarom Ravenna": "",
    "Saronno": "",
    "Sarzanese": "",
    "Sassari Torres": "",
    "Sassuolo": "",
    "Saviglianese": "",
    "Savoia": "",
    "Savona": "",
    "Savonese": "",
    "Scafatese": "",
    "Schio": "",
    "Seregno": "",
    "Serenissima": "",
    "Serenitas Spezia": "",
    "Sestrese": "",
    "Sestri Levante": "",
    "Sicula Leonzio": "",
    "Siena": "",
    "Simaz Popoli": "",
    "Simmenthal Monza": "Monza",
    "Simmenthal-Monza": "Monza",
    "Siracusa": "",
    "Solbiatese": "",
    "Solvay Rosignano": "",
    "Sora": "",
    "Sorrento": "",
    "Sorso": "",
    "Sottomarina": "",
    "Spal": "SPAL",
    "Speranza": "",
    "Spes": "Spes Genova",
    "Spes Genova": "",
    "Spezia": "",
    "Sporting Benevento": "Benevento",
    "Squinzano": "",
    "Stabia": "",
    "Stelvio": "",
    "Suzzara": "",
    "Südtirol": "Südtirol-Alto Adige",
    "Südtirol-Alto Adige": "",
    "Talmone Torino": "",
    "Tarantina": "",
    "Taranto": "",
    "Team Altamura": "",
    "Tebro Roma": "",
    "Telgate": "",
    "Tempio": "",
    "Teramo": "",
    "Ternana": "",
    "Terranova Gela": "",
    "Tevere": "",
    "Tevere Roma": "Tevere",
    "Thiene": "",
    "Tivoli": "",
    "Tolentino": "",
    "Toma Maglie": "",
    "Torinese": "US Torinese",
    "Torino": "",
    "Torres": "",
    "Torrese": "",
    "Trani": "",
    "Trapani": "",
    "Trento": "",
    "Trevigliese": "",
    "Treviso": "",
    "Tricase": "",
    "Triestina": "",
    "Tritium": "",
    "Turris": "",
    "Tuttocuoio": "",
    "US Milanese": "US Milanese",
    "US Milanese*": "US Milanese",
    "US Romana": "",
    "US Torinese": "",
    "Udine": "Udinese",
    "Udinese": "",
    "Union Clodiense": "",
    "Union Quinto": "",
    "Unione Venezia": "",
    "V. Lanciano": "Virtus Lanciano",
    "Vado": "",
    "Val di Sangro": "",
    "Valdagno": "",
    "Valdiano": "",
    "Valenzana": "",
    "Vallée d'Aoste": "",
    "Varese": "",
    "Vastese": "",
    "Veloces": "",
    "Venezia": "",
    "Venezia Mestre": "",
    "Verbania": "",
    "Vercellese": "",
    "Vercellesi Erranti": "",
    "Verona": "Hellas Verona",
    "Vezio Parducci Viareggio": "",
    "Viareggio": "",
    "Vibonese": "",
    "Vicenza": "",
    "Vico Equense": "",
    "Vigevanesi": "",
    "Vigevano": "",
    "Vigor": "",
    "Vigor Lamezia": "",
    "Vigor Senigallia": "",
    "Vigor Torino": "",
    "Villacidrese": "",
    "Virescit Bergamo": "",
    "Virescit Boccaleone": "",
    "Virtus": "",
    "Virtus Bologna": "",
    "Virtus Bolognese": "",
    "Virtus Casarano": "",
    "Virtus Entella": "",
    "Virtus Francavilla": "",
    "Virtus Juventusque": "",
    "Virtus Lanciano": "",
    "Virtus Verona": "",
    "Vis Pesaro": "",
    "Vis Sauro Pesaro": "",
    "Vita Nova": "",
    "Viterbese": "",
    "Viterbese Castrense": "",
    "Viterbo": "",
    "Vittoria": "",
    "Vittoria Roma": "",
    "Vittorio Veneto": "",
    "Voghera": "",
    "Vogherese": "",
    "Volontari Venezia": "",
    "Zenit Modena": "",
}

// Funzione per normalizzare i nomi delle squadre
export default function normalizeTeamName(teamName: string) {
    return teamNormalizationMap[teamName] || teamName;
}