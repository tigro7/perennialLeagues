'use client';

const podiumColors = {
  1: 'gold',
  2: 'silver',
  3: 'bronze',
};

const StatContainer = ({
    color,
    statName,
    statValue,
    description = '',
    valuePrefix = '',
    valueSuffix = '',
    position,
    positionPrefix = '',
    positionSuffix = '',
}: {
    color: string;
    statName: string;
    statValue: number | string | React.ReactNode;
    description?: string;
    valuePrefix?: string;
    valueSuffix?: string;
    position?: number | string;
    positionPrefix?: string;
    positionSuffix?: string;
}) => {
    const effectiveColor = position && podiumColors[position as keyof typeof podiumColors]
        ? podiumColors[position as keyof typeof podiumColors]
        : color;

    return (
    <div className="text-center shadow-md rounded-md p-2" style={{ color: effectiveColor }}>
        <p className="text-xl font-semibold">{statName}</p>
        <p className="text-3xl">{valuePrefix}{statValue}{valueSuffix}</p>
        {description && <p className="text-sm italic mt-2">{description}</p>}
        {position !== undefined && (<p className="text-sm italic mt-2">{positionPrefix}{position}{positionSuffix}</p>)}
    </div>
    );
};

export default StatContainer;