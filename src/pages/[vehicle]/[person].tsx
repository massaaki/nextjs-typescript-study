import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { VehiclePerson } from '../../../api/VehiclePerson';
import { NextPageContext, NextPage } from 'next';

export interface PersonProps {
  ownersList: VehiclePerson[] | undefined;
}


export default function Person({ownersList}: PersonProps )  {
  const router = useRouter();
  const [ownerList, setOwners] = useState(ownersList);

  useEffect( () => {
    async function loadData() {
      const response: VehiclePerson[] | undefined = [
        {vehicle: 'car', ownerName: 'Owner01', details: 'Some details about Owner01'},
        {vehicle: 'skate', ownerName: 'Owner02', details: 'Some details about Owner02'},
        {vehicle: 'bicicle', ownerName: 'Owner03', details: 'Some details about Owner03'},
      ];
      const ownerList: VehiclePerson[] | undefined = response; //ownerlist = await rsponse.json();

      setOwners(ownerList);
    }
    if(ownersList.length == 0) {
      loadData();
    }
  }, [])

  return <pre>{ownersList[0]?.details}</pre>
}



interface PersonPageContext extends NextPageContext {
  query: {
    person: string;
    vehicle: string;
    details: string;
  }
};

Person.getInitialProps = async (ctx: PersonPageContext) =>  {
  
  console.log('Person->getInitialProps');
  const {query} = ctx; //pas parameters...
  console.log('query..:', query);
  return {
    // const responses = await ... -> fetch data
    ownersList: [
      {vehicle: 'car', ownerName: 'Owner01', details: 'Some details about Owner01'},
      {vehicle: 'skate', ownerName: 'Owner02', details: 'Some details about Owner02'},
      {vehicle: 'bicicle', ownerName: 'Owner03', details: 'Some details about Owner03'},
    ]
  }
}