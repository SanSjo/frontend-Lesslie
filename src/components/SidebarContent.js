import React from 'react';
import { PushMenu, usePushMenu } from 'react-push-menu';

export const SidebarContent = () => {
	const { toggleMenu } = usePushMenu();
	return (
		<>
			<div
				onClick={() => {
					toggleMenu();
				}}
			>
				trigger
			</div>
		</>
	);
};
