import './bb.css'

export default function Com(props) {
    return (
        <div>
            <div>
                <a href={`/com/${props.path}`}>
                    <center><button className="bb">التعليقات والأسئلة</button></center>
                </a>
                <hr />
            </div>
        </div>
    );
}
