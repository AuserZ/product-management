import React from 'react';
import { Card, Center, Flex, Group, rem, Stack, Text, Title } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import styles from './card-item.module.css';

interface CardItemProps {
    color: string;
    title: string;
    value: string;
    link: string;
    textColor: string;
}

const CardItem = (cardItemProps: CardItemProps) => {
    return (
        <Card style={{ borderRadius: 'var(--mantine-radius-md)' }} h={{ base: "150px" }} padding="xl" bg={cardItemProps.color}>
            <Stack
                align="flex-start"
                justify="space-between"
                gap="md"
                h="100%"
            >
                <Text style={{ fontSize: rem(14) }}>{cardItemProps.title}</Text>
                <Group align='center' justify='space-between' w="100%">
                    <Title c={cardItemProps.textColor}>{cardItemProps.value}</Title>
                    <a className={styles.alink} href="#">
                        <Center>
                            View detail <IconArrowRight style={{ width: rem(14), height: rem(14) }} />
                        </Center></a>
                </Group>
            </Stack>
        </Card>
    );
};

export default CardItem;