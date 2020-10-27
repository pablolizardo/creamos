import Link from 'next/link'
export default function Navigation (props) {
  return (
    <div>
      <Link href='/'><a>Home</a></Link>
      <Link href='/comunidades'><a>Comunidades</a></Link>
      <Link href='/santos'><a>Santos</a></Link>
      <Link href='/carismas'><a>Carismas</a></Link>
      <Link href='/parroquias'><a>Parroquias</a></Link>
    </div>
  )
}
