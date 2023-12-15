
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Calender = ({ value, handleSelect }) => {
  return (
    <DateRange
      rangeColors={['#F43F5E']}
      direction='vertical'
      showDateDisplay={false}
    />
  )
}

export default Calender;