import './css/Product.css'
export function Product({productSubtitle, productTitle, bgImage}){
    return(
    <div className="img-bg" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="text-content">
            <h3>{productSubtitle}</h3>
            <h1>
                {productTitle}
            </h1>
            <button>Learn more →</button>
        </div>
    </div>
    );
}