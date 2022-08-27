import { Component } from "react/cjs/react.development";
import "./employers-list-item.css";


class EmployersListItem extends Component {
//({name, salary, increase, id})
    constructor(props){
        super(props);
        this.state = {                                                   //!состояние котрое можно менять
            increase: false,
            like: false
        }
    };
    
    onIncrease = () => {                                                 //функция по изменению состояния
        this.setState( (state) => ({increase: !state.increase}))
    };

    liked = () => {                                                       
        this.setState( ({like}) => {
            return {like: !like}
        });
    }


    render() {
        const {name, salary} = this.props;
        const {increase, like} = this.state;
        console.log('like: ', like);

        let classNames = "list-group-item d-flex justify-content-between";  
        if(increase) {                                                   //добавление класса в зависимости от состояния
            classNames += ' increase';
        };
        if(like) {                                                   //добавление класса в зависимости от состояния
            classNames += ' like';
        };

        return(
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.liked} >{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary +'$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            className="btn-cookie btn-sm "
                            onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default EmployersListItem;