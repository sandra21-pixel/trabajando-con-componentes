import React from "react";
import PropTypes from "prop-types"

function ContentRowMovies(props){
    return(
        
        <div className="row">
						
						
                            {props.tarjetas.map((tarjeta,i)=>
                                <div key={tarjeta+i}className="col-md-4 mb-4">
                                    <div className={`card border-left-${tarjeta.clase} shadow h-100 py-2`}>
								        <div className="card-body">
									        <div className="row no-gutters align-items-center">
										        <div className="col mr-2">
											        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{tarjeta.titulo}</div>
											        <div className="h5 mb-0 font-weight-bold text-gray-800">{tarjeta.numero}</div>
										        </div>
										    <div className="col-auto">
											    <i className={tarjeta.icono}></i>
										    </div>
									        </div>
								        </div>
							        </div>
                                </div>
                            )}
							
		</div>
    )
}

ContentRowMovies.propTypes={
    tarjetas:PropTypes.array,
    customProp: function(tarjetas) {
        for(let i=0; i<tarjetas.tarjetas.length; i++){
            if(typeof tarjetas.tarjetas[i].clase !== "string" || typeof tarjetas.tarjetas[i].titulo !== "string" || typeof tarjetas.tarjetas[i].numero !== "number" || typeof tarjetas.tarjetas[i].icono !== "string"){
                return new Error ("es invalido la clase, el titulo, el numero y el icono")
            }
            
        }
        
            
        
    }
}


export default ContentRowMovies