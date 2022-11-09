import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
    return (
    <div className="divBtn">
        <button className="Btn">
            <FontAwesomeIcon icon={faCartShopping} className="font" />
        </button>
    </div> 
            )
       
};

export default CartWidget;