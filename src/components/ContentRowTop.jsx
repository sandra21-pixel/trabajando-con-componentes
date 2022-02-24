import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';


function ContentRowTop(){
	let tarjeta=[{
		clase:"primary",
		titulo:"Movies in Data Base",
		numero:21,
		icono:"fas fa-film fa-2x text-gray-300"

	},{
		clase:"success",
		titulo:"Total awards",
		numero:79,
		icono:"fas fa-award fa-2x text-gray-300"
	},{
		clase:"warning",
		titulo:"Actors quantity",
		numero:49,
		icono:"fas fa-user fa-2x text-gray-300"
	}]


    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					
					<ContentRowMovies tarjetas={tarjeta}/>
					
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						
						<LastMovieInDb/>

						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<GenresInDb/>
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;