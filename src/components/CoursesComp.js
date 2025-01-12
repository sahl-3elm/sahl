export default function CourseComp(props) {
    return (
        <div className="card shaheen-card" style={{ width: '18rem', margin: '15px', flex: '1 0 18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.name} Courses</p>
                <a href={props.url} className="btn btn-primary">إنتقل</a>
            </div>
        </div>
    );
}
