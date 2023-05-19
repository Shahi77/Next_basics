import { useRouter } from "next/router";
function ClientProjectsPage() {

    const router = useRouter();
    console.log(router.query);

    function loadProjectHandler() {
        //load data..
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: { id: 'max', clientprojectid: 'projectA' }

        })
        // router.push('/clients/max/projecta')    //router push is like using the link component just programaticaly
        //router.replace('/clients/max/projecta')  =>then we replace current page with dead one i.e. we can't go back after navigation

    }

    return (
        <div>
            <h1>The Project of a given Client </h1>
            <button>Load Project A</button>
        </div>
    )
}
export default ClientProjectsPage;