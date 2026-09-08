import type { HistoryEvent } from '../../types/history';
import { EventCard } from '../EventCard/EventCard';
import { Row, Side, TimelineWrapper } from './Timeline.styles';

interface TimelineProps {
  events: HistoryEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <TimelineWrapper>
      {events.map((event, index) => {
        const side: 'left' | 'right' = index % 2 === 0 ? 'left' : 'right';
        return (
          <Row key={`${event.year}-${index}`} $side={side}>
            <Side>
              <EventCard event={event} />
            </Side>
          </Row>
        );
      })}
    </TimelineWrapper>
  );
}
