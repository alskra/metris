const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');
const imageminGifsicle = require('imagemin-gifsicle');
const {lstatSync, readdirSync} = require('fs');
const {join} = require('path');

/**
 * @description
 * Script for compressing all our static images.
 * Currently, reads images from static/{images_sub_folder}
 * and outputs them into static/compressed/{images_sub_folder}
 *
 * ie. static/images  => static/compressed/static/images
 * ie. static/img     => static/compressed/static/img
 */

/**
 * Output directory
 * Where all the compressed images will go
 */
const OUTPUT_DIR = /*'static/compressed'*/ '.';

/**
 * List of input directories
 */
const INPUT_DIRS = [
	// 'static/img',
	// 'static/images'
	// ADD NEW FOLDERS HERE
	// ...
	'src/img',
	'public/img',
	'public/upload'
];

/**
 * Imagemin Options
 *
 * @see https://github.com/imagemin/imagemin
 */
const options = {
	/**
	 * JPEG compression plugin options
	 *
	 * @see https://github.com/imagemin/imagemin-mozjpeg
	 */
	mozjpegOptions: {
		progressive: true,
		quality: 90
	},
	/**
	 * PNG compression plugin options
	 *
	 * @see https://github.com/imagemin/imagemin-pngquant
	 */
	pngquantOptions: {
		quality: [0.6, 0.8]
	},
	/**
	 * SVG compression plugin
	 *
	 * @see https://github.com/imagemin/imagemin-svgo
	 */
	svgoOptions: {
		plugins: [
			{removeViewBox: false}
		]
	},
	/**
	 * GIF compression plugin options
	 *
	 * @see https://github.com/imagemin/imagemin-gifsicle
	 */
	gifOptions: {
		optimizationLevel: 3
	}
};

/**
 * Helper functions to get directories / sub-directories
 *
 * @see https://stackoverflow.com/a/40896897/4364074
 */
const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
	readdirSync(source)
		.map(name => join(source, name))
		.filter(isDirectory);
const getDirectoriesRecursive = source => [
	source,
	...getDirectories(source)
		.map(getDirectoriesRecursive)
		.reduce((a, b) => a.concat(b), [])
];

try {
	console.log('Beginning image compression...');

	(async () => {
		let imageDirs = [];

		INPUT_DIRS.map(
			dirname =>
				(imageDirs = imageDirs.concat(getDirectoriesRecursive(dirname)))
		);

		/**
		 * Loop through all subfolders, and recursively run imagemin,
		 * outputting to the same subfolders inside OUTPUT_DIR folder
		 */
		for (let i in imageDirs) {
			const dir = imageDirs[i];
			await imagemin([`${dir}/*.{jpg,png,svg,gif}`], join(OUTPUT_DIR, dir), {
				plugins: [
					imageminMozjpeg(options['mozjpegOptions']),
					imageminPngquant(options['pngquantOptions']),
					imageminSvgo(options['svgoOptions'])
					/**
					 * @todo
					 * Commenting out for now because gif plugin is broken at the moment
					 *
					 * @see https://github.com/imagemin/imagemin-gifsicle/issues/27
					 * @see https://github.com/sindresorhus/is-gif/issues/2
					 */
					// imageminGifsicle(options['gifOptions']),
				]
			});
			console.log(`...${(((+i + 1) / imageDirs.length) * 100).toFixed(0)}%`);
		}

		console.log('Finished compressing all images!');
	})();
} catch (e) {
	console.log(e);
}
