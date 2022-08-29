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
                {name: 'Jhon', salary: 800, increase: false, id: 1},
                {name: 'Gary', salary: 2000, increase: false, id: 2},
                {name: 'Serg', salary: 5000, increase: false, id: 3},
            ]
        }
    };


    addEmployers = (obj) => {
        this.setState(({data}) => {
            obj.id = Date.now();                                         //генерация уникального id 
            const newItem = [...data, obj]
            return {
                data: newItem
            }
        });
    };

    deleteItem = (id) => {
        this.setState(({data}) => {

            //!Напрямую удалать state нельза, поэтому создаем копию массива

            //1 способ
            //const index = data.findIndex(elem => elem.id === id);     //ищем индекс обьекта в массиве data по совпадению id

            //const before = data.slice(0, index);                      //копируем массив до элемента[index]
            //const after = data.slice(index + 1)                       //после элемента[index]

            //const newArr = [...before, ...after];                     //получаем один общий массив без элемент[index]
            //return {
            //    data: newArr
            //};

            //2 способ 
            return {
                data: data.filter(elem => elem.id !== id)               // записываем если id в эл массива не совпадает с получ id 
            }
        });
    };

    render() {
    
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployersList 
                    data = {this.state.data} 
                    onDelete={this.deleteItem} />
    
                <EmployersAddForm
                    onAdd={this.addEmployers} />
            </div>
        );
    }
}

export default App;