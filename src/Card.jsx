import '../public/Style.css';

export default function(){
    const todoTitle = 'Call Family';
    const  todoDes = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, ad!'
    const date = new Date();
    const currentDate = date.getDate();
    // const currentMonth = date.getMonth();
    const currentMonth = date.getMonth()
    const currentYear = date.getFullYear();

    // const headingStyle = {
    //     backgroundColor: 'purple',
    //     color: 'white',
    //     textAlign: 'center',
    //     padding: '15px',
    // }
    return(
        <div>
           
            <div className='card'>
                <h3 className='card-title'>{todoTitle}</h3>
                <p className='card-description'>{todoDes}</p>
                <p className='card-date'>{`${currentDate} / ${currentMonth} / ${currentYear}`}</p>
            </div>
        </div>
    )
}