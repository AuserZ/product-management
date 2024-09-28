'use client';

import { Container, Grid, Title, Text, Divider, Group, rem, Center, Flex, ColorSwatch } from '@mantine/core';
import React from 'react';
import styles from './dashboard.module.css';
import CardItem from '@/components/pages/dashboard/components/card-item/card-item.module';
import { COLORS } from '../../../../public/const';
import { IconArrowRight } from '@tabler/icons-react';
import InventoryPlanList from '@/components/pages/dashboard/components/inventory-plan-list/inventory-plan-list.module';
import DonutChart from '@/components/global/ring-progress/ring-progress.module';
import TopProductModule from './top-product/top-product.module';

const Dashboard: React.FC = () => {
    const inventoryPlanData = [
        {
            name: "T-Shirt Inventory",
            totalProduct: 10,
            status: "Todo",
            process: 0
        },
        {
            name: "NOV Inventory - Warehouse A",
            totalProduct: 5,
            status: "Processing",
            process: 25
        },
        {
            name: "OCT Inventory - Warehouse B",
            totalProduct: 3,
            status: "Completed",
            process: 100
        }
    ]

    const data = [
        { name: 'USA', value: 1228, color: COLORS.colorPrimary },
        { name: 'India', value: 346, color: COLORS.colorSecondary },
    ];

    return (
        <Container size="xl" className={styles.container}>
            <Title className={styles.fontLexend} fw={'bold'} mb="30px">DASHBOARD</Title>
            <Container className={styles.containerContent} size={"xl"}>
                <Grid>
                    <Grid.Col span={6}>
                        <Text className="fontLexend" fs={rem(24)} mb={"md"}>Inventory Summary</Text>
                        <Grid>
                            <Grid.Col span={6}>
                                <CardItem color={"#f5f1fe"} title={"Total Items"} value={"1,345"} link={'#'} textColor={COLORS.colorPrimary} /></Grid.Col>
                            <Grid.Col span={6}>
                                <CardItem color={"#fdfaee"} title={"Low-Stock Alerts"} value={"12"} link={'#'} textColor={'#15abff'} /></Grid.Col>
                        </Grid>
                    </Grid.Col>
                    {/* <Divider orientation="vertical" /> */}
                    <Grid.Col span={6}>
                        <Text className="fontLexend" fs={rem(24)} mb={"md"}>Sales Activities</Text>
                        <Grid>
                            <Grid.Col span={6}>
                                <CardItem color={"#fff0f7"} title={"To be delivered"} value={"200"} link={'#'} textColor={"#c8005d"} /></Grid.Col>
                            <Grid.Col span={6}>
                                <CardItem color={"#fff3f0"} title={"To be ordered"} value={"120"} link={'#'} textColor={'#f9623e'} /></Grid.Col>
                        </Grid>
                    </Grid.Col>
                </Grid>
            </Container>

            <Container size="xl">
                <Grid gutter={"xl"}>
                    <Grid.Col style={{ paddingLeft: 0 }} span={{ base: 12, md: 9 }}>
                        <div className={styles.containerContent}>
                            <Group justify="space-between">
                                <Text className="fontLexend" style={{ fontSize: rem(24) }}>Inventory Plans</Text>
                                <a className={styles.alink} href="#">
                                    <Center>
                                        View detail <IconArrowRight style={{ width: rem(14), height: rem(14) }} />
                                    </Center></a>
                            </Group>
                            <Text my={"lg"} c={COLORS.colorGrey} style={{ fontSize: rem(14) }} className="fontLexend">This Month (3)</Text>

                            <div className={styles.border}>
                                {inventoryPlanData.map((item, index) => (
                                    <React.Fragment key={item.name}>
                                        <InventoryPlanList data={item} />
                                        {index !== inventoryPlanData.length - 1 && <Divider />}
                                    </React.Fragment>
                                ))}
                            </div>

                            <Text mt={"lg"} c={COLORS.colorGrey} style={{ fontSize: rem(14) }} className="fontLexend">December (0)</Text>
                        </div>
                    </Grid.Col>
                    <Grid.Col style={{ paddingRight: 0 }} span={{ base: 12, md: 3 }}>
                        <div className={styles.containerContent}>
                            <Flex direction={"column"} justify={"center"}>
                                <Text className="fontLexend" style={{ fontSize: rem(24) }}>Warehouse Detail</Text>
                                <DonutChart data={data} chartLabel='Total Product' />
                                {data.map((item) => (
                                    <Group mb={"md"} justify={"space-between"} key={item.name}>
                                        <Flex align={"center"} gap={"sm"}>
                                            <ColorSwatch size={rem(14)} color={item.color} />
                                            <Text style={{ fontSize: rem(14) }}>
                                                {item.name}</Text>
                                        </Flex>
                                        <Text style={{ fontSize: rem(16) }} fw={"bold"}>
                                            {item.value} products
                                        </Text>
                                    </Group>
                                ))}
                            </Flex>
                        </div>
                    </Grid.Col>
                </Grid>
            </Container>

            <TopProductModule />
        </Container>
    );
};

export default Dashboard;