import type { HistoryEvent } from '../../types/history';
import { Card, ReadMore, Text, Year } from './EventCard.styles';

interface EventCardProps {
  event: HistoryEvent;
}

export function EventCard({ event }: EventCardProps) {
  const readMoreLink = event.links[0]?.link;

  return (
    <Card>
      <Year>Year: {event.year}</Year>
      <Text>{event.text}</Text>
      {readMoreLink && (
        <ReadMore href={readMoreLink} target="_blank" rel="noopener noreferrer">
          Read more →
        </ReadMore>
      )}
    </Card>
  );
}
