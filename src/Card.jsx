import '../public/Style.css';


    const  todoDes = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, ad!'
    const date = new Date();
    const currentDate = date.getDate();
    // const currentMonth = date.getMonth();
    const currentMonth = date.getMonth()
    const currentYear = date.getFullYear();

export default function(props){
    const {title , desc} =  props;
    
    return(
        <div>
           
            <div className='card'>
                <h3 className='card-title'>{title}</h3>
                <p className='card-description'>{desc}</p>
                <p className='card-date'>{`${currentDate} / ${currentMonth} / ${currentYear}`}</p>
            </div>
        </div>
    )
}