import Link from 'next/link';
import {VehiclePerson} from '../../api/VehiclePerson';

export interface ListProps {
  ownersList: VehiclePerson[] | undefined;
}

export default function List({ownersList}: ListProps) {
  return (
    <div>
      
      {ownersList.map((e, index) => (
        <div key={index}>
          <Link as={`${e.vehicle}/${e.ownerName}`} href="/[vehicle]/[person]">
            <a>
              Navigate to {e.ownerName}'s {e.vehicle}
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}


List.getInitialProps = async (ctx) =>  {
  console.log('List->getInitialProps');
  // const responses = await ... -> fetch data
  const response: VehiclePerson[] | undefined = [
    {vehicle: 'car', ownerName: 'Owner01', details: 'some details here'},
    {vehicle: 'skate', ownerName: 'Owner02', details: 'some details here'},
    {vehicle: 'bicicle', ownerName: 'Owner03', details: 'some details here'},
  ]
  return {
    ownersList: response
  };
}