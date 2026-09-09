import { Header } from '../../components/Header/Header';
import { Navigation } from '../../components/Navigation/Navigation';
import { Timeline } from '../../components/Timeline/Timeline';
import { BackToTop } from '../../components/BackToTop/BackToTop';
import { useFetch } from '../../hooks/useFetch';
import type { HistoryData } from '../../types/history';

const TODAY_URL = 'https://history.muffinlabs.com/date';

export function Today() {
  const { data, loading, error } = useFetch<HistoryData>(TODAY_URL);

  return (
    <>
      <Header title="On This Day" subtitle="What happened on this day - historical events, deaths and births throughout time" />
      <Navigation />
      {loading && <p>Loading...</p>}
      {error && <p>Somethin went wrong: {error}</p>}
      {data && <Timeline events={data.data.Events} />}
      <BackToTop />
    </>
  );
}
