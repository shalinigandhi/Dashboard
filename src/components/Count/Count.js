import './count.scss';
const Count = ({clicks, impressions}) => {
    return (
        <div className="count-container">
            <div className="count-wrapper">
                <p className="heading">Total Clicks</p>
                <p className="value">{clicks}</p>
            </div>
            <div className="count-wrapper">
                <p className="heading">Total impressions</p>
                <p className="value">{impressions}</p>
            </div>
        </div>
    )
}

export default Count;
