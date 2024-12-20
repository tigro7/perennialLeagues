import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import statsMap from "@/app/utils/statsMap";

const StatsIcon = ({ statName, statTitle} : {
    statName: string;
    statTitle?: string;
  }) => {
    const icon = Object.keys(statsMap).find((key) => statName.toLowerCase().includes(key.toLowerCase())) || "Question Circle";
    const color = (statName.toLowerCase().includes("gold") || statName.toLowerCase().includes("longest")) ? "gold" : 
                    statName.toLowerCase().includes("silver") ? "silver" : 
                    (statName.toLowerCase().includes("bronze") || statName.toLowerCase().includes("shortest")) ? "bronze" : 
                        statName.toLowerCase().includes("iron") ? "gray" : "black";
    return (
        //gestisci il colore in base ai colori della squadra, tranne nel caso in cui in statName vi sia Iron, Bronze, Silver o Gold
        <div className="stat-icon mb-2 text-gray-600">
            <FontAwesomeIcon
                icon={statsMap[icon].icon}
                title={statTitle ? statTitle : statName}
                size="2x"
                color={color}
            />
        </div>
    );
};

export default StatsIcon;