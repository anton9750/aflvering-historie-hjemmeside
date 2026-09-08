import { Header } from '../../components/Header/Header';
import { Navigation } from '../../components/Navigation/Navigation';

import { useFetch } from '../../hooks/useFetch';
import type { HistoryData } from '../../types/history';

export function Today() {

  const { data, loading, error } = useFetch<HistoryData>(null);

  return (
    <>
      <Header title="On This Day" subtitle="What happened on this day - historical events, deaths and births throughout time" />
      <Navigation />
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong: {error}</p>}
   
     
    </>
  );
}