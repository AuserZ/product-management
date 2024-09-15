import { Box, Center, Flex, Grid, Progress, rem, Text } from '@mantine/core';
import { IconBuildingWarehouse } from '@tabler/icons-react';
import React from 'react';
import { COLORS } from '../../../../public/const';
import StatusBadge from '@/components/global/badge/badge.module';

interface InventoryPlanList {
	data: {
		name: string;
		totalProduct: number;
		status: string;
		process: number;
	};
};

const InventoryPlanList: React.FC<InventoryPlanList> = (props: InventoryPlanList) => {

	const checkStatus = (status: string) => {
		if (props.data.status === "Todo") {
			return 'blue';
		} else if (props.data.status === "Processing") {
			return '#7d6701';
		} else if (props.data.status === "Completed") {
			return '#107a34';
		}
	}

	return (
		<>
			<Grid p={"lg"}>
				<Grid.Col span={7}>
					<Flex align={"center"} gap={"lg"}>
						<IconBuildingWarehouse style={{ marginRight: "10px" }} color={COLORS.colorPrimary} />
						<Flex
							justify="flex-start"
							align="flex-start"
							direction="column">
							<Text style={{ fontSize: rem(14) }} mb={"5px"}>{props.data.name}</Text>
							<Text size='xs'>{props.data.totalProduct} products</Text>
						</Flex>
					</Flex>
				</Grid.Col>
				<Grid.Col span={3}>
					<Flex
						justify="flex-start"
						align="center" h={"100%"}>
						<StatusBadge color={checkStatus(props.data.status)} label={props.data.status}>
						</StatusBadge>
					</Flex></Grid.Col>
				<Grid.Col span={2}><Flex
					justify="flex-start"
					align="center" h={"100%"}><Progress w={"100%"} color={COLORS.colorPrimary} value={props.data.process} />
				</Flex></Grid.Col>
			</Grid>
		</>
	);
};

export default InventoryPlanList;