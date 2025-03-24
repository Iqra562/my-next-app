export default function Meals({params}) {
    return (
      <main>
        <h1 style={{ color: 'white', textAlign: 'center' }}>
         Dynamic  routes 
        </h1>
         {params.slug}
      </main>
    );
  }
  