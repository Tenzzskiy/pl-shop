export const dataArray = ({title,price,time}) =>{
    console.log('123123221',title,price,time)
    return(
        <div style="padding-top: 10px; padding-bottom: 10px">
            <ul>
                <li><b>название:</b> {title}</li>
                <li><b>длительность:</b> {time}</li>
                <li><b>сумма:</b> {price}</li>
            </ul>
        </div>
    )
}