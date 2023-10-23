import * as React from 'react';

interface IProps {
	children?: React.ReactNode
}

export default function ListItem(props: IProps) {
	return (
		<li className="flex justify-start items-center
			gap-4">
			<img src="./assets/icon-list.svg" alt="Check" />
			<p>{props.children}</p>
		</li>
	)
}