import React from 'react';

class weather extends React.Component{

    render(){
        return(
            this.props.weather.map((day, index)=>(
                <div key={index}>
                    <p id = 'day'> day: {day.date}</p>
                    <p id = 'description'> description: {day.description} </p>
                </div>
            ))
        )
    }

}

export default weather;