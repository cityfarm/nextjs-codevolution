export default async function Products({params}:{params:{id:string}}){
    const {id} = params;
    return <h1>This is products folder. Id = {id}</h1>
}