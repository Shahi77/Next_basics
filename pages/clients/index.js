import Link from "next/link";


function ClientsPage() {
    const clients = [
        { id: "max", name: "Maximilian" },
        { id: "manu", name: "Manuel" },
    ]
    return (
        <div>
            <h1>The Clients Page</h1>
            {/* <ul>
                <li>
                    <Link href="/clients/max">Maximilian</Link>
                </li>
                <li>
                    <Link href="/clients/manu">Manuel</Link>
                </li>
            </ul>  */}

            <ul>
                {clients.map(client => <li key={clients.id}>
                    <Link href={{
                        pathname: "/clients/[id]",
                        query: { id: client.id }
                    }}>{client.name}</Link>
                </li>)}
            </ul>

        </div>
    )
}
export default ClientsPage;