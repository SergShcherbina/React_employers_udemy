import { Component } from 'react/cjs/react.production.min';
import './search-panel.css'

class SearchPanel extends Component {
    constructor(props){
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;                                 //записываем значение из input в переменную trem
        this.setState({term});                                       //перезаписываем состояние
        this.props.onUpdateSearch(term);                             //передаем состояние выше по props
    };

    render() {
        return (
            <input 
                type="text" 
                className='form-control serch-input'
                placeholder='Найти сотрудника'
                onChange={this.onUpdateSearch}
                value={this.state.term}
                />
        )
    }
}

export default SearchPanel;