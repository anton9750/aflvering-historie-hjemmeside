import { useMemo, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Navigation } from '../../components/Navigation/Navigation';
import { Timeline } from '../../components/Timeline/Timeline';

import { useFetch } from '../../hooks/useFetch';
import type { HistoryData } from '../../types/history';

export function Since() {
  const [sinceYear, setSinceYear] = useState<number>(1947);


  const { data, loading, error } = useFetch<HistoryData>(null);

  const filteredEvents = useMemo(() => {
    if (!data) return [];
    return data.data.Events.filter((event) => Number(event.year) >= sinceYear);
  }, [data, sinceYear]);

  return (
    <>
      <Header
        title={`Since: ${sinceYear}`}
        subtitle="What happened on this day - Here you can enter a specific year to get all the events that happened on this day, since that year."
      />
      <Navigation />

      <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0' }}>
        <label>
          Year:
          <input
            type="number"
            value={sinceYear}
            onChange={(e) => setSinceYear(Number(e.target.value))}
          />
        </label>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong: {error}</p>}
      {!loading && !error && <Timeline events={filteredEvents} />}
      
    </>
  );
}