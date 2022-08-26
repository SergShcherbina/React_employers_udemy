import EmployersListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";

const EmployersList = ({data}) => {

    const elements = data.map( (item, i) => {
        const {...itemProps} = item;                          //!частичная деструктуризация
        return <EmployersListItem key={i} {...itemProps}/>
        
                //<EmployersListItem                              //второй способ
                    //key={item.id}
                    //name= {item.name} 
                    //salary={item.salary} 
                    //increase={item.increase} 
                ///>                                               
});

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployersList;