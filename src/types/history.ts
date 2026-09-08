export interface HistoryLink {
  title: string;
  link: string;
}

export interface HistoryEvent {
  year: string;
  text: string;
  html: string;
  no_year_html: string;
  links: HistoryLink[];
}

export interface HistoryEventsData {
  Events: HistoryEvent[];
  Births?: HistoryEvent[];
  Deaths?: HistoryEvent[];
}

export interface HistoryData {
  date: string;
  url: string;
  data: HistoryEventsData;
}
