import './app-info.css';

const AppInfo = (props) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Oбщее число сотрудников: {props.employers}</h2>
            <h3>Премию получат: {props.increased}</h3>
        </div>
    );
};

export default AppInfo;