import './app-filter.css';


const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'salaryIs1000', label: 'З/П выше 1000$'},
    ];

    const buttons = buttonsData.map(({name, label}) => {          //динамическое формирование кнопок
        const active = props.filter === name                      //либо false либо true(провер активность сравнивая name и filter)
        const clazz = active ? 'btn-light' : 'btn-outline-light'; //установка класса с помощью условия терн оператора
        return (
            <button className={`btn ${clazz}`} 
                    type="button"
                    key={name}
                    onClick={()=>props.filterVisible(name)}
                    >{label}</button>
        );
    });

    return (
        <div className="btn-group">
            {buttons}                                                 
        </div>
    );
}

export default AppFilter;