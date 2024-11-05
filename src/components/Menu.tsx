import MenuItem from "./MenuItem";

export default function Menu() {
	return (
		<div
			className={`
        flex flex-col justify-start items-center text-3xl w-52
        bg-zinc-700 rounded-lg p-2 gap-2

      `}
		>
			<MenuItem texto="Página #1" url="/fundamentos/pagina" />
			<MenuItem texto="Pagina #2" url="/pagina" />
		</div>
	);
}
