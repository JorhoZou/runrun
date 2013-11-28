var GAMETERRAIN_FILTER =
{
	Apply: function( inCanvas, inParameters )
	{
		
		var context = inCanvas.getContext( "2d" );

		context.beginPath();
		
		/*context.fillStyle = "#000";
		context.rect( 0, 0, inCanvas.width, inCanvas.height );
		context.fill();*/
		
		// Apply gradient to get a shape for a potential game
		var gradient = context.createLinearGradient( inCanvas.width, 0, 0, 0 );
		gradient.addColorStop( 0.03, '#080808' );   
		gradient.addColorStop( 0.08, '#222222' ); 
		gradient.addColorStop( 0.09, '#222222' );    
		gradient.addColorStop( 0.13, 'rgba(0, 0, 0, 0.7)' );   
		gradient.addColorStop( 0.6, 'rgba(0, 0, 0, 0.5)' );
		gradient.addColorStop( 0.7, 'rgba(0, 0, 0, 0.05)' );
		gradient.addColorStop( 0.8, 'rgba(0, 0, 0, 0.1)' );
		gradient.addColorStop( 0.9, 'rgba(255, 255, 255, 0.3)' );
		gradient.addColorStop( 0.95, 'rgba(255, 255, 255, 0.4)' );
		gradient.addColorStop( 1, 'rgba(0, 0, 0, 0.5)' );
		
		context.fillStyle = gradient;
		context.rect( 0, 0, inCanvas.width, inCanvas.height );
		context.fill();
		context.rect( 0, 0, inCanvas.width, inCanvas.height );
		context.fill();
		
		BLUR_FILTER.Apply( inCanvas, inParameters );
	}
};