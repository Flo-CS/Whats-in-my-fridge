import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import {ReactComponent as PlusIcon} from "../../../assets/icons/plus.svg";
import {ReactComponent as MinusIcon} from "../../../assets/icons/minus.svg";
import {ReactComponent as TrashIcon} from "../../../assets/icons/trash.svg";


import "./ProductQuantityControls.scss"

export default function ProductQuantityControls({direction, quantity, onIncreaseQuantity, onDecreaseQuantity}) {

    const productControlsClass = classNames("product-quantity-controls", `product-quantity-controls--${direction}`)
    return <div className={productControlsClass}>
        <button
            className="product-quantity-controls__button"
            onClick={onIncreaseQuantity}
        >
            <PlusIcon className="product-quantity-controls__button-icon"/>
        </button>
        <p className="product-quantity-controls__quantity-indicator">{quantity}</p>
        <button
            className="product-quantity-controls__button"
            onClick={onDecreaseQuantity}
        >
            {quantity > 0 ?
                <MinusIcon className="product-quantity-controls__button-icon"/>
                :
                <TrashIcon
                    className="product-quantity-controls__button-icon product-quantity-controls__button-icon--caution"/>
            }
        </button>
    </div>
}

ProductQuantityControls.propTypes = {

    direction: PropTypes.oneOf(["vertical", "horizontal"]).isRequired,
    quantity: PropTypes.number.isRequired,
    onIncreaseQuantity: PropTypes.func.isRequired,
    onDecreaseQuantity: PropTypes.func.isRequired
}