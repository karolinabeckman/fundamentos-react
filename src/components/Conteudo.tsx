interface ConteudoProps {
	children: any;
}

export default function Conteudo(props: ConteudoProps) {
	// console.log(props);
	return (
		<div
			className={`
        flex items-start bg-center p-4 flex-1
        bg-zinc-900 text-3xl
    	`}
		>
			{props.children}
		</div>
	);
}
