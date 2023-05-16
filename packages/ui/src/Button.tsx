interface Props {
	primary?: boolean;
	size?: 'small' | 'large';
	label?: string;
}

export const Button = ({ primary = false, label = 'Boop', size = 'small' }: Props) => {
	return (
		<button
			className={`
		  ${primary ? 'bg-red-500' : 'bg-blue-500'}
		  ${size === 'large' ? 'text-lg' : 'text-base'}
		`}
		>
			{label}
		</button>
	);
};
