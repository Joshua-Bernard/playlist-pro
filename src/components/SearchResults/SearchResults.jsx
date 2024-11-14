import Tracklist from '../Tracklist/Tracklist';
export default function SearchResults({ songs }) {
  return (
    <>
      <h2>Hello Search results</h2>
      <Tracklist songs={songs} />
    </>
  );
}
