import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Navigation } from '../../components/Navigation/Navigation';
import { Timeline } from '../../components/Timeline/Timeline';

import { useFetch } from '../../hooks/useFetch';
import type { HistoryData } from '../../types/history';

export function ByDate() {
  const today = new Date();
  const [month, setMonth] = useState<number>(today.getMonth() + 1);
  const [day, setDay] = useState<number>(today.getDate());


  const url = null;
  const { data, loading, error } = useFetch<HistoryData>(url);

  return (
    <>
      <Header
        title={`On: ${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}`}
        subtitle="What happened on this day - Here you can enter a specific date to only get events that happened on this date"
      />
      <Navigation />

      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, margin: '24px 0' }}>
        <label>
          Month:
          <input
            type="number"
            min={1}
            max={12}
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
          />
        </label>
        <label>
          Day:
          <input
            type="number"
            min={1}
            max={31}
            value={day}
            onChange={(e) => setDay(Number(e.target.value))}
          />
        </label>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong: {error}</p>}
      {data && <Timeline events={data.data.Events} />}
      
    </>
  );
}