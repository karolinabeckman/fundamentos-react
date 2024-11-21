interface SecaoMenuProps {
	nome: string;
}

export default function SecaoMenu(props: SecaoMenuProps) {
	return (
		<div className="text-xs text-zinc-500 w-full pl-3 pt-4">{props.nome}</div>
	);
}
