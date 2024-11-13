

type ProductProps = {
    params: {
      id: string;
    };
  };
  
  export default function Products({ params }: ProductProps) {
    const { id } = params;
    return <h1>This is products folder. Id = {id}</h1>;
  }
  