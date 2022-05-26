import "./date.scss"
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';

const Date = () => {
  return (
    <div className="date">
    <div className="maindatea"> <p> 22 Jun 2020  <CalendarTodayOutlined className="Icon"></CalendarTodayOutlined> </p> </div>
    <div className="maindatex"> <p> 28 Jun 2020  <CalendarTodayOutlined className="Icon"></CalendarTodayOutlined> </p> </div>

    </div>
  )
}

export default Date