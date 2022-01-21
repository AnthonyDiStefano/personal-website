const links = [
    {
        text: "Github",
        href: "https://github.com/AnthonyDiStefano"
    },
    {
        text: "LinkedIn",
        href: "www.linkedin.com/in/anthony-di-stefano-342ard"
    }
]
export default function Socials(info) {
    const ancs = links.map((elems) => (
        <a key={elems.text} className="hover:text-blue-800" href={elems.href}>
            {elems.text}
        </a>
    ));
    return <div className="flex gap-7"> {ancs} </div>;
}