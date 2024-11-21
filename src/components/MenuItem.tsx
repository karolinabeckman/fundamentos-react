import Link from "next/link";

interface MenuItemProps {
	texto: string;
	url: string;
	icone: any;
}

export default function MenuItem(props: MenuItemProps) {
	return (
		<Link
			href={props.url}
			className={`
				flex gap-4 items-center
				text-base w-full rounded-md px-4 py-2
				hover:bg-zinc-900
      `}
		>
			<span>{props.icone}</span>
			<span className="pr-2">{props.texto}</span>
		</Link>
	);
}
