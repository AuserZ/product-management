import React from 'react';
import { RingProgress, Text, Center, rem } from '@mantine/core';

interface DonutChartProps {
    data: { name: string; value: number; color: string }[];
    chartLabel?: string;
}

const DonutChart: React.FC<DonutChartProps> = ({ data, chartLabel }) => {
    const total = data.reduce((acc, item) => acc + item.value, 0);

    return (
        <Center>
            <RingProgress
                sections={data.map(item => ({
                    value: (item.value / total) * 100,
                    color: item.color,
                }))}
                size={300}
                thickness={50}
                label={<>
                    <Text size="xs" ta="center">
                        {chartLabel}
                    </Text>

                    <Text style={{fontSize:rem(24)}} className='fontLexend' fw={"bold"} ta="center">
                        {total}
                    </Text>
                </>
                }
            />
        </Center>
    );
};

export default DonutChart;