import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
}

DateFormatter.propTypes = {
  dateString: PropTypes.string.isRequired,
};
