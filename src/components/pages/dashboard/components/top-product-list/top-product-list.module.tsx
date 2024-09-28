import { Card, Text, Image } from '@mantine/core';
import React from 'react';
import { COLORS } from '../../../../../../public/const';

interface Product {
    productName: string;
    totalSold: number;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Card
            style={{ border: `2px solid #dee1e6` }}
            padding="md"
            component="a"
            href="#"
        >
            <Card.Section>
                <Image
                    src="/assets/product.jpg"
                    h={"100%"}
                    alt="Product"
                />
            </Card.Section>

            <Text fw={700} size="md" mt="md">
                {product.productName}
            </Text>

            <Text fw={700} size="sm" c={COLORS.colorPrimary}>
                {product.totalSold} items sold
            </Text>
        </Card>
    );
};

export default ProductCard;