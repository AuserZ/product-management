"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Burger, Center, Container, Drawer, Flex, Group } from '@mantine/core';
import styles from './header.module.css';
import { IconHome, IconPackage } from '@tabler/icons-react';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
	const [active, setActive] = React.useState(0);
	const currentPath = usePathname();
	const [opened, setOpened] = useState(false);

	const menus = [
		{ name: 'Dashboard', icon: <IconHome />, link: '/' },
		{ name: 'Products', icon: <IconPackage />, link: '/products' }
	];


	useEffect(() => {
		const activeIndex = menus.findIndex(menu => menu.link === currentPath);
		setActive(activeIndex);
	}, [currentPath]);

	return (
		<div className={styles.bg}>
			<Container size="xl" className={styles.container}>
				<Group justify="space-between">
					<Image src="/assets/logo.jpg" alt="logo" width={150} height={45}></Image>
					<Center>
						<Flex gap={{ base: 'xl' }} visibleFrom="md">
							{menus.map((menu, index) => (
								<a
									key={menu.name}
									className={`${styles.link} ${active === index ? styles.active : ''}`}>
									<Flex gap={{ base: "xs" }}>
										{menu.icon}
										{menu.name}
									</Flex>
								</a>
							))}
						</Flex>
					</Center>
					<Burger hiddenFrom="md"
						opened={opened}
						onClick={() => setOpened((o) => !o)}
						className={styles.burger}
					/>
				</Group>
			</Container>
			<Drawer
				opened={opened}
				onClose={() => setOpened(false)}
				title="Menu"
				padding="xl"
				size="md"
			>
				<Flex direction="column" gap="md">
					{menus.map((menu, index) => (
						<a
							key={menu.name}
							href={menu.link}
							className={`${styles.link} ${active === index ? styles.active : ''}`}
							onClick={() => setOpened(false)}
						>
							<Flex gap={{ base: "xs" }}>
								{menu.icon}
								{menu.name}
							</Flex>
						</a>
					))}
				</Flex>
			</Drawer>
			</div>
			);
};

			export default Header;