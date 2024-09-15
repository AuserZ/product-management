import React from 'react';
import { Badge } from '@mantine/core';

interface BadgeProps {
    label: string;
    color?: string;
    size?: string;
}

const StatusBadge: React.FC<BadgeProps> = ({ size = 'md', label, color = 'blue' }) => {
    return (
        <Badge size={size} color={color} variant="outline">
            {label}
        </Badge>
    );
};

export default StatusBadge;