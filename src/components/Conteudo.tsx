interface ConteudoProps {
	children: any;
}

export default function Conteudo(props: ConteudoProps) {
	// console.log(props);
	return (
		<div
			className={`
        flex items-start bg-center p-4
        text-3xl rounded-lg
        bg-emerald-500
        flex-1
    `}
		>
			{props.children}
		</div>
	);
}
