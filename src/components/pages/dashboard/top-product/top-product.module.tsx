import React from 'react';
import { Center, Container, Flex, Grid, Group, Pagination, rem, Text } from '@mantine/core'
import styles from './top-product.module.css';
import TitleSection from '@/components/global/Text/title-section.module';
import { IconArrowRight } from '@tabler/icons-react';
import ProductCard from '@/components/pages/dashboard/components/top-product-list/top-product-list.module';

const TopProductModule: React.FC = () => {
    const data = [
        { productName: 'Green Sweater', totalSold: 1228 },
        { productName: 'Blue T-Shirt', totalSold: 346 },
        { productName: 'Red Hoodie', totalSold: 346 },
        { productName: 'Black Jacket', totalSold: 346 },
    ]

    return (
        <Container className={styles.containerContent} size={"xl"}>
            <Group mb={"lg"} justify="space-between">
                <TitleSection title={'Top Selling Products'}></TitleSection>
                <a className={styles.alink} href="#">
                    <Center>
                        <Text style={{ fontSize: rem(14) }} mr={'xs'}>View All</Text> <IconArrowRight style={{ width: rem(14), height: rem(14) }} />
                    </Center></a>
            </Group>
            <Group justify='space-between' mb={"lg"}>
                {data.map((item) =>
                    <ProductCard key={item.productName} product={item}></ProductCard>
                )}
            </Group>

            <Flex justify={"end"}>
                <Pagination total={data.length / 4} color="violet" />
            </Flex>

        </Container>
    );
};

export default TopProductModule;