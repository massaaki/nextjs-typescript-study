import Link from 'next/link';

const people = [
  {v: 'car', name: 'Mauricio'},
  {v: 'boat', name: 'User02'},
  {v: 'airplane', name: 'User03'},
  {v: 'Mercedez', name: 'User04'},
];


export default function Details() {
  return <div>
    <ul>
    { people.map( (e, index) => (
      <li key={index}>
        <Link as={`${e.v}/${e.name}`} href="/[vehicle]/[person]">
          <a>Navigate to {e.name}'s {e.v}</a>
        </Link>
      </li>
    ))}
    </ul>
    
      
  </div>
}