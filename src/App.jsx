import { useState } from 'react';
import SearchResults from './components/SearchResults/SearchResults';
function App() {
  const [songs, setSongs] = useState([
    {
      name: 'Smoothies in 1991',
      artist: 'Larry June',
      album: 'Spaceships on the Blade',
      id: 1,
    },
    {
      name: 'N95',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 2,
    },
    {
      name: "Don't Check Me",
      artist: 'Larry June',
      album: 'Spaceships on the Blade',
      id: 3,
    },
    {
      name: 'United in Grief',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 4,
    },
    {
      name: 'Organic Fatherhood',
      artist: 'Larry June',
      album: 'Spaceships on the Blade',
      id: 5,
    },
    {
      name: 'Father Time',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 6,
    },
    {
      name: '6am in Sausalito',
      artist: 'Larry June',
      album: 'Spaceships on the Blade',
      id: 7,
    },
    {
      name: 'Rich Spirit',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 8,
    },
    {
      name: 'Private Valet',
      artist: 'Larry June',
      album: 'Spaceships on the Blade',
      id: 9,
    },
    {
      name: 'We Cry Together',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 10,
    },
    {
      name: 'Iced Coffee',
      artist: 'Larry June',
      album: 'Orange Print',
      id: 11,
    },
    {
      name: 'Purple Hearts',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 12,
    },
    {
      name: 'Gas Station Run',
      artist: 'Larry June',
      album: 'Orange Print',
      id: 13,
    },
    {
      name: 'Count Me Out',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 14,
    },
    {
      name: 'Still Boomin',
      artist: 'Larry June',
      album: 'Mr. Midnight',
      id: 15,
    },
    {
      name: 'Crown',
      artist: 'Kendrick Lamar',
      album: 'Mr. Morale & the Big Steppers',
      id: 16,
    },
  ]);

  return (
    <>
      <SearchResults songs={songs} />
    </>
  );
}

export default App;
