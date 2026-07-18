
import Icon from "../Common/Icon";

const ScrolToTop = () => {
    return (
        <button className="scroltop" aria-label="scroll to top">
            <span className="relative" id="btn-vibrate">
                <Icon name="angle-up" />
            </span>
        </button>
    );
};

export default ScrolToTop;
