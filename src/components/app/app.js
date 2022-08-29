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
            ]
        }
    };

    onToggleProp = (id, prop) => {
        //!первый способ
        //this.setState(({data}) => {
            //const index = data.findIndex(elem => elem.id === id);

            //const oldItem = data[index];
            //const newItem = {...oldItem, increase: !oldItem.increase}
            //const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            //console.log('newArr: ', newArr);

            //return {data: newArr}
        //});

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
                obj.rise = false;                                       //генерация уникального id 
                const newItem = [...data, obj];
                return {
                    data: newItem
                }
            }
            
        });
    };

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(elem => elem.id !== id)            // записываем если id в эл массива не совпадает с получ id 
            }
        });
    };

    render() {
        const employers = this.state.data.length                              
        const increased = this.state.data.filter( item => item.increase).length //все обьекты массива в котором increace == true

        return (
            <div className="app">
                <AppInfo 
                    employers={employers}
                    increased={increased} />
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployersList 
                    data = {this.state.data} 
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
    
                <EmployersAddForm
                    onAdd={this.addEmployers} />
            </div>
        );
    }
}

export default App;