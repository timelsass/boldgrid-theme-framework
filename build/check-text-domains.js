const textdomain = require( './modules/wp-textdomain-lint.js' );

textdomain( 'src/**/*.php', {
	domain: [ 'bgtfw', 'kirki' ],
	fix: true,
	force: true
} );
