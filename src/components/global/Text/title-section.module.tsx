import React from 'react';
import { rem, Text } from '@mantine/core';

interface TitleSectionProps {
    title: string;
    color?: string;
    size?: number;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, color = '#171b1e', size = 24 }) => {
    return (
        <Text className="fontLexend" c={color} style={{ fontSize: rem(size) }}>{title}</Text>);
};

export default TitleSection;