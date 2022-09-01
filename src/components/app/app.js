import { Component } from 'react/cjs/react.development';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import EmployersList from '../employers-list/employers-list';
import SearchPanel from '../search-panel/search-panel';

import './app.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [
                {name: 'Jhon', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Gary', salary: 2000, increase: true, rece: false, id: 2},
                {name: 'Serg', salary: 5000, increase: false, rece: false, id: 3},
            ], 
            term: '', 
            filter: 'all',
        }
    };

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {                              //map возвращает новый масив с копиями обьектов
                if(item.id === id){                                  
                    return {...item, [prop]: !item[prop]}         //возвр obj с изменненым incrase на противоположный
                }
                return item;                                      //возвращаем остальные обьекты в масисив
            })
        }));
    };

    addEmployers = (obj) => {                                    
        this.setState(({data}) => {
            if(obj.name !== '' && obj.salary !== '' ){
                obj.id = Date.now();
                obj.rise = false;                                 //генерация уникального id 
                const newItem = [...data, obj];
                return {
                    data: newItem
                }
            }
            
        });
    };

    searchEmp = (items, term) => {                                //поиск по имени
        if(term.length === 0){                                    //если поиск строка пустая, то возвращаем тот же массив
            return items;
        }

        return items.filter( item => {                            //возвращаем те строки
            return item.name.indexOf(term) > -1                   //которые содержат введенный текст(rtem)
        });
    };

    onUpdateSearch = (term) => {                                  //изменяем сост term на получ-е из компонента Serch-panel
        this.setState({term})
    }

    filterPost = (items, filter) => {                             //фильтр на основании условия сравнения с переменной state.filter
        switch (filter){
            case 'rise':
                return items.filter(item => item.rise);
            case 'salaryIs1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    };

    filterVisible = (filter) => {                                  //изменяем сост filter на получ-е пр нажатии на btn в AppFilter
        this.setState({filter})
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(elem => elem.id !== id)         // записываем если id в эл массива не совпадает с получ id 
            }
        });
    };

    idSalary = (id, itemSalary) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, salary: itemSalary}
                }
            return item
            })
        }));
    };

    render() {
        const employers = this.state.data.length                              
        const increased = this.state.data.filter( item => item.increase).length //все обьекты массива в котором increace == true
        const {data, term, filter} = this.state;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo 
                    employers={employers}
                    increased={increased} />
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter 
                        filterVisible={this.filterVisible}
                        filter={filter}
                        />
                </div>
    
                <EmployersList 
                    data = {visibleData} 
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} 
                    idSalary={this.idSalary}
                    />
    
                <EmployersAddForm
                    onAdd={this.addEmployers} />
            </div>
        );
    }
}

export default App;