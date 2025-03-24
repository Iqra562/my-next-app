import Link from "next/link";

export default function ShareMealsPage() {
    return (
      <main>
        <h1 style={{ color: 'white', textAlign: 'center' }}>
         Share 
        </h1>
        <Link href='meal-1'>MEAL 1</Link>
        <Link href='meal-2'>MEAL 2</Link>
      </main>
    );
  }
  