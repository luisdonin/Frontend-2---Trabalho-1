import './css/ProductSmall.css'
export function ProductSmall({productSubtitle, productTitle, bgImage}){
    return(
        <div className='prodct-card'>
        <div className="img-bg-small" style={{ backgroundImage: `url(${bgImage})` }}></div>
         <div className="text-content-small">
            <div className="product-info">
                <div className="product-text">
                    <h1>{productTitle}</h1>
                    <h3>{productSubtitle}</h3>
                </div>
            </div>
            <button className='btn-small'>+</button>
        </div>
        </div>
    
    );
}