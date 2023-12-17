
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Calender = ({ value, handleSelect }) => {

  if (!value || isNaN(value.startDate) || isNaN(value.endDate)) {
    // Handle the case when value is not valid
    return <div>No valid date range selected</div>;
  }

  const { startDate, endDate, key } = value;

  const minDate = startDate ? new Date(startDate.setHours(0, 0, 0, 0)) : null;
  const maxDate = endDate ? new Date(endDate.setHours(23, 59, 59, 999)) : null;

  const range = {
    startDate, endDate, key
  }

  return (
    <DateRange
      ranges={[range]}
      rangeColors={['#F43F5E']}
      direction='vertical'
      showDateDisplay={false}
      minDate={minDate}
      maxDate={maxDate}
    />
  )
}

export default Calender;