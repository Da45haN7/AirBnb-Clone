import React from "react";
import './search.css'
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { Button } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from "react-router-dom";

export default function Search(){
    const history = useNavigate()
    const [startDate, setStartDate] = React.useState(new Date())
    const [endDate, setEndDate] = React.useState(new Date())

    const selectionRange={
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }

    function handleSelection(ranges){
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    return(
        <div className="search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelection}/>
            <h2>
                Number of Guests 
                <PeopleIcon/>
            </h2>
            <input min={0} defaultValue={2} type="number"/>
            <Button onClick={() => history('/search')}>AirBnb Search</Button>
        </div>
    )
}