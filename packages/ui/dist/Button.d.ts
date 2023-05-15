interface Props {
    primary?: boolean;
    size?: 'small' | 'large';
    label?: string;
}
declare const Button: ({ primary, label, size }: Props) => JSX.Element;

export { Button };
