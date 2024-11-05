import Link from "next/link";

export default function MenuItem(props: any) {
	return (
		<Link
			href={props.url}
			className={`
      bg-zinc-900 text-xl w-full rounded-md px-4 py-2
      `}
		>
			{props.texto}
		</Link>
	);
}
