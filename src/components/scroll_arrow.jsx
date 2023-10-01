import '../css/arrow.scss';

export default function ScrollBtn() {
    function scrollDown(event){
        event.preventDefault();
    
        window.scrollTo({top: 500, behavior: 'smooth'});
    }

    return (
        <button className="down-arrow-container" id="downarrow" onClick={scrollDown}>
            <div className="down-arrow-btn">
                <div className="down-arrow">

                </div>
            </div>
        </button>
    );
}