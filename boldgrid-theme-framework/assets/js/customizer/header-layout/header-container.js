( function( $ ) {

	/**
	 * Update classes for blog layouts.
	 */
	wp.customize( 'bgtfw_header_layout_position', function( value ) {
		value.bind( function( to ) {
			var navi = $( '#navi' );
			navi.removeClass( 'container' );
			if ( to === 'header-top' ) {
				navi.addClass( wp.customize( 'header_container' )() );
			}
		} );
	} );

	/**
	 * Update classes for blog layouts.
	 */
	wp.customize( 'header_container', function( value ) {
		value.bind( function( to ) {
			$( '#navi' ).removeClass( 'container' ).addClass( to );
		} );
	} );
} )( jQuery );